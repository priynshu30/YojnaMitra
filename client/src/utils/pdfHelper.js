/**
 * YojnaMitra Citizen PDF & Document Helper
 * 100% Client-side, secure, in-browser PDF manipulation.
 */

// Dynamically load external scripts from reliable CDN if not present
export const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(script);
  });
};

export const ensurePdfLib = async () => {
  if (window.PDFLib) return window.PDFLib;
  await loadScript('https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js');
  return window.PDFLib;
};

export const ensureJsPdf = async () => {
  if (window.jspdf) return window.jspdf.jsPDF;
  await loadScript('https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js');
  return window.jspdf.jsPDF;
};

/**
 * Convert list of image Files / URLs to single clean A4 / Auto PDF
 */
export const convertImagesToPdf = async (images, options = {}) => {
  const { orientation = 'portrait', pageSize = 'a4', margin = 10, quality = 0.85, filter = 'none' } = options;
  const jsPDF = await ensureJsPdf();
  
  const doc = new jsPDF({
    orientation: orientation === 'landscape' ? 'l' : 'p',
    unit: 'mm',
    format: pageSize === 'a4' ? 'a4' : [210, 297],
    compress: true
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  for (let i = 0; i < images.length; i++) {
    if (i > 0) doc.addPage();

    const imgData = await processImage(images[i], { quality, filter });
    const imgProps = doc.getImageProperties(imgData);

    const maxWidth = pageWidth - (margin * 2);
    const maxHeight = pageHeight - (margin * 2);

    let renderWidth = maxWidth;
    let renderHeight = (imgProps.height * renderWidth) / imgProps.width;

    if (renderHeight > maxHeight) {
      renderHeight = maxHeight;
      renderWidth = (imgProps.width * renderHeight) / imgProps.height;
    }

    const x = margin + (maxWidth - renderWidth) / 2;
    const y = margin + (maxHeight - renderHeight) / 2;

    doc.addImage(imgData, 'JPEG', x, y, renderWidth, renderHeight, undefined, 'FAST');
  }

  return doc.output('blob');
};

/**
 * Compress and process an image file with custom filters and target size
 */
export const processImage = (fileOrUrl, { quality = 0.8, filter = 'none', targetWidth, targetHeight } = {}) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      canvas.width = targetWidth || img.width;
      canvas.height = targetHeight || img.height;

      // Draw original
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Apply Filters
      if (filter === 'grayscale' || filter === 'photocopy') {
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;
        for (let i = 0; i < data.length; i += 4) {
          const avg = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
          if (filter === 'photocopy') {
            // High contrast B&W threshold
            const val = avg > 140 ? 255 : (avg < 90 ? 0 : avg);
            data[i] = val;
            data[i + 1] = val;
            data[i + 2] = val;
          } else {
            data[i] = avg;
            data[i + 1] = avg;
            data[i + 2] = avg;
          }
        }
        ctx.putImageData(imgData, 0, 0);
      }

      resolve(canvas.toDataURL('image/jpeg', quality));
    };

    img.onerror = reject;

    if (typeof fileOrUrl === 'string') {
      img.src = fileOrUrl;
    } else {
      const reader = new FileReader();
      reader.onload = (e) => { img.src = e.target.result; };
      reader.onerror = reject;
      reader.readAsDataURL(fileOrUrl);
    }
  });
};

/**
 * Target File Size Compressor (<200KB, <100KB, <50KB)
 */
export const compressToTargetKb = async (file, targetKb = 200) => {
  let quality = 0.92;
  let dataUrl = await processImage(file, { quality });

  // Iteratively reduce quality if needed
  let byteString = atob(dataUrl.split(',')[1]);
  let currentKb = byteString.length / 1024;

  while (currentKb > targetKb && quality > 0.15) {
    quality -= 0.12;
    dataUrl = await processImage(file, { quality });
    byteString = atob(dataUrl.split(',')[1]);
    currentKb = byteString.length / 1024;
  }

  // Convert dataURL to Blob
  const mimeString = dataUrl.split(',')[0].split(':')[1].split(';')[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return {
    blob: new Blob([ab], { type: mimeString }),
    finalKb: Math.round(currentKb),
    dataUrl
  };
};

/**
 * Merge Multiple PDFs into 1 single PDF
 */
export const mergePdfs = async (pdfFiles) => {
  const PDFLib = await ensurePdfLib();
  const mergedPdf = await PDFLib.PDFDocument.create();

  for (const file of pdfFiles) {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await PDFLib.PDFDocument.load(arrayBuffer);
    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    copiedPages.forEach((page) => mergedPdf.addPage(page));
  }

  const mergedPdfBytes = await mergedPdf.save();
  return new Blob([mergedPdfBytes], { type: 'application/pdf' });
};
