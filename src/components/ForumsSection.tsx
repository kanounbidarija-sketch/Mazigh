import React from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import {
  Users,
  Compass,
  FileCheck2,
  Building2,
  MapPin,
  CalendarDays,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

interface ForumsSectionProps {
  currentLang: Language;
  onOpenContact: (programId: string) => void;
}

export const ForumsSection: React.FC<ForumsSectionProps> = ({
  currentLang,
  onOpenContact,
}) => {
  const t = UI_TRANSLATIONS[currentLang];
  const isRtl = currentLang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const activities = [
    {
      icon: Compass,
      titleFr: "Information sur les Filières & Cursus",
      titleAr: "التعريف بالشعب والمسالك الجامعية",
      descFr: "Panorama exhaustif des formations post-bac : universités, CPGE, facultés des sciences et techniques, écoles de commerce, cycles d'ingénieurs et formations paramédicales.",
      descAr: "بانوراما شاملة حول مسالك ما بعد البكالوريا: الكليات، الأقسام التحضيرية، كليات العلوم والتقنيات، مدارس التدبير، مسالك الهندسة والتخصصات شبه الطبية.",
      tagFr: "Cartographie complète",
      tagAr: "خريطة شاملة",
    },
    {
      icon: FileCheck2,
      titleFr: "Systèmes d'Orientation & Passerelles",
      titleAr: "منظومات التوجيه والجسور الأكاديمية",
      descFr: "Comprendre les logiques de passerelles entre filières, les équivalences de diplômes, les crédits ECTS et les mobilités d'études au Maroc et à l'étranger.",
      descAr: "فهم دقيق للجسور الممكنة بين المسالك، معادلة الشواهد، النظام الوحداتي (LMD)، وإمكانيات الحركية الأكاديمية بالمغرب ودولياً.",
      tagFr: "Mobilité & Passerelles",
      tagAr: "جسور ومعادلات",
    },
    {
      icon: Building2,
      titleFr: "Procédures d'Inscription & Sélection",
      titleAr: "مساطر الترشيح ومعايير الانتقاء",
      descFr: "Décryptage des plateformes ministérielles, des calendriers de candidature, des épreuves écrites et des critères d'admissibilité des écoles supérieures publiques et privées.",
      descAr: "توضيح مفصل لآليات التسجيل عبر البوابات الوطنية، الجداول الزمنية للترشيح، نماذج الاختبارات، وشروط القبول بالمدارس العليا العمومية والخاصة.",
      tagFr: "Accompagnement administratif",
      tagAr: "مواكبة إدارية",
    },
    {
      icon: MapPin,
      titleFr: "Visites sur Place des Écoles & Instituts",
      titleAr: "الزيارات الميدانية والاستكشافية للمؤسسات",
      descFr: "Immersions directes sur les campus universitaires et grandes écoles partenaires, découverte des infrastructures, des laboratoires et échanges avec les étudiants.",
      descAr: "زيارات حضورية استكشافية لفضاءات الجامعات والمعاهد العليا، والاطلاع على مختبرات البحث والبنيات التحتية والتحاور المباشر مع الطلبة والخريجين.",
      tagFr: "Immersion terrain",
      tagAr: "معايشة ميدانية",
    },
  ];

  return (
    <section id="forums" className="py-16 bg-[#041C34] border-b border-[#0C1C3C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[#E4BC44] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isRtl ? "فضاء الإعلام والاستكشاف الجامعي" : "Espace Étudiants & Rencontres"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F4F4]">
              {t.forumsHighlightTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#F4F4F4]/80">
              {t.forumsHighlightDesc}
            </p>
          </div>

          <button
            onClick={() => onOpenContact('forums-etudiants')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#041C34] bg-[#E4BC44] hover:bg-[#d1ab38] rounded-xl shadow-md transition-colors shrink-0 cursor-pointer"
          >
            <span>{isRtl ? "المشاركة في المنتدى القادم" : "Participer aux prochains forums"}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((act, index) => {
            const Icon = act.icon;
            return (
              <div
                key={index}
                className="bg-[#0C1C3C] border border-[#0C1C3C] hover:border-[#E4BC44] rounded-2xl p-5 flex flex-col justify-between space-y-4 transition-all shadow-md group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#041C34] border border-[#E4BC44]/40 text-[#E4BC44] flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-[#E4BC44] bg-[#041C34] px-2 py-0.5 rounded border border-[#E4BC44]/30">
                      {isRtl ? act.tagAr : act.tagFr}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-[#E4BC44] leading-snug group-hover:text-[#F4F4EC] transition-colors">
                    {isRtl ? act.titleAr : act.titleFr}
                  </h3>

                  <p className="text-xs text-[#F4F4F4]/80 leading-relaxed">
                    {isRtl ? act.descAr : act.descFr}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#041C34] flex items-center text-xs font-semibold text-[#E4BC44]">
                  <CheckCircle className="w-3.5 h-3.5 mr-1 rtl:mr-0 rtl:ml-1" />
                  <span>{isRtl ? "مؤطر من مستشاري المركز" : "Encadré par des conseillers"}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visites Notice Box */}
        <div className="p-5 bg-[#0C1C3C] border border-[#E4BC44]/40 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
          <div className="space-y-1 text-xs">
            <span className="font-bold text-[#E4BC44] block text-sm">
              {isRtl
                ? "برنامج الزيارات الميدانية للمؤسسات والمعاهد العليا"
                : "Calendrier des visites d'écoles & journées portes ouvertes"}
            </span>
            <p className="text-[#F4F4F4]/80 max-w-2xl leading-relaxed">
              {isRtl
                ? "تُنظم الزيارات الميدانية الاستكشافية بشكل دوري بتنسيق مسبق ومعتمد مع المؤسسات المستقبلة. المقاعد محدودة وتتطلب تسجيلاً مسبقاً لدى إدارة المركز."
                : "Les visites sur place sont organisées périodiquement selon les autorisations et accords validés. Pour connaître les dates des prochaines visites ou inscrire un groupe, contactez le centre."}
            </p>
          </div>

          <button
            onClick={() => onOpenContact('forums-etudiants')}
            className="px-4 py-2 text-xs font-bold text-[#041C34] hover:bg-[#d1ab38] bg-[#E4BC44] rounded-lg shadow-sm transition-colors shrink-0 whitespace-nowrap cursor-pointer"
          >
            {isRtl ? "الاستعلام عن الزيارات المتاحة" : "Consulter le planning des visites"}
          </button>
        </div>
      </div>
    </section>
  );
};
