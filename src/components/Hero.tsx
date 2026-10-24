import React from 'react';
import { CenterProfile, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { BrandLogo } from './BrandLogo';
import {
  GraduationCap,
  Languages,
  Briefcase,
  BookOpen,
  Compass,
  Users,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  MapPin,
  Clock,
  Sparkles,
  Award,
  Stethoscope,
  Building,
} from 'lucide-react';

interface HeroProps {
  currentLang: Language;
  profile: CenterProfile;
  onExploreCategory: (category: string) => void;
  onOpenContact: (programId?: string) => void;
  onOpenAdmin: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  profile,
  onExploreCategory,
  onOpenContact,
  onOpenAdmin,
}) => {
  const t = UI_TRANSLATIONS[currentLang];
  const isRtl = currentLang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  // Exact 5 domains from the flyer, displayed in an Ivory card (#F4F4EC)
  const flyerDomains = [
    {
      codeFr: 'ENSA - ENSAM - ENA',
      codeAr: 'ENSA - ENSAM - ENA',
      labelFr: 'Écoles d\'Ingénieurs & Architecture',
      labelAr: 'مدارس المهندسين والهندسة المعمارية',
      catId: 'concours_acces',
      icon: GraduationCap,
    },
    {
      codeFr: 'ENCG - ISCAE',
      codeAr: 'ENCG - ISCAE',
      labelFr: 'Commerce & Gestion des Entreprises',
      labelAr: 'التجارة والتسيير وإدارة المقاولات',
      catId: 'concours_acces',
      icon: Building,
    },
    {
      codeFr: 'MÉDECINE GÉNÉRALE',
      codeAr: 'كليات الطب العام (Médecine)',
      labelFr: 'Facultés de Médecine du Maroc',
      labelAr: 'كليات الطب العام والصيدلة',
      catId: 'concours_acces',
      icon: Stethoscope,
    },
    {
      codeFr: 'DENTAIRE - PHARMACIE',
      codeAr: 'طب الأسنان - الصيدلة',
      labelFr: 'Médecine Dentaire & Pharmacie',
      labelAr: 'كليات طب الأسنان والصيدلة',
      catId: 'concours_acces',
      icon: Award,
    },
    {
      codeFr: 'SECTEUR PUBLIC ET PRIVÉ',
      codeAr: 'مباريات القطاع العام والخاص',
      labelFr: 'Concours de Recrutement & Secteur Privé',
      labelAr: 'مباريات التوظيف والقطاع الخاص',
      catId: 'formations_pro',
      icon: Briefcase,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#041C34] pt-8 sm:pt-12 pb-16 border-b border-[#0C1C3C]">
      {/* Background gradients using #0C1C3C and warm gold glow #E4BC44 */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-[#0C1C3C] rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-0 w-[500px] h-[500px] bg-[#E4BC44]/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        {/* Top Notification Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-[#0C1C3C] border border-[#E4BC44]/40 rounded-xl text-xs shadow-md">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E4BC44] shrink-0 animate-pulse" />
            <span className="font-bold text-[#E4BC44]">
              {isRtl
                ? "مرحباً بكم في مركز آفاق للاستشارات (Les Horizons Consulting) بآسفي — التسجيلات مفتوحة للمباريات والتكوينات"
                : "Bienvenue chez Les Horizons Consulting à Safi — Inscriptions ouvertes pour les concours & formations"}
            </span>
            <span className="hidden lg:inline text-slate-500">|</span>
            <span className="hidden lg:inline text-[#F4F4F4]">
              {isRtl ? profile.addressAr : profile.addressFr}
            </span>
          </div>
          <button
            onClick={onOpenAdmin}
            className="text-[#E4BC44] hover:text-[#F4F4EC] font-bold underline cursor-pointer shrink-0"
          >
            {isRtl ? "لوحة الإدارة والإعدادات ←" : "Paramètres & Administration →"}
          </button>
        </div>

        {/* Hero Top Grid: Left column (Prop/Values) & Right column (Flyer Domaines Card #F4F4EC) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Main Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* Official Logo & Motto Lockup */}
              <div className="flex items-center gap-3.5 flex-wrap">
                <BrandLogo size="lg" />
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E4BC44] bg-[#0C1C3C] border border-[#E4BC44] px-3.5 py-2 rounded-xl shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#E4BC44]" />
                  <span>{isRtl ? "المواكبة | الابتكار | النجاح" : "ACCOMPAGNER | INNOVER | RÉUSSIR"}</span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F4F4] leading-[1.2] text-balance">
                <span>{isRtl ? "استعد لمستقبلك بـ " : "Préparez votre avenir avec "}</span>
                <span className="text-[#E4BC44] block sm:inline">
                  {isRtl ? "المنهجية، الخبرة والشغف" : "méthode, expertise et passion"}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-[#F4F4F4]/90 leading-relaxed max-w-2xl">
                {isRtl
                  ? "مركز آفاق للاستشارات (Les Horizons Consulting) بمدينة آسفي يقدم لكم تدريباً نوعياً وتأطيراً نخبوياً: التحضير المتكامل لمباريات الولوج (ENSA، ENSAM، ENA، ENCG، ISCAE، كليات الطب وطب الأسنان والصيدلة، ومباريات التوظيف بالقطاعين العام والخاص)، بالإضافة للدعم المدرسي واللغات والتوجيه."
                  : "Les Horizons Consulting à Safi vous propose un accompagnement d'élite : préparation experte aux concours d'accès (ENSA, ENSAM, ENA, ENCG, ISCAE, Médecine, Dentaire, Pharmacie, secteur public et privé), soutien scolaire, langues et orientation."}
              </p>
            </div>

            {/* CTAs Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => onOpenContact()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-[#041C34] bg-[#E4BC44] hover:bg-[#d1ab38] rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <span>{t.ctaRegister}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${profile.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
                  isRtl
                    ? 'السلام عليكم مركز آفاق للاستشارات (Les Horizons Consulting)، أود الاستفسار والتسجيل في التحضير للمباريات.'
                    : 'Bonjour Les Horizons Consulting, je souhaite des renseignements pour une inscription.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-[#E4BC44] bg-[#0C1C3C] hover:bg-[#0C1C3C]/80 border border-[#E4BC44] rounded-xl transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#E4BC44]" />
                <span>{t.ctaWhatsApp}</span>
              </a>

              <a
                href="#programmes"
                className="inline-flex items-center justify-center px-4 py-3.5 text-sm font-semibold text-[#F4F4F4] hover:text-[#E4BC44] rounded-xl transition-colors"
              >
                {t.ctaExplorePrograms}
              </a>
            </div>

            {/* POURQUOI NOUS CHOISIR ? (Direct from flyer, styled with #0C1C3C and #E4BC44) */}
            <div className="bg-[#0C1C3C] border border-[#E4BC44]/30 rounded-2xl p-5 space-y-3 shadow-md">
              <div className="flex items-center justify-between border-b border-[#041C34] pb-2">
                <span className="text-xs font-bold text-[#E4BC44] uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#E4BC44]" />
                  <span>{isRtl ? "لماذا تختار آفاق للاستشارات ؟" : "POURQUOI NOUS CHOISIR ?"}</span>
                </span>
                <span className="text-[11px] text-[#F4F4EC] font-semibold">
                  {isRtl ? "الجودة والتميز" : "Excellence & Méthode"}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#F4F4F4]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E4BC44] shrink-0" />
                  <span>{isRtl ? "تأطير عالي المستوى من طرف خبراء" : "Encadrement par des experts"}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E4BC44] shrink-0" />
                  <span>{isRtl ? "برامج تدريب ومواكبة مشخصة" : "Programmes personnalisés"}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E4BC44] shrink-0" />
                  <span>{isRtl ? "مناهج تدريس فعالة ومبتكرة" : "Méthodes efficaces et innovantes"}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E4BC44] shrink-0" />
                  <span>{isRtl ? "متابعة دورية وتحفيز مستمر" : "Suivi régulier et motivation"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: "NOS DOMAINES DE CONCOURS" in Ivory White (#F4F4EC) (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-[#F4F4EC] rounded-2xl p-6 sm:p-7 shadow-xl border-2 border-[#E4BC44] text-[#041C34] space-y-5 h-full flex flex-col justify-between">
              <div className="space-y-3">
                {/* Header in Ivory card */}
                <div className="border-b border-[#041C34]/15 pb-3">
                  <span className="text-xs font-black tracking-widest text-[#041C34] uppercase bg-[#E4BC44] px-2.5 py-1 rounded-md inline-block">
                    {isRtl ? "مجالات مباريات الولوج" : "NOS DOMAINES DE CONCOURS"}
                  </span>
                  <h3 className="text-xl font-bold text-[#041C34] mt-2">
                    {isRtl ? "تحضير شامل وموجه لكافة الأسلاك" : "Préparation ciblée aux grandes filières"}
                  </h3>
                </div>

                {/* 5 Domains list items with icons */}
                <div className="space-y-2.5">
                  {flyerDomains.map((dom, index) => {
                    const Icon = dom.icon;
                    return (
                      <div
                        key={index}
                        onClick={() => onExploreCategory(dom.catId)}
                        className="p-3 bg-white rounded-xl border border-[#041C34]/10 hover:border-[#E4BC44] hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-3 group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-[#041C34] text-[#E4BC44] flex items-center justify-center shrink-0 shadow-xs">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="font-extrabold text-[#041C34] text-xs sm:text-sm block group-hover:text-amber-800 transition-colors">
                              {isRtl ? dom.codeAr : dom.codeFr}
                            </span>
                            <span className="text-[11px] text-[#041C34]/70">
                              {isRtl ? dom.labelAr : dom.labelFr}
                            </span>
                          </div>
                        </div>

                        <ArrowIcon className="w-4 h-4 text-[#041C34]/50 group-hover:text-[#E4BC44] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all shrink-0" />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Direct Booking trigger in the Ivory Card */}
              <div className="pt-3 border-t border-[#041C34]/15">
                <button
                  onClick={() => onOpenContact()}
                  className="w-full py-3 px-4 bg-[#041C34] hover:bg-[#0C1C3C] text-[#E4BC44] font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Compass className="w-4 h-4 text-[#E4BC44]" />
                  <span>{isRtl ? "حجز موعد استشارة وتوجيه مجاني" : "Prendre RDV pour un bilan d'orientation"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
