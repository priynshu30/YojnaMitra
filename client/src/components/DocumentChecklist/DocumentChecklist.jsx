import React from 'react';
import { CheckSquare, Square, FileText, CheckCircle2 } from 'lucide-react';
import { useSavedSchemes } from '../../context/SavedSchemesContext';
import { useLanguage } from '../../context/LanguageContext';

const DocumentChecklist = ({ documents = [], schemeSlug = '' }) => {
  const { isDocReady, toggleDocumentCheck } = useSavedSchemes();
  const { lang } = useLanguage();

  if (!documents || documents.length === 0) {
    return (
      <div className="p-4 rounded-xl bg-brand-warmBg border border-brand-border text-xs text-brand-textMuted text-center">
        {lang === 'hi' ? 'इस योजना के लिए सामान्य पहचान दस्तावेज (आधार, बैंक खाता) आवश्यक हैं।' : 'Standard identity documents (Aadhaar, Bank Account) are required.'}
      </div>
    );
  }

  const readyCount = documents.filter(doc => isDocReady(schemeSlug, doc.name)).length;
  const progressPercent = Math.round((readyCount / documents.length) * 100);

  return (
    <div className="bg-white rounded-2xl border border-brand-border p-5 sm:p-6 shadow-soft space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-greenLight text-brand-green flex items-center justify-center">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-brand-navy">
              {lang === 'hi' ? 'आवेदन से पहले ये दस्तावेज तैयार रखें' : 'Keep these documents ready before applying'}
            </h4>
            <p className="text-xs text-brand-textMuted">
              {lang === 'hi' ? 'तैयार दस्तावेजों पर टिक (Check) करें:' : 'Check off documents as you prepare them:'}
            </p>
          </div>
        </div>

        {/* Readiness Meter */}
        <div className="text-right shrink-0">
          <span className="text-xs font-bold text-brand-green">
            {readyCount} / {documents.length} {lang === 'hi' ? 'तैयार' : 'Ready'}
          </span>
          <div className="w-20 sm:w-24 h-1.5 bg-brand-warmBg rounded-full mt-1 overflow-hidden">
            <div
              className="h-full bg-brand-green transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="space-y-2 pt-1">
        {documents.map((doc, idx) => {
          const ready = isDocReady(schemeSlug, doc.name);
          return (
            <button
              key={idx}
              type="button"
              onClick={() => toggleDocumentCheck(schemeSlug, doc.name)}
              className={`w-full flex items-start gap-3 p-3 rounded-xl border text-left transition-all ${
                ready
                  ? 'border-brand-green/40 bg-brand-greenLight/50 text-brand-navy'
                  : 'border-brand-border bg-white text-brand-navy hover:border-brand-green/30'
              }`}
            >
              <div className="mt-0.5 shrink-0 text-brand-green">
                {ready ? (
                  <CheckSquare className="w-5 h-5 fill-brand-green text-white" />
                ) : (
                  <Square className="w-5 h-5 text-brand-border hover:text-brand-green" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className={`text-xs sm:text-sm font-semibold ${ready ? 'line-through text-brand-textMuted' : 'text-brand-navy'}`}>
                    {doc.name}
                  </span>
                  {doc.isMandatory && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-50 text-red-600 font-bold">
                      {lang === 'hi' ? 'अनिवार्य' : 'Mandatory'}
                    </span>
                  )}
                </div>
                {doc.description && (
                  <p className="text-[11px] text-brand-textMuted mt-0.5 leading-relaxed">
                    {doc.description}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {readyCount === documents.length && (
        <div className="p-3 rounded-xl bg-brand-greenLight border border-brand-green/20 flex items-center gap-2 text-xs font-semibold text-brand-green">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{lang === 'hi' ? 'बधाई! आपके सभी दस्तावेज तैयार हैं। अब आप आधिकारिक पोर्टल पर आवेदन कर सकते हैं।' : 'Great! All documents are ready. You are prepared to apply on the official portal.'}</span>
        </div>
      )}
    </div>
  );
};

export default DocumentChecklist;
