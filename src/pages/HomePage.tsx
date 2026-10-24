import React, { useState } from 'react';
import { CenterProfile, Language, ProgramItem } from '../types';
import { AppPage } from '../components/Header';
import { PROGRAMS_DATA, FAQ_DATA } from '../data/defaultData';
import { ARTICLES_DATA, ArticleItem } from '../data/articlesData';
import { PARTNERS_SCHOOLS } from '../data/partnersData';
import {
  GraduationCap,
  Languages,
  Briefcase,
  Compass,
  Building,
  Stethoscope,
  Award,
  CheckCircle2,
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Star,
  ChevronDown,
  BookOpen,
  Users,
  ShieldCheck,
  Clock,
  ExternalLink,
} from 'lucide-react';

interface HomePageProps {
  currentLang: Language;
  profile: CenterProfile;
  onNavigatePage: (page: AppPage) => void;
  onSelectProgram: (program: ProgramItem) => void;
  onOpenContactWithProgram: (programId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  currentLang,
  profile,
  onNavigatePage,
  onSelectProgram,
  onOpenContactWithProgram,
}) => {
  const isRtl = currentLang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Top 3 highlight cards
  const highlightFeatures = [
    {
      titleAr: "مباريات المدارس العليا الكبرى",
      titleFr: "Grandes Écoles & Concours",
      descAr: "تحضير شامل ومكثف لمباريات ENSA، ENCG، كليات الطب والصيدلة، ENA، ENSAM و ISCAE بنماذج محينة ومحاكاة حقيقية.",
      descFr: "Préparation d'excellence aux concours ENSA, ENCG, Médecine, ENA, ENSAM et ISCAE avec simulations réelles.",
      icon: GraduationCap,
      catId: "concours_acces",
    },
    {
      titleAr: "اللغات والشواهد الدولية",
      titleFr: "Langues & Certifications",
      descAr: "دورات تفاعلية في الفرنسية والإنجليزية والتحضير لاجتياز اختبارات TCF، DELF، TOEFL و IELTS لملفات الدراسة بالخارج.",
      descFr: "Sessions immersives de langues et préparation ciblée aux tests internationaux TCF, DELF, TOEFL et IELTS.",
      icon: Languages,
      catId: "langues_certifs",
    },
    {
      titleAr: "الدعم المدرسي والتوجيه الفردي",
      titleFr: "Soutien & Bilan d'Orientation",
      descAr: "مواكبة متميزة لمستويات الإعدادي والثانوي والبكالوريا، مع روائز توجيهية لبناء المشروع الشخصي والمهني للتلميذ.",
      descFr: "Accompagnement rigoureux pour le collège et lycée, bilans d'orientation personnalisés et projet d'avenir.",
      icon: Compass,
      catId: "orientation_scolaire",
    },
  ];

  // 12 featured programs for the clean grid
  const featuredPrograms = PROGRAMS_DATA.slice(0, 12);

  return (
    <div className="bg-[#F8FAFC] text-slate-800">
      {/* =========================================================================
          1. HERO SECTION (Light sky/ice blue `#EEF5FC` matching reference template)
         ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#EBF3FB] via-[#F1F6FC] to-[#F8FAFC] pt-10 sm:pt-16 pb-20 sm:pb-28 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Headlines & Call-to-actions */}
            <div className="lg:col-span-7 space-y-6 text-start">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0B284C]/20 shadow-xs text-xs font-black text-[#0B284C]">
                <Sparkles className="w-3.5 h-3.5 text-[#E4BC44]" />
                <span>
                  {isRtl
                    ? "آفاق للاستشارات · LES HORIZONS CONSULTING · آسفي"
                    : "LES HORIZONS CONSULTING · SAFI"}
                </span>
              </div>

              {/* Bold Dark Navy Headline (Exact style of reference) */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B284C] tracking-tight leading-[1.2]">
                {isRtl ? (
                  <>
                    المركز الرائد في <span className="text-[#0056B3]">التحضير للمباريات</span> والتكوين والتوجيه بآسفي
                  </>
                ) : (
                  <>
                    Le Centre Leader en <span className="text-[#0056B3]">Préparation aux Concours</span> & Orientation à Safi
                  </>
                )}
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                {isRtl
                  ? "نوفر لكم المنهجية الصارمة، النخبة البيداغوجية، والمواكبة الدقيقة لاجتياز مباريات المدارس العليا (ENSA، ENCG، Médecine، ENA، ISCAE...)، بالإضافة لتقوية اللغات، الدعم المدرسي، وتوجيه المسار الشخصي."
                  : "Bénéficiez d'une méthode rigoureuse, d'experts chevronnés et d'un accompagnement personnalisé pour réussir vos concours des Grandes Écoles marocaines, consolider vos langues et réussir votre projet d'avenir."}
              </p>

              {/* Address & Phone rounded white cards (Directly from reference layout) */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <div className="flex items-center gap-2.5 px-4 py-2 bg-white rounded-xl shadow-xs border border-slate-200 text-xs font-semibold text-slate-700">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>{isRtl ? profile.addressAr : profile.addressFr}</span>
                </div>
                <div className="flex items-center gap-2.5 px-4 py-2 bg-white rounded-xl shadow-xs border border-slate-200 text-xs font-semibold text-slate-700">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span dir="ltr" className="tabular-nums font-bold text-[#0B284C]">
                    {profile.phone.split('/')[0].trim()}
                  </span>
                </div>
              </div>

              {/* Primary Buttons: Gold + Navy Outline */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <button
                  onClick={() => onNavigatePage('programs')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#E4BC44] hover:bg-[#d6ad36] text-[#0B284C] font-extrabold text-sm rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>{isRtl ? "استكشف البرامج والتسجيل" : "Découvrir les Programmes"}</span>
                  <ArrowIcon className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${profile.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
                    isRtl
                      ? 'السلام عليكم مركز آفاق للاستشارات، أود الاستفسار والتسجيل في التكوينات والمباريات.'
                      : 'Bonjour Les Horizons Consulting, je souhaite me renseigner pour une inscription.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-slate-50 text-[#0B284C] border-2 border-[#0B284C] font-bold text-sm rounded-xl transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>{isRtl ? "تواصل معنا عبر واتساب" : "WhatsApp Direct"}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual with floating badge pills (As in screenshot) */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#0B284C]">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80"
                    alt="Étudiants Les Horizons Consulting"
                    className="w-full h-[400px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B284C]/80 via-transparent to-transparent" />

                  {/* Bottom caption on photo */}
                  <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="font-extrabold text-xs text-[#0B284C]">
                        {isRtl ? "أكثر من 1500 تلميذ وطالب تم توجيههم بآسفي" : "+1500 étudiants accompagnés"}
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#E4BC44] text-[#E4BC44]" />
                        ))}
                        <span className="text-[11px] font-bold text-slate-700 ms-1">4.9 / 5</span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 text-[11px] font-black bg-[#E4BC44] text-[#0B284C] rounded-lg">
                      {isRtl ? "امتياز" : "Excellence"}
                    </span>
                  </div>
                </div>

                {/* Floating Badge 1 (Top edge) */}
                <div className="absolute -top-4 -end-3 bg-white px-3.5 py-2 rounded-xl shadow-lg border border-slate-200 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-black text-[#0B284C]">
                    {isRtl ? "مواكبة دقيقة ومستمرة" : "Suivi Personnalisé"}
                  </span>
                </div>

                {/* Floating Badge 2 (Middle side) */}
                <div className="absolute top-1/2 -start-4 -translate-y-1/2 bg-[#0B284C] text-[#E4BC44] px-3.5 py-2 rounded-xl shadow-lg border border-[#E4BC44] flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#E4BC44]" />
                  <span className="text-xs font-black">
                    {isRtl ? "منهجية معتمدة 100%" : "Méthodologie Validée"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. TOP 3 HIGHLIGHT CARDS (White elevated cards from reference template)
         ========================================================================= */}
      <section className="relative -mt-10 sm:-mt-14 z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlightFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onClick={() => onNavigatePage('programs')}
                className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200/80 hover:border-[#0B284C] hover:shadow-2xl transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Circular gold/navy icon */}
                  <div className="w-14 h-14 rounded-2xl bg-[#0B284C] text-[#E4BC44] flex items-center justify-center shadow-md group-hover:bg-[#E4BC44] group-hover:text-[#0B284C] transition-all">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-lg font-black text-[#0B284C] group-hover:text-[#0056B3] transition-colors">
                    {isRtl ? item.titleAr : item.titleFr}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {isRtl ? item.descAr : item.descFr}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0B284C]">
                  <span>{isRtl ? "استكشف البرامج" : "En savoir plus"}</span>
                  <ArrowIcon className="w-4 h-4 text-[#E4BC44] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          3. ABOUT US SECTION (Tentang Kami with asymmetric photo collage)
         ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photos Collage Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=80"
                alt="Séance de formation"
                className="rounded-2xl shadow-lg object-cover h-56 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80"
                alt="Encadrement individuel"
                className="rounded-2xl shadow-lg object-cover h-56 w-full translate-y-6"
              />
            </div>

            {/* Float badge with star rating */}
            <div className="absolute -bottom-6 start-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-200 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#E4BC44] text-[#0B284C] flex items-center justify-center font-black text-lg">
                10+
              </div>
              <div>
                <p className="font-extrabold text-xs text-[#0B284C]">
                  {isRtl ? "سنوات من التأطير والخبرة" : "Années d'Expérience"}
                </p>
                <p className="text-[11px] text-slate-500">
                  {isRtl ? "بمدينة آسفي والمملكة" : "À Safi et au Maroc"}
                </p>
              </div>
            </div>
          </div>

          {/* About Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-start">
            <div className="space-y-2">
              <span className="text-xs font-black text-[#0056B3] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md">
                {isRtl ? "عن آفاق للاستشارات" : "À PROPOS DU CENTRE"}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B284C] leading-tight">
                {isRtl
                  ? "شريككم الاستراتيجي للتحضير لمباريات المعاهد العليا وبناء مسار التفوق"
                  : "Votre partenaire stratégique pour réussir les concours des Grandes Écoles"}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {isRtl ? profile.aboutTextAr : profile.aboutTextFr}
            </p>

            {/* 4 bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{isRtl ? "فريق تربوي من خيرة المفتشين والأساتذة" : "Inspecteurs et professeurs chevronnés"}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{isRtl ? "مواكبة مشخصة لكل تلميذ وطالب" : "Suivi personnalisé pour chaque élève"}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{isRtl ? "محاكاة واقعية لظروف الامتحانات والمباريات" : "Examens blancs en conditions réelles"}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{isRtl ? "مقر حديث ومجهز بالمدينة الجديدة بآسفي" : "Locaux modernes à Safi Ville Nouvelle"}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onNavigatePage('about')}
                className="px-6 py-3 bg-[#0B284C] hover:bg-[#071d37] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer"
              >
                {isRtl ? "اكتشف المزيد عنا وعن فريقنا ←" : "En savoir plus sur notre centre →"}
              </button>

              <a
                href={`tel:${profile.phone.split('/')[0].trim()}`}
                className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0B284C] hover:text-[#E4BC44] transition-colors"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>{profile.phone.split('/')[0].trim()}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. SERVICES GRID ("Satu mitra, semua kebutuhan" / 12 White Cards)
         ========================================================================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black text-[#0056B3] uppercase tracking-wider bg-blue-100/60 px-3 py-1 rounded-md">
              {isRtl ? "برامجنا وتكويناتنا المعتمدة" : "NOS PROGRAMMES DE FORMATION"}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B284C]">
              {isRtl
                ? "شريككم المتكامل لجميع استحقاقات التفوق الدراسي والمهني"
                : "Un seul centre pour tous vos besoins de préparation & réussite"}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {isRtl
                ? "برامج مصممة وفق أحدث المعايير البيداغوجية، تضمن لك التحكم التام في المعارف واكتساب مهارات السرعة والدقة."
                : "Des programmes conçus selon les standards les plus exigeants pour vous garantir admission et distinction."}
            </p>
          </div>

          {/* Cards Grid: 12 cards matching reference screenshot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredPrograms.map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl border border-slate-200 hover:border-[#0B284C] transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Badge `SERVICE` / `برنامج` */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 text-[10px] font-black tracking-wider uppercase bg-[#0B284C] text-[#E4BC44] rounded-md">
                      {prog.code || (isRtl ? "برنامج" : "PROGRAMME")}
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">
                      {isRtl ? "آسفي" : "Safi"}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0B284C] flex items-center justify-center group-hover:bg-[#0B284C] group-hover:text-[#E4BC44] transition-colors shadow-2xs">
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-black text-base text-[#0B284C] group-hover:text-[#0056B3] transition-colors line-clamp-2">
                    {isRtl ? prog.titleAr : prog.titleFr}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {isRtl ? prog.subtitleAr : prog.subtitleFr}
                  </p>
                </div>

                {/* Bottom link */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProgram(prog)}
                    className="text-xs font-bold text-[#0B284C] group-hover:text-[#0056B3] flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{isRtl ? "تفاصيل البرنامج" : "Détails du programme"}</span>
                    <ArrowIcon className="w-3.5 h-3.5 text-[#E4BC44] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenContactWithProgram(prog.id)}
                    className="px-2.5 py-1 text-[11px] font-bold bg-slate-100 hover:bg-[#E4BC44] text-[#0B284C] rounded-lg transition-colors cursor-pointer"
                  >
                    {isRtl ? "تسجيل" : "S'inscrire"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Programs Button */}
          <div className="text-center pt-4">
            <button
              onClick={() => onNavigatePage('programs')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B284C] hover:bg-[#071d37] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span>{isRtl ? "عرض كافة البرامج والتكوينات (18 برنامجاً) ←" : "Voir tous les programmes (18) →"}</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. GOLDEN CONSULTATION BANNER (Matching reference screenshot)
         ========================================================================= */}
      <section className="bg-[#E4BC44] text-[#0B284C] py-8 sm:py-10 px-4 sm:px-8 border-y-2 border-[#d6ad36] shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-start">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">
              {isRtl
                ? "هل تحتاج استشارة توجيهية خاصة أو مساراً تحضيرياً مشخصاً؟"
                : "Besoin d'un bilan d'orientation personnalisé ou d'une préparation sur-mesure ?"}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-[#0B284C]/80">
              {isRtl
                ? "مستشارو التوجيه والأطر البيداغوجية بالمركز في خدمتكم للإجابة على جميع تساؤلاتكم مجاناً."
                : "Nos conseillers pédagogiques sont à votre écoute pour définir la trajectoire idéale."}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigatePage('orientation')}
              className="px-5 py-3 bg-[#0B284C] hover:bg-[#071d37] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer"
            >
              {isRtl ? "احجز استشارة التوجيه" : "Prendre RDV Orientation"}
            </button>
            <a
              href={`tel:${profile.phone.split('/')[0].trim()}`}
              className="px-4 py-3 bg-white hover:bg-slate-50 text-[#0B284C] font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all"
              dir="ltr"
            >
              {profile.phone.split('/')[0].trim()}
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. ROYAL BLUE FEATURE / STATS BANNER (From reference screenshot)
         ========================================================================= */}
      <section className="bg-gradient-to-r from-[#004B99] via-[#0056B3] to-[#0A3266] text-white py-14 sm:py-18 px-4 sm:px-8 shadow-inner">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#E4BC44] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              {isRtl ? "الريادة والجودة البيداغوجية" : "EXCELLENCE & RÉSULTATS"}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">
              {isRtl
                ? "أفضل مركز للتأطير والتحضير لمباريات المعاهد العليا في جهة مراكش-آسفي"
                : "Le meilleur centre d'encadrement et de préparation dans la région Marrakech-Safi"}
            </h2>
          </div>

          {/* 4 Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-[#E4BC44]">94%</span>
              <p className="text-xs sm:text-sm font-bold text-slate-100">
                {isRtl ? "نسبة نجاح واجتياز المباريات" : "Taux de réussite aux concours"}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-[#E4BC44]">+1500</span>
              <p className="text-xs sm:text-sm font-bold text-slate-100">
                {isRtl ? "تلميذ وطالب تم توجيههم" : "Étudiants orientés"}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-[#E4BC44]">18</span>
              <p className="text-xs sm:text-sm font-bold text-slate-100">
                {isRtl ? "برنامجاً تكوينياً متخصصاً" : "Programmes d'excellence"}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-[#E4BC44]">100%</span>
              <p className="text-xs sm:text-sm font-bold text-slate-100">
                {isRtl ? "متابعة وإرشاد مشخص" : "Encadrement personnalisé"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. "WHY CHOOSE US / COMMITMENT" (Dark Navy `#072142` Background)
         ========================================================================= */}
      <section className="bg-[#072142] text-white py-20 sm:py-28 px-4 sm:px-8 border-t border-[#092b54]">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4 text-start">
              <span className="text-xs font-black text-[#E4BC44] uppercase tracking-wider bg-white/5 border border-[#E4BC44]/40 px-3 py-1 rounded-md">
                {isRtl ? "لماذا تختار آفاق للاستشارات؟" : "POURQUOI CHOISIR LES HORIZONS CONSULTING ?"}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight text-[#F4F4F4]">
                {isRtl
                  ? "التزامنا الراسخ بتقديم أعلى معايير الجودة البيداغوجية والنتائج الملموسة"
                  : "Notre engagement indéfectible pour l'excellence et la réussite de nos candidats"}
              </h2>
            </div>

            {/* 3 yellow bullets on the right */}
            <div className="lg:col-span-5 space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 rounded-full bg-[#E4BC44] shrink-0 mt-1.5" />
                <span className="text-xs sm:text-sm text-slate-200">
                  {isRtl
                    ? "تأطير بيداغوجي رفيع يقوده مفتشون وأساتذة ذوو خبرة ميدانية طويلة."
                    : "Encadrement assuré par des inspecteurs et enseignants de premier plan."}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 rounded-full bg-[#E4BC44] shrink-0 mt-1.5" />
                <span className="text-xs sm:text-sm text-slate-200">
                  {isRtl
                    ? "مواكبة دورية وتقارير مستمرة لتتبع تطور مستوى التحصيل لدى الطالب."
                    : "Bilans de progression réguliers et suivi individualisé des acquis."}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 rounded-full bg-[#E4BC44] shrink-0 mt-1.5" />
                <span className="text-xs sm:text-sm text-slate-200">
                  {isRtl
                    ? "تدريب مكثف على نماذج المباريات السابقة وتقنيات إدارة وقت الاختبار."
                    : "Entraînement intensif aux QCM et gestion optimale du chrono."}
                </span>
              </div>
            </div>
          </div>

          {/* 6 Dark Cards Grid (3 cols × 2 rows as in reference) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#0D2B52] rounded-2xl p-6 border border-white/10 hover:border-[#E4BC44] transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#E4BC44]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-white">
                {isRtl ? "نخبة الأساتذة والمفتشين" : "Corps Professoral d'Élite"}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isRtl
                  ? "مؤطرون ذوو كفاءة مشهود بها في كبرى المؤسسات التعليمية بالمغرب."
                  : "Des enseignants et formateurs spécialistes de leurs disciplines respectives."}
              </p>
            </div>

            <div className="bg-[#0D2B52] rounded-2xl p-6 border border-white/10 hover:border-[#E4BC44] transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#E4BC44]">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-white">
                {isRtl ? "بنك تمارين وامتحانات محين" : "Banque d'Épreuves Actualisée"}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isRtl
                  ? "أرشيف شامل لجميع مباريات السنوات العشر الأخيرة مع التصحيح التفاعلي."
                  : "Accès à des centaines de sujets récents corrigés et commentés en détail."}
              </p>
            </div>

            <div className="bg-[#0D2B52] rounded-2xl p-6 border border-white/10 hover:border-[#E4BC44] transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#E4BC44]">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-white">
                {isRtl ? "محاكاة واقعية (Concours Blancs)" : "Simulations Chronométrées"}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isRtl
                  ? "اختبارات تجريبية في نفس ظروف المباراة الحقيقية لكسر حاجز الخوف والارتباك."
                  : "Épreuves blanches hebdomadaires pour dompter le stress et maîtriser le temps."}
              </p>
            </div>

            <div className="bg-[#0D2B52] rounded-2xl p-6 border border-white/10 hover:border-[#E4BC44] transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#E4BC44]">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-white">
                {isRtl ? "مواكبة نفسية وإرشاد شخصي" : "Accompagnement Psychologique"}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isRtl
                  ? "جلسات استماع وتحفيز مستمر لتعزيز الثقة بالنفس والتركيز الإيجابي."
                  : "Coaching mental pour renforcer la confiance et la concentration de l'élève."}
              </p>
            </div>

            <div className="bg-[#0D2B52] rounded-2xl p-6 border border-white/10 hover:border-[#E4BC44] transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#E4BC44]">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-white">
                {isRtl ? "تواصل دائم مع أولياء الأمور" : "Lien Permanent avec les Parents"}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isRtl
                  ? "تقارير حضور ومستوى دورية تضمن إشراك الأسرة في مسار نجاح التلميذ."
                  : "Rapports réguliers pour tenir les familles informées de chaque progrès."}
              </p>
            </div>

            <div className="bg-[#0D2B52] rounded-2xl p-6 border border-white/10 hover:border-[#E4BC44] transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#E4BC44]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-white">
                {isRtl ? "مرافقة حتى المقابلات الشفوية" : "Préparation aux Grands Oraux"}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isRtl
                  ? "تدريب نوعي على مهارات الإلقاء والتواصل ومناقشة المشروع المهني أمام لجان التحكيم."
                  : "Entraînement intensif à l'éloquence et aux entretiens de motivation."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. CTA BANNER WITH STUDENT VISUAL (Matching reference screenshot)
         ========================================================================= */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-[#0B284C] to-[#0A3266] rounded-3xl overflow-hidden shadow-2xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 h-64 lg:h-full relative min-h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80"
                alt="Réussite et avenir"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-[#0B284C]" />
            </div>

            <div className="lg:col-span-7 p-8 sm:p-12 space-y-5 text-start">
              <span className="text-xs font-black text-[#E4BC44] uppercase tracking-wider">
                {isRtl ? "التسجيلات مفتوحة الآن بآسفي" : "INSCRIPTIONS OUVERTES À SAFI"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {isRtl
                  ? "هل تريد الاستعداد بثقة لمستقبلك الدراسي والمهني؟"
                  : "Voulez-vous préparer avec assurance votre avenir universitaire ?"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {isRtl
                  ? "لا تضيع فرصة الانضمام إلى دورات التحضير المتميزة. تواصل معنا مباشرة لحجز مقعدك وتحديد برنامجك الخاص."
                  : "Ne laissez rien au hasard. Rejoignez les sessions d'entraînement de référence et intégrez la Grande École de vos rêves."}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`tel:${profile.phone.split('/')[0].trim()}`}
                  className="px-6 py-3.5 bg-[#E4BC44] hover:bg-[#d6ad36] text-[#0B284C] font-extrabold text-sm rounded-xl shadow-lg transition-all flex items-center gap-2"
                  dir="ltr"
                >
                  <Phone className="w-4 h-4 text-[#0B284C]" />
                  <span>{profile.phone.split('/')[0].trim()}</span>
                </a>

                <button
                  onClick={() => onNavigatePage('contact')}
                  className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm rounded-xl transition-all cursor-pointer"
                >
                  {isRtl ? "طلب استمارة التسجيل" : "Formulaire d'inscription"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. PARTNERS & TARGET SCHOOLS BAR ("Mitra Kami" as in reference screenshot)
         ========================================================================= */}
      <section className="py-14 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8 text-center">
          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              {isRtl ? "المعاهد والمدارس العليا المستهدفة" : "GRANDES ÉCOLES CIBLÉES"}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#0B284C]">
              {isRtl
                ? "نوصلكم إلى كبريات المدارس الوطنية والجامعات المرموقة"
                : "Votre passerelle vers les institutions d'élite"}
            </h3>
          </div>

          {/* School badges strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {PARTNERS_SCHOOLS.map((school) => (
              <div
                key={school.id}
                onClick={() => onNavigatePage('partners')}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#0B284C] hover:bg-white transition-all cursor-pointer group flex flex-col items-center justify-center space-y-1 text-center"
              >
                <span className="text-base font-black text-[#0B284C] group-hover:text-[#0056B3]">
                  {school.acronym}
                </span>
                <span className="text-[11px] font-medium text-slate-500 line-clamp-1">
                  {isRtl ? school.nameAr.split('(')[0] : school.nameFr.split('(')[0]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. LEADERSHIP & TRUST BANNER (From reference screenshot)
         ========================================================================= */}
      <section className="py-12 bg-[#F1F6FC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#0B284C] text-[#E4BC44] flex items-center justify-center font-black text-xl shrink-0">
                LH
              </div>
              <div>
                <h4 className="font-black text-base text-[#0B284C]">
                  {isRtl ? "إدارة مركز آفاق للاستشارات (Les Horizons Consulting)" : "Direction Pédagogique Les Horizons Consulting"}
                </h4>
                <p className="text-xs text-slate-500">
                  {isRtl ? "التزام بأعلى معايير المصداقية والتأطير البيداغوجي الصارم بآسفي" : "Engagement pour la transparence, la rigueur et la réussite à Safi"}
                </p>
              </div>
            </div>

            {/* 4 Pillars */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs font-black text-[#0B284C]">
              <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                {isRtl ? "الثقة والمصداقية" : "Confiance & Rigueur"}
              </span>
              <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                <Award className="w-4 h-4 text-[#E4BC44]" />
                {isRtl ? "التميز الأكاديمي" : "Excellence"}
              </span>
              <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                <Users className="w-4 h-4 text-blue-600" />
                {isRtl ? "المواكبة الشخصية" : "Proximité"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. LATEST ARTICLES & GUIDES (3 Cards as in reference "Info Terbaru")
         ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2 text-start">
            <span className="text-xs font-black text-[#0056B3] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md">
              {isRtl ? "مقالات ودليل التوجيه التربوي" : "ARTICLES & ACTUALITÉS"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B284C]">
              {isRtl ? "آخر التوجيهات ونصائح اجتياز المباريات" : "Guides et conseils d'orientation récents"}
            </h2>
          </div>

          <button
            onClick={() => onNavigatePage('articles')}
            className="text-xs sm:text-sm font-bold text-[#0B284C] hover:text-[#0056B3] flex items-center gap-1 cursor-pointer self-start sm:self-auto"
          >
            <span>{isRtl ? "عرض جميع المقالات" : "Voir tous les articles"}</span>
            <ArrowIcon className="w-4 h-4 text-[#E4BC44]" />
          </button>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES_DATA.slice(0, 3).map((article) => (
            <div
              key={article.id}
              onClick={() => onNavigatePage('articles')}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 hover:border-[#0B284C] transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={isRtl ? article.titleAr : article.titleFr}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 start-3">
                    <span className="px-2.5 py-1 text-[11px] font-bold bg-[#0B284C] text-[#E4BC44] rounded-md shadow-xs">
                      {isRtl ? article.categoryAr : article.categoryFr}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2 text-start">
                  <span className="text-[11px] font-semibold text-slate-400">
                    {article.date} · {isRtl ? article.readTimeAr : article.readTimeFr}
                  </span>
                  <h3 className="font-black text-base text-[#0B284C] group-hover:text-[#0056B3] transition-colors line-clamp-2">
                    {isRtl ? article.titleAr : article.titleFr}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {isRtl ? article.excerptAr : article.excerptFr}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between text-xs font-bold text-[#0B284C]">
                <span>{isRtl ? "قراءة المقال بالكامل" : "Lire l'article"}</span>
                <ArrowIcon className="w-4 h-4 text-[#E4BC44] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          12. FAQ ACCORDION SECTION (Clean White Accordions)
         ========================================================================= */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-black text-[#0056B3] uppercase tracking-wider bg-blue-100/60 px-3 py-1 rounded-md">
              {isRtl ? "الأسئلة الشائعة" : "FOIRE AUX QUESTIONS"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B284C]">
              {isRtl ? "إجابات على أهم تساؤلات التلاميذ وأولياء الأمور" : "Questions fréquemment posées"}
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-start font-bold text-sm sm:text-base text-[#0B284C] flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <span>{isRtl ? item.questionAr : item.questionFr}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#0B284C] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-[#E4BC44]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {isRtl ? item.answerAr : item.answerFr}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
