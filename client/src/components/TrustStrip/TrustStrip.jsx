import React from 'react';
import { Landmark, RefreshCw, FileText, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const TrustStrip = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Landmark,
      title: t.trustStrip.feature1Title,
      subtitle: t.trustStrip.feature1Sub,
    },
    {
      icon: RefreshCw,
      title: t.trustStrip.feature2Title,
      subtitle: t.trustStrip.feature2Sub,
    },
    {
      icon: FileText,
      title: t.trustStrip.feature3Title,
      subtitle: t.trustStrip.feature3Sub,
    },
    {
      icon: ExternalLink,
      title: t.trustStrip.feature4Title,
      subtitle: t.trustStrip.feature4Sub,
    },
  ];

  return (
    <section className="relative z-20 -mt-4 sm:-mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-card border border-brand-border p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-brand-border/60">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-center gap-3.5 ${
                  index > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
                }`}
              >
                <div className="w-11 h-11 rounded-xl bg-brand-greenLight text-brand-green flex items-center justify-center shrink-0 shadow-2xs">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-navy leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-brand-textMuted mt-0.5 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
