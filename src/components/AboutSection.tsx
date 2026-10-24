import React from 'react';
import { CenterProfile, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import {
  ShieldCheck,
  Award,
  Users,
  Compass,
  MapPin,
  Clock,
  Sparkles,
  Edit3,
} from 'lucide-react';

interface AboutSectionProps {
  currentLang: Language;
  profile: CenterProfile;
  onOpenAdmin: () => void;
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  currentLang,
  profile,
  onOpenAdmin,
  onOpenContact,
}) => {
  const t = UI_TRANSLATIONS[currentLang];
  const isRtl = currentLang === 'ar';

  return (
    <section id="a-propos" className="py-16 bg-[#0C1C3C] border-b border-[#041C34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[#E4BC44] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isRtl ? "منهجيتنا وقيمنا" : "Institution & Éthique"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F4F4]">
              {t.aboutHeading}
            </h2>
            <p className="text-sm sm:text-base text-[#F4F4F4]/80">
              {t.aboutSubheading}
            </p>
          </div>

          <button
            onClick={onOpenAdmin}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-[#E4BC44] hover:text-[#041C34] bg-[#041C34] hover:bg-[#E4BC44] border border-[#E4BC44]/50 rounded-lg shadow-sm transition-all shrink-0 cursor-pointer"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>{isRtl ? "تعديل نصوص التعريف" : "Modifier la présentation"}</span>
          </button>
        </div>

        {/* 3 Core Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Présentation du centre */}
          <div className="bg-[#041C34] border border-[#0C1C3C] hover:border-[#E4BC44] rounded-2xl p-6 shadow-md space-y-3 flex flex-col justify-between transition-all">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0C1C3C] border border-[#E4BC44]/40 text-[#E4BC44] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#E4BC44]">
                {isRtl ? "رؤية ورسالة المركز" : "Vision & Mission du Centre"}
              </h3>
              <p className="text-xs sm:text-sm text-[#F4F4F4]/80 leading-relaxed">
                {isRtl ? profile.aboutTextAr : profile.aboutTextFr}
              </p>
            </div>

            <div className="pt-3 border-t border-[#0C1C3C] flex items-center justify-between text-[11px] text-[#E4BC44]">
              <span>{isRtl ? "المواكبة | الابتكار | النجاح" : "Accompagner · Innover · Réussir"}</span>
              <Sparkles className="w-3 h-3 text-[#E4BC44]" />
            </div>
          </div>

          {/* 2. Équipe pédagogique */}
          <div className="bg-[#041C34] border border-[#0C1C3C] hover:border-[#E4BC44] rounded-2xl p-6 shadow-md space-y-3 flex flex-col justify-between transition-all">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0C1C3C] border border-[#E4BC44]/40 text-[#E4BC44] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#E4BC44]">
                {t.teamTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#F4F4F4]/80 leading-relaxed">
                {isRtl ? profile.teamTextAr : profile.teamTextFr}
              </p>
            </div>

            <div className="pt-3 border-t border-[#0C1C3C] flex items-center justify-between text-[11px] text-[#E4BC44]">
              <span>{isRtl ? "كفاءات وخبرة تدريسية" : "Formateurs d'expérience"}</span>
              <Sparkles className="w-3 h-3 text-[#E4BC44]" />
            </div>
          </div>

          {/* 3. Valeurs & Engagement */}
          <div className="bg-[#041C34] border border-[#0C1C3C] hover:border-[#E4BC44] rounded-2xl p-6 shadow-md space-y-3 flex flex-col justify-between transition-all">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0C1C3C] border border-[#E4BC44]/40 text-[#E4BC44] flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#E4BC44]">
                {t.valuesTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#F4F4F4]/80 leading-relaxed">
                {isRtl ? profile.valuesTextAr : profile.valuesTextFr}
              </p>
            </div>

            <div className="pt-3 border-t border-[#0C1C3C] flex items-center justify-between text-[11px] text-[#E4BC44]">
              <span>{isRtl ? "التزام بأخلاقيات المهنة" : "Éthique pédagogique stricte"}</span>
              <Sparkles className="w-3 h-3 text-[#E4BC44]" />
            </div>
          </div>
        </div>

        {/* Emplacement et engagements de transparence */}
        <div className="bg-[#041C34] border border-[#E4BC44]/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#0C1C3C] pb-5">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E4BC44]">
                {isRtl ? "المقر والبنية التحتية" : "Implantation & Locaux"}
              </span>
              <h3 className="text-xl font-extrabold text-[#F4F4F4]">
                {isRtl ? profile.nameAr : profile.nameFr}
              </h3>
              <p className="text-xs text-[#F4F4EC]/80">
                {isRtl ? profile.addressAr : profile.addressFr}
              </p>
            </div>

            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 text-xs font-bold text-[#041C34] bg-[#E4BC44] hover:bg-[#d1ab38] rounded-xl shadow-md transition-colors shrink-0 cursor-pointer"
            >
              {isRtl ? "تحديد موعد زيارة المقر" : "Prendre RDV pour visiter le centre"}
            </button>
          </div>

          {/* Transparent Notice */}
          <div className="p-4 bg-[#0C1C3C] border border-[#0C1C3C] rounded-xl text-xs text-[#F4F4F4]/80 space-y-1">
            <span className="font-bold text-[#E4BC44] block">
              {isRtl ? "ميثاق الشفافية والمسؤولية بمركز آفاق للاستشارات :" : "Charte de transparence et d'intégrité :"}
            </span>
            <p className="leading-relaxed">
              {isRtl
                ? "يحرص مركزنا على عدم نشر أي شراكات، اعتمادات رسمية، أو نسب نجاح ما لم تكن مثبتة ومؤكدة رسمياً بالوثائق. كل معلومة منشورة تعبر بصدق عن طبيعة الخدمة التعليمية المقدمة ومسؤولية كل طرف."
                : "Notre centre applique une déontologie rigoureuse : aucune accréditation non vérifiée, aucun partenariat non conclu et aucun taux de réussite imaginaire ne sont attribués. Seuls les faits vérifiés et les programmes pédagogiques réels sont présentés."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
