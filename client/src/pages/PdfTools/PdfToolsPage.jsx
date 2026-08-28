import React, { useState } from 'react';
import {
  FileText,
  FileImage,
  Layers,
  Minimize2,
  Crop,
  Download,
  Trash2,
  Plus,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  RefreshCw,
  Eye,
  Lock,
  ArrowRight,
  UploadCloud,
  Sliders,
  Maximize2
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { convertImagesToPdf, compressToTargetKb, mergePdfs } from '../../utils/pdfHelper';

const PdfToolsPage = () => {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('img2pdf');

  // State for Image to PDF
  const [images, setImages] = useState([]);
  const [orientation, setOrientation] = useState('portrait');
  const [filter, setFilter] = useState('none');
  const [quality, setQuality] = useState(0.85);
  const [converting, setConverting] = useState(false);
  const [generatedPdfBlob, setGeneratedPdfBlob] = useState(null);

  // State for Compressor
  const [compressFile, setCompressFile] = useState(null);
  const [targetKb, setTargetKb] = useState(200);
  const [compressedResult, setCompressedResult] = useState(null);
  const [compressing, setCompressing] = useState(false);

  // State for PDF Merger
  const [mergeFiles, setMergeFiles] = useState([]);
  const [merging, setMerging] = useState(false);
  const [mergedPdfBlob, setMergedPdfBlob] = useState(null);

  // State for Passport / Signature Resizer
  const [photoFile, setPhotoFile] = useState(null);
  const [photoType, setPhotoType] = useState('photo'); // 'photo' | 'signature'
  const [resizedPhotoResult, setResizedPhotoResult] = useState(null);
  const [resizingPhoto, setResizingPhoto] = useState(false);

  // Handlers for Image to PDF
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;
    const newItems = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      name: file.name,
      size: (file.size / 1024).toFixed(1) + ' KB'
    }));
    setImages((prev) => [...prev, ...newItems]);
    setGeneratedPdfBlob(null);
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setGeneratedPdfBlob(null);
  };

  const handleConvertImagesToPdf = async () => {
    if (!images.length) return;
    try {
      setConverting(true);
      const blob = await convertImagesToPdf(
        images.map((item) => item.file),
        { orientation, filter, quality }
      );
      setGeneratedPdfBlob(blob);
    } catch (err) {
      console.error(err);
      alert(lang === 'hi' ? 'PDF बनाने में त्रुटि हुई.' : 'Error generating PDF.');
    } finally {
      setConverting(false);
    }
  };

  // Handlers for Compressor
  const handleCompressFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setCompressFile(file);
    setCompressedResult(null);
  };

  const handleRunCompress = async () => {
    if (!compressFile) return;
    try {
      setCompressing(true);
      const res = await compressToTargetKb(compressFile, targetKb);
      setCompressedResult(res);
    } catch (err) {
      console.error(err);
      alert(lang === 'hi' ? 'कंप्रेस करने में त्रुटि हुई.' : 'Compression error.');
    } finally {
      setCompressing(false);
    }
  };

  // Handlers for PDF Merge
  const handleMergeUpload = (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;
    setMergeFiles((prev) => [...prev, ...files]);
    setMergedPdfBlob(null);
  };

  const handleRunMerge = async () => {
    if (mergeFiles.length < 2) {
      alert(lang === 'hi' ? 'कम से कम 2 PDF चुनें.' : 'Please select at least 2 PDF files.');
      return;
    }
    try {
      setMerging(true);
      const blob = await mergePdfs(mergeFiles);
      setMergedPdfBlob(blob);
    } catch (err) {
      console.error(err);
      alert(lang === 'hi' ? 'PDF जोड़ने में त्रुटि हुई.' : 'Merge error.');
    } finally {
      setMerging(false);
    }
  };

  // Handlers for Passport Photo Resizer
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPhotoFile(file);
    setResizedPhotoResult(null);
  };

  const handleResizePhoto = async () => {
    if (!photoFile) return;
    try {
      setResizingPhoto(true);
      const targetSize = photoType === 'photo' ? 50 : 20; // 50KB for photo, 20KB for signature
      const res = await compressToTargetKb(photoFile, targetSize);
      setResizedPhotoResult(res);
    } catch (err) {
      console.error(err);
    } finally {
      setResizingPhoto(false);
    }
  };

  const downloadBlob = (blob, filename) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const tabs = [
    {
      id: 'img2pdf',
      titleHi: 'फोटो से PDF (JPG to PDF)',
      titleEn: 'Images to PDF',
      icon: FileImage,
      badge: 'Most Popular',
      descHi: 'आधार कार्ड, राशन कार्ड, मार्कशीट की फोटो को साफ़ A4 PDF में बदलें',
      descEn: 'Convert photos of documents into clean official A4 PDF'
    },
    {
      id: 'compress',
      titleHi: '200KB / 100KB कंप्रेसर',
      titleEn: 'Compress Document',
      icon: Minimize2,
      badge: 'Govt Limit',
      descHi: 'सरकारी पोर्टल के लिए फ़ाइल साइज़ 200KB, 100KB या 50KB के अंदर करें',
      descEn: 'Reduce document size to meet government upload limits (<200KB)'
    },
    {
      id: 'merge',
      titleHi: 'PDF जोड़ें (Merge PDF)',
      titleEn: 'Merge PDFs',
      icon: Layers,
      badge: 'Fast',
      descHi: 'आधार, आय व बैंक पासबुक की अलग-अलग PDF को एक में मिलाएं',
      descEn: 'Combine multiple PDFs into a single file for easy submission'
    },
    {
      id: 'passport',
      titleHi: 'पासपोर्ट फोटो व साइन (50KB/20KB)',
      titleEn: 'Photo & Signature Tool',
      icon: Crop,
      badge: 'Form Ready',
      descHi: 'ऑनलाइन फॉर्म के लिए पासपोर्ट फोटो 50KB व हस्ताक्षर 20KB बनाएं',
      descEn: 'Auto resize passport photo (<50KB) & signature (<20KB)'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 animate-fadeIn">
      
      {/* ── Page Header ── */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAF6EE] text-[#168447] text-xs font-bold uppercase tracking-wider border border-[#168447]/20 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#168447]" />
          <span>{lang === 'hi' ? 'नागरिक दस्तावेज़ व PDF सेवा केंद्र' : 'Citizen Document & PDF Toolkit'}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#142338] tracking-tight">
          {lang === 'hi' ? 'सरकारी फॉर्म के लिए 100% फ्री PDF टूल्स' : 'Free In-Browser PDF & Document Tools for Govt Forms'}
        </h1>

        <p className="text-xs sm:text-sm text-[#5A6A6A] font-medium max-w-2xl mx-auto">
          {lang === 'hi'
            ? 'बिना किसी साइबर कैफे जाए, अपने मोबाइल से आधार, मार्कशीट को 200KB में कंप्रेस करें, फोटो से PDF बनाएं व फॉर्म रेडी करें।'
            : 'Convert photos to PDF, compress to <200KB for official portals, merge documents, and resize passport photos.'}
        </p>

        {/* 🔒 100% Privacy Assurance Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-[#E5E8E5] text-[11px] font-bold text-[#168447] shadow-2xs">
          <Lock className="w-3.5 h-3.5 text-[#168447]" />
          <span>{lang === 'hi' ? '100% सुरक्षित: आपके दस्तावेज़ किसी भी सर्वर पर अपलोड नहीं होते (Client-Side Safe)' : '100% Private: Files are processed locally in your browser'}</span>
        </div>
      </div>

      {/* ── Tools Tab Pills ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                active
                  ? 'bg-[#168447] text-white border-[#168447] shadow-md -translate-y-0.5'
                  : 'bg-white text-[#142338] border-[#E5E8E5] hover:border-[#168447]/40 hover:shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${active ? 'bg-white/20 text-white' : 'bg-[#EAF6EE] text-[#168447]'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${active ? 'bg-white text-[#168447]' : 'bg-[#FAF9F5] border border-[#E5E8E5] text-[#5A6A6A]'}`}>
                  {tab.badge}
                </span>
              </div>
              <div>
                <div className="text-xs sm:text-sm font-black leading-tight">
                  {lang === 'hi' ? tab.titleHi : tab.titleEn}
                </div>
                <div className={`text-[10px] mt-1 leading-snug line-clamp-2 ${active ? 'text-white/85' : 'text-[#5A6A6A]'}`}>
                  {lang === 'hi' ? tab.descHi : tab.descEn}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* ══════════════════════════════════════════════════════════
          TOOL 1: IMAGE TO PDF (फोटो से PDF)
      ══════════════════════════════════════════════════════════ */}
      {activeTab === 'img2pdf' && (
        <div className="bg-white rounded-3xl border border-[#E5E8E5] p-6 sm:p-8 shadow-sm max-w-5xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E5E8E5]">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#142338]">
                {lang === 'hi' ? '📸 फोटो से साफ़ सरकारी PDF बनाएं' : '📸 Convert Document Photos to A4 PDF'}
              </h2>
              <p className="text-xs text-[#5A6A6A]">
                {lang === 'hi' ? 'आधार कार्ड के आगे-पीछे का फोटो, आय प्रमाण पत्र या मार्कशीट जोड़ें' : 'Select images to compile into a single downloadable PDF'}
              </p>
            </div>

            {images.length > 0 && (
              <button
                type="button"
                onClick={() => { setImages([]); setGeneratedPdfBlob(null); }}
                className="text-xs font-bold text-red-600 hover:underline self-start sm:self-auto flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>{lang === 'hi' ? 'सभी हटाएं' : 'Clear All'}</span>
              </button>
            )}
          </div>

          {/* Upload Dropzone */}
          <div className="relative border-2 border-dashed border-[#168447]/40 hover:border-[#168447] bg-[#FAF9F5] rounded-2xl p-6 sm:p-8 text-center transition-all">
            <input
              type="file"
              multiple
              accept="image/jpeg,image/png,image/webp,image/jpg"
              onChange={handleImageUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="flex flex-col items-center justify-center space-y-2 pointer-events-none">
              <div className="w-14 h-14 rounded-full bg-[#EAF6EE] text-[#168447] flex items-center justify-center shadow-xs">
                <UploadCloud className="w-7 h-7" />
              </div>
              <div className="text-sm font-bold text-[#142338]">
                {lang === 'hi' ? 'यहाँ फोटो चुनें या ड्रैग करें (JPG, PNG)' : 'Click to Upload or Drag & Drop Photos'}
              </div>
              <div className="text-xs text-[#5A6A6A]">
                {lang === 'hi' ? 'एक साथ कई फोटो (आधार फ्रंट + बैक) चुन सकते हैं' : 'Supports multiple files at once'}
              </div>
            </div>
          </div>

          {/* Uploaded Images Preview Grid */}
          {images.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-[#142338]">
                <span>{lang === 'hi' ? `चुने गए दस्तावेज़ (${images.length} पेज):` : `Selected Documents (${images.length} pages):`}</span>
                <span className="text-[#168447] text-[11px] font-semibold">{lang === 'hi' ? 'पेज ऑर्डर ऊपर से नीचे' : 'Page order top to bottom'}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {images.map((item, idx) => (
                  <div key={idx} className="relative bg-[#FAF9F5] rounded-xl border border-[#E5E8E5] p-2 flex flex-col group overflow-hidden">
                    <span className="absolute top-3 left-3 bg-[#168447] text-white text-[10px] font-bold px-1.5 py-0.2 rounded shadow-xs z-10">
                      Page {idx + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeImage(idx)}
                      className="absolute top-3 right-3 w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center opacity-90 hover:opacity-100 z-10 cursor-pointer shadow-xs"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                    <div className="aspect-[3/4] w-full rounded-lg overflow-hidden bg-slate-200">
                      <img src={item.preview} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="mt-2 text-[10px] font-medium text-[#142338] truncate">{item.name}</div>
                    <div className="text-[9px] text-[#5A6A6A]">{item.size}</div>
                  </div>
                ))}
              </div>

              {/* Options Row */}
              <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E5E8E5] grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-bold text-[#142338] block mb-1">
                    {lang === 'hi' ? 'पेज ओरिएंटेशन' : 'Page Orientation'}
                  </label>
                  <select
                    value={orientation}
                    onChange={(e) => { setOrientation(e.target.value); setGeneratedPdfBlob(null); }}
                    className="w-full p-2 bg-white rounded-xl border border-[#E5E8E5] text-xs font-medium text-[#142338]"
                  >
                    <option value="portrait">{lang === 'hi' ? 'सीधा (Portrait - A4)' : 'Portrait (A4)'}</option>
                    <option value="landscape">{lang === 'hi' ? 'चौड़ा (Landscape - A4)' : 'Landscape (A4)'}</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#142338] block mb-1">
                    {lang === 'hi' ? 'दस्तावेज़ फिल्टर' : 'Document Filter'}
                  </label>
                  <select
                    value={filter}
                    onChange={(e) => { setFilter(e.target.value); setGeneratedPdfBlob(null); }}
                    className="w-full p-2 bg-white rounded-xl border border-[#E5E8E5] text-xs font-medium text-[#142338]"
                  >
                    <option value="none">{lang === 'hi' ? 'मूल रंग (Original Color)' : 'Original Color'}</option>
                    <option value="photocopy">{lang === 'hi' ? 'फोटोकॉपी मोड (High Contrast B&W)' : 'Photocopy B&W'}</option>
                    <option value="grayscale">{lang === 'hi' ? 'ग्रेस्केल (Black & White)' : 'Grayscale'}</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#142338] block mb-1">
                    {lang === 'hi' ? 'क्वालिटी / साइज़' : 'Quality'}
                  </label>
                  <select
                    value={quality}
                    onChange={(e) => { setQuality(parseFloat(e.target.value)); setGeneratedPdfBlob(null); }}
                    className="w-full p-2 bg-white rounded-xl border border-[#E5E8E5] text-xs font-medium text-[#142338]"
                  >
                    <option value={0.9}>हाई क्वालिटी (High Quality)</option>
                    <option value={0.75}>मीडियम साइज़ (Under 300KB)</option>
                    <option value={0.5}>स्मॉल साइज़ (Under 150KB)</option>
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="button"
                  disabled={converting}
                  onClick={handleConvertImagesToPdf}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#168447] text-white text-sm font-bold shadow-md hover:bg-[#126338] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {converting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>{lang === 'hi' ? 'PDF बन रहा है...' : 'Generating PDF...'}</span>
                    </>
                  ) : (
                    <>
                      <FileText className="w-4 h-4" />
                      <span>{lang === 'hi' ? 'PDF तैयार करें' : 'Generate PDF'}</span>
                    </>
                  )}
                </button>

                {generatedPdfBlob && (
                  <button
                    type="button"
                    onClick={() => downloadBlob(generatedPdfBlob, 'YojnaMitra_Document.pdf')}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#142338] text-white text-sm font-bold shadow-md hover:bg-black transition-all flex items-center justify-center gap-2 cursor-pointer animate-pulse"
                  >
                    <Download className="w-4 h-4" />
                    <span>{lang === 'hi' ? '⬇️ PDF डाउनलोड करें' : '⬇️ Download PDF'}</span>
                    <span className="text-[11px] bg-white/20 px-2 py-0.5 rounded-full">
                      {(generatedPdfBlob.size / 1024).toFixed(0)} KB
                    </span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════
          TOOL 2: COMPRESS DOCUMENT (200KB / 100KB कंप्रेसर)
      ══════════════════════════════════════════════════════════ */}
      {activeTab === 'compress' && (
        <div className="bg-white rounded-3xl border border-[#E5E8E5] p-6 sm:p-8 shadow-sm max-w-5xl mx-auto space-y-6">
          <div className="pb-4 border-b border-[#E5E8E5]">
            <h2 className="text-lg sm:text-xl font-black text-[#142338]">
              {lang === 'hi' ? '🗜️ सरकारी पोर्टल हेतु दस्तावेज़ कंप्रेसर' : '🗜️ Government Document Size Compressor'}
            </h2>
            <p className="text-xs text-[#5A6A6A]">
              {lang === 'hi' ? 'अधिकांश सरकारी साइट्स (जैसे PM Kisan, NSP) पर 200KB या 100KB से कम फ़ाइल मांगते हैं' : 'Compress your files to strictly under 200KB, 100KB, or 50KB'}
            </p>
          </div>

          {/* Upload Box */}
          <div className="relative border-2 border-dashed border-[#D97706]/40 hover:border-[#D97706] bg-[#FFFBF0] rounded-2xl p-6 sm:p-8 text-center transition-all">
            <input
              type="file"
              accept="image/*"
              onChange={handleCompressFileUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="flex flex-col items-center justify-center space-y-2 pointer-events-none">
              <div className="w-14 h-14 rounded-full bg-[#FFF4D6] text-[#D97706] flex items-center justify-center shadow-xs">
                <Minimize2 className="w-7 h-7" />
              </div>
              <div className="text-sm font-bold text-[#142338]">
                {compressFile ? compressFile.name : (lang === 'hi' ? 'दस्तावेज़ फोटो चुनें जिसे छोटा करना है' : 'Select Document to Compress')}
              </div>
              {compressFile && (
                <div className="text-xs font-bold text-[#D97706]">
                  {lang === 'hi' ? 'मौजूदा साइज़:' : 'Original Size:'} {(compressFile.size / 1024).toFixed(1)} KB
                </div>
              )}
            </div>
          </div>

          {/* Target KB Presets */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#142338]">
              {lang === 'hi' ? 'टारगेट साइज़ चुनें (Govt Limit):' : 'Select Target File Size:'}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { kb: 200, label: 'Under 200 KB', sub: 'PM-Kisan / State Portals' },
                { kb: 100, label: 'Under 100 KB', sub: 'Scholarship / SSC' },
                { kb: 50,  label: 'Under 50 KB',  sub: 'Passport Photo' },
                { kb: 20,  label: 'Under 20 KB',  sub: 'Signature / Thumb' },
              ].map((p) => (
                <button
                  key={p.kb}
                  type="button"
                  onClick={() => { setTargetKb(p.kb); setCompressedResult(null); }}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    targetKb === p.kb
                      ? 'bg-[#D97706] text-white border-[#D97706] shadow-xs'
                      : 'bg-[#FAF9F5] text-[#142338] border-[#E5E8E5] hover:border-[#D97706]'
                  }`}
                >
                  <div className="text-sm font-black">{p.label}</div>
                  <div className={`text-[10px] ${targetKb === p.kb ? 'text-white/80' : 'text-[#5A6A6A]'}`}>{p.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Compress Button */}
          {compressFile && (
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                disabled={compressing}
                onClick={handleRunCompress}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#D97706] text-white text-sm font-bold shadow-md hover:bg-[#B45309] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {compressing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>{lang === 'hi' ? 'कंप्रेस हो रहा है...' : 'Compressing...'}</span>
                  </>
                ) : (
                  <>
                    <Minimize2 className="w-4 h-4" />
                    <span>{lang === 'hi' ? `फ़ाइल को ${targetKb}KB के अंदर करें` : `Compress to < ${targetKb}KB`}</span>
                  </>
                )}
              </button>

              {compressedResult && (
                <button
                  type="button"
                  onClick={() => downloadBlob(compressedResult.blob, `Compressed_${targetKb}KB_${compressFile.name}`)}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#168447] text-white text-sm font-bold shadow-md hover:bg-[#126338] transition-all flex items-center justify-center gap-2 cursor-pointer animate-pulse"
                >
                  <Download className="w-4 h-4" />
                  <span>{lang === 'hi' ? `⬇️ डाउनलोड करें (${compressedResult.finalKb} KB)` : `⬇️ Download (${compressedResult.finalKb} KB)`}</span>
                  <span className="text-[10px] bg-white/25 px-2 py-0.5 rounded-full font-bold">
                    ✓ Govt Ready
                  </span>
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════
          TOOL 3: MERGE PDF (PDF जोड़ें)
      ══════════════════════════════════════════════════════════ */}
      {activeTab === 'merge' && (
        <div className="bg-white rounded-3xl border border-[#E5E8E5] p-6 sm:p-8 shadow-sm max-w-5xl mx-auto space-y-6">
          <div className="pb-4 border-b border-[#E5E8E5]">
            <h2 className="text-lg sm:text-xl font-black text-[#142338]">
              {lang === 'hi' ? '📑 दो या अधिक PDF फ़ाइलों को एक में जोड़ें' : '📑 Merge Multiple PDFs into One'}
            </h2>
            <p className="text-xs text-[#5A6A6A]">
              {lang === 'hi' ? 'आधार कार्ड, आय प्रमाण पत्र व बैंक पासबुक की अलग-अलग PDF को जोड़कर 1 फ़ाइल बनाएं' : 'Combine multiple PDF files in seconds'}
            </p>
          </div>

          <div className="relative border-2 border-dashed border-[#2563EB]/40 hover:border-[#2563EB] bg-[#F4F8FF] rounded-2xl p-6 sm:p-8 text-center transition-all">
            <input
              type="file"
              multiple
              accept="application/pdf"
              onChange={handleMergeUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="flex flex-col items-center justify-center space-y-2 pointer-events-none">
              <div className="w-14 h-14 rounded-full bg-[#E0EDFF] text-[#2563EB] flex items-center justify-center shadow-xs">
                <Layers className="w-7 h-7" />
              </div>
              <div className="text-sm font-bold text-[#142338]">
                {lang === 'hi' ? 'यहाँ सभी PDF फ़ाइलें चुनें (Select PDFs)' : 'Select PDF Files to Combine'}
              </div>
              <div className="text-xs text-[#5A6A6A]">
                {lang === 'hi' ? 'कम से कम 2 PDF चुनें' : 'Select 2 or more PDF files'}
              </div>
            </div>
          </div>

          {mergeFiles.length > 0 && (
            <div className="space-y-3">
              <div className="text-xs font-bold text-[#142338]">
                {lang === 'hi' ? `चुनी गई PDF फ़ाइलें (${mergeFiles.length}):` : `Selected Files (${mergeFiles.length}):`}
              </div>
              <div className="space-y-2">
                {mergeFiles.map((file, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-[#FAF9F5] border border-[#E5E8E5] text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-[10px] font-bold">
                        {idx + 1}
                      </span>
                      <span className="font-bold text-[#142338] truncate max-w-xs">{file.name}</span>
                      <span className="text-[#5A6A6A]">({(file.size / 1024).toFixed(0)} KB)</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setMergeFiles((prev) => prev.filter((_, i) => i !== idx))}
                      className="text-red-600 hover:text-red-800 p-1 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
                <button
                  type="button"
                  disabled={merging}
                  onClick={handleRunMerge}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#2563EB] text-white text-sm font-bold shadow-md hover:bg-[#1D4ED8] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {merging ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>{lang === 'hi' ? 'PDF जुड़ रही है...' : 'Merging PDFs...'}</span>
                    </>
                  ) : (
                    <>
                      <Layers className="w-4 h-4" />
                      <span>{lang === 'hi' ? 'सभी PDF को जोड़ें (Merge)' : 'Merge Files Now'}</span>
                    </>
                  )}
                </button>

                {mergedPdfBlob && (
                  <button
                    type="button"
                    onClick={() => downloadBlob(mergedPdfBlob, 'YojnaMitra_Merged_Document.pdf')}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#168447] text-white text-sm font-bold shadow-md hover:bg-[#126338] transition-all flex items-center justify-center gap-2 cursor-pointer animate-pulse"
                  >
                    <Download className="w-4 h-4" />
                    <span>{lang === 'hi' ? '⬇️ जुड़ी हुई PDF डाउनलोड करें' : '⬇️ Download Merged PDF'}</span>
                    <span className="text-[11px] bg-white/20 px-2 py-0.5 rounded-full">
                      {(mergedPdfBlob.size / 1024).toFixed(0)} KB
                    </span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════
          TOOL 4: PASSPORT PHOTO & SIGNATURE RESIZER (50KB/20KB)
      ══════════════════════════════════════════════════════════ */}
      {activeTab === 'passport' && (
        <div className="bg-white rounded-3xl border border-[#E5E8E5] p-6 sm:p-8 shadow-sm max-w-5xl mx-auto space-y-6">
          <div className="pb-4 border-b border-[#E5E8E5]">
            <h2 className="text-lg sm:text-xl font-black text-[#142338]">
              {lang === 'hi' ? '✂️ पासपोर्ट फोटो व हस्ताक्षर रिसाइज़र' : '✂️ Passport Photo & Signature Resizer'}
            </h2>
            <p className="text-xs text-[#5A6A6A]">
              {lang === 'hi' ? 'सरकारी ऑनलाइन फॉर्म हेतु फोटो (3.5x4.5cm, <50KB) और साइन (<20KB) तैयार करें' : 'Auto prepare passport photo & sign to meet official criteria'}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => { setPhotoType('photo'); setResizedPhotoResult(null); }}
              className={`flex-1 p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                photoType === 'photo'
                  ? 'bg-[#168447] text-white border-[#168447] font-bold shadow-xs'
                  : 'bg-[#FAF9F5] text-[#142338] border-[#E5E8E5]'
              }`}
            >
              📷 पासपोर्ट फोटो (&lt; 50 KB)
            </button>

            <button
              type="button"
              onClick={() => { setPhotoType('signature'); setResizedPhotoResult(null); }}
              className={`flex-1 p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                photoType === 'signature'
                  ? 'bg-[#168447] text-white border-[#168447] font-bold shadow-xs'
                  : 'bg-[#FAF9F5] text-[#142338] border-[#E5E8E5]'
              }`}
            >
              ✍️ हस्ताक्षर / साइन (&lt; 20 KB)
            </button>
          </div>

          <div className="relative border-2 border-dashed border-[#168447]/40 hover:border-[#168447] bg-[#FAF9F5] rounded-2xl p-6 sm:p-8 text-center transition-all">
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="flex flex-col items-center justify-center space-y-2 pointer-events-none">
              <div className="w-14 h-14 rounded-full bg-[#EAF6EE] text-[#168447] flex items-center justify-center shadow-xs">
                <Crop className="w-7 h-7" />
              </div>
              <div className="text-sm font-bold text-[#142338]">
                {photoFile ? photoFile.name : (lang === 'hi' ? `यहाँ ${photoType === 'photo' ? 'पासपोर्ट फोटो' : 'हस्ताक्षर (Sign)'} अपलोड करें` : 'Upload Photo / Signature')}
              </div>
              {photoFile && (
                <div className="text-xs text-[#5A6A6A]">
                  Original: {(photoFile.size / 1024).toFixed(1)} KB
                </div>
              )}
            </div>
          </div>

          {photoFile && (
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                disabled={resizingPhoto}
                onClick={handleResizePhoto}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#168447] text-white text-sm font-bold shadow-md hover:bg-[#126338] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {resizingPhoto ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>{lang === 'hi' ? 'तैयार हो रहा है...' : 'Processing...'}</span>
                  </>
                ) : (
                  <>
                    <Crop className="w-4 h-4" />
                    <span>{lang === 'hi' ? `सरकारी फॉर्म साइज़ (<${photoType === 'photo' ? '50KB' : '20KB'}) में बदलें` : 'Resize for Form'}</span>
                  </>
                )}
              </button>

              {resizedPhotoResult && (
                <button
                  type="button"
                  onClick={() => downloadBlob(resizedPhotoResult.blob, `GovtReady_${photoType}_${photoFile.name}`)}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#142338] text-white text-sm font-bold shadow-md hover:bg-black transition-all flex items-center justify-center gap-2 cursor-pointer animate-pulse"
                >
                  <Download className="w-4 h-4" />
                  <span>{lang === 'hi' ? `⬇️ डाउनलोड करें (${resizedPhotoResult.finalKb} KB)` : `⬇️ Download (${resizedPhotoResult.finalKb} KB)`}</span>
                </button>
              )}
            </div>
          )}
        </div>
      )}

    </div>
  );
};

export default PdfToolsPage;
