import React, { useState } from 'react';
import { FAQItem, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

interface FAQSectionProps {
  faqItems: FAQItem[];
  currentLang: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqItems, currentLang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = UI_TRANSLATIONS[currentLang];
  const isRtl = currentLang === 'ar';

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#041C34] border-b border-[#0C1C3C]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E4BC44] bg-[#0C1C3C] border border-[#E4BC44]/40 px-3.5 py-1.5 rounded-lg shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#E4BC44]" />
            <span>{isRtl ? "إجابات وتوضيحات" : "Questions Fréquentes"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F4F4]">
            {t.faqHeading}
          </h2>
          <p className="text-sm text-[#F4F4F4]/80">
            {t.faqSubheading}
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const q = isRtl ? item.questionAr : item.questionFr;
            const a = isRtl ? item.answerAr : item.answerFr;

            return (
              <div
                key={index}
                className="border border-[#0C1C3C] hover:border-[#E4BC44]/40 rounded-xl overflow-hidden transition-all bg-[#0C1C3C]"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-4 sm:p-5 text-left rtl:text-right flex items-center justify-between gap-4 transition-colors cursor-pointer"
                >
                  <span className={`font-bold text-sm sm:text-base ${isOpen ? 'text-[#E4BC44]' : 'text-[#F4F4F4]'}`}>
                    {q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#E4BC44] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#F4F4EC]/90 leading-relaxed border-t border-[#041C34] bg-[#041C34]/80">
                    <p>{a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
