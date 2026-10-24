import React from 'react';
import { CenterProfile, Language } from '../types';
import { AppPage } from '../components/Header';
import {
  GraduationCap,
  Award,
  ShieldCheck,
  Users,
  Compass,
  CheckCircle2,
  MapPin,
  Phone,
  Building,
  Sparkles,
  BookOpen,
  HeartHandshake,
  Star,
  Clock,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

interface AboutPageProps {
  currentLang: Language;
  profile: CenterProfile;
  onNavigatePage: (page: AppPage) => void;
  onOpenContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  currentLang,
  profile,
  onNavigatePage,
  onOpenContact,
}) => {
  const isRtl = currentLang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const values = [
    {
      titleAr: "المواكبة الفردية الدقيقة",
      titleFr: "Accompagnement Personnalisé",
      descAr: "نؤمن بأن كل تلميذ حالة فريدة؛ لذلك نوفر تأطيراً مشخصاً يتكيف مع نسق استيعابه ونقاط قوته.",
      descFr: "Chaque apprenant est unique. Nous adaptons nos méthodes à son rythme d'apprentissage et ses ambitions.",
      icon: Users,
    },
    {
      titleAr: "الابتكار البيداغوجي والصرامة",
      titleFr: "Innovation Pédagogique",
      descAr: "استخدام تقنيات التذكر السريع، الخرائط الذهنية، وحل المسائل التركيبية لتمكين الطالب من التفوق في مباريات السرعة.",
      descFr: "Mémorisation active, mind-mapping et entraînements intensifs pour exceller aux épreuves chronométrées.",
      icon: Sparkles,
    },
    {
      titleAr: "النزاهة والشفافية",
      titleFr: "Éthique & Transparence",
      descAr: "التزام تام بالمصداقية في التقييم، تقديم تقارير دورية حقيقية لأولياء الأمور دون وعود وهمية.",
      descFr: "Évaluations objectives et communication transparente avec les familles sans promesses illusoires.",
      icon: ShieldCheck,
    },
    {
      titleAr: "الشغف بصناعة النجاح",
      titleFr: "Passion de l'Excellence",
      descAr: "فريقنا يعيش مع كل طالب تحدي القبول في كبريات المدارس الوطنية حتى لحظة إعلان نتائج القبول النهائي.",
      descFr: "Une équipe mobilisée avec ferveur aux côtés des candidats jusqu'à la publication des listes d'admission.",
      icon: HeartHandshake,
    },
  ];

  const facilities = [
    {
      titleAr: "قاعات تدريس مجهزة ومكيفة",
      titleFr: "Salles modernes et climatisées",
      descAr: "فضاءات تعليمية مريحة تحترم المعايير البيداغوجية الحديثة لضمان أقصى درجات التركيز.",
      descFr: "Des espaces spacieux et calmes favorisant une concentration maximale.",
      icon: Building,
    },
    {
      titleAr: "وسائل ووسائط تفاعلية",
      titleFr: "Équipements interactifs",
      descAr: "شاشات عرض وأجهزة لعرض حلول التمارين والمحاكاة الرقمية لمباريات QCM.",
      descFr: "Écrans interactifs et logiciels d'entraînement aux tests psychotechniques.",
      icon: Sparkles,
    },
    {
      titleAr: "مكتبة مراجع ونماذج امتحانات",
      titleFr: "Banque documentaire complète",
      descAr: "رصيد ثري يضم مواضيع مباريات السنوات السابقة وكتب التمارين التوجيهية المحينة.",
      descFr: "Accès illimité aux annales officielles et fiches de révision exclusives.",
      icon: BookOpen,
    },
    {
      titleAr: "فضاء التوجيه والاستماع الفردي",
      titleFr: "Espace écoute et orientation",
      descAr: "مكتب مخصص لجلسات التوجيه الفردي واختبارات الميول مع الأخصائي البيداغوجي.",
      descFr: "Bureau confidentiel pour les entretiens individuels et tests psychométriques.",
      icon: Compass,
    },
  ];

  return (
    <div className="bg-[#F8FAFC] text-slate-800">
      {/* Page Header Banner */}
      <div className="bg-[#0B284C] text-white py-14 sm:py-20 px-4 sm:px-8 border-b border-[#071c36]">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[#E4BC44]">
            <button onClick={() => onNavigatePage('home')} className="hover:underline">
              {isRtl ? "الرئيسية" : "Accueil"}
            </button>
            <span>/</span>
            <span className="text-white">{isRtl ? "من نحن" : "À Propos"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            {isRtl ? "عن مركز آفاق للاستشارات (Les Horizons Consulting)" : "À Propos de Les Horizons Consulting"}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {isRtl
              ? "مؤسسة رائدة في التأطير البيداغوجي، التحضير لمباريات الولوج، التكوين المستمر والتوجيه المدرسي والجامعي بمدينة آسفي."
              : "Institution de référence à Safi pour la préparation aux concours des Grandes Écoles, le renforcement scolaire et l'orientation stratégique."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24 space-y-20">
        {/* Section 1: History & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5 text-start">
            <span className="text-xs font-black text-[#0056B3] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md">
              {isRtl ? "هويتنا ورسالتنا" : "NOTRE HISTOIRE & MISSION"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B284C] leading-tight">
              {isRtl
                ? "عقد من التميز البيداغوجي وصناعة قصص النجاح في قلب مدينة آسفي"
                : "Une décennie d'excellence pédagogique au service de la jeunesse de Safi"}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {isRtl ? profile.aboutTextAr : profile.aboutTextFr}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              {isRtl
                ? "تأسس مركز آفاق للاستشارات استجابة لحاجة أبناء مدينة آسفي وجهة مراكش-آسفي إلى فضاء تعليمي احترافي يضاهي مراكز العواصم الكبرى، موفراً خيرة الأطر التربوية ومنهجيات التحضير الحديثة التي تجعل التلميذ قادراً على المنافسة والظفر بالمقاعد الأولى في كبريات المدارس الوطنية."
                : "Implanté à Safi, Les Horizons Consulting a été conçu pour offrir aux élèves et étudiants de la région les mêmes chances d'accès aux écoles d'élite que dans les grandes métropoles, grâce à une pédagogie rigoureuse et des formateurs d'exception."}
            </p>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-semibold flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#E4BC44] shrink-0 mt-0.5" />
              <span>
                {isRtl
                  ? "شعارنا الخالد: المواكبة، الابتكار، والنجاح — منهجية دقيقة تصنع الفارق الأكاديمي والمهني."
                  : "Notre devise : Accompagner, Innover, Réussir — une alchimie éprouvée vers l'excellence."}
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80"
                alt="Encadrement"
                className="rounded-2xl shadow-md h-64 w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=80"
                alt="Formation"
                className="rounded-2xl shadow-md h-64 w-full object-cover translate-y-6"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Core Values */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black text-[#0056B3] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md">
              {isRtl ? "قيمنا ومبادئنا" : "NOS VALEURS FONDAMENTALES"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B284C]">
              {isRtl ? "الركائز التي نبني عليها تميز تلاميذنا" : "Les piliers de notre engagement"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0B284C] text-[#E4BC44] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-black text-base text-[#0B284C]">
                    {isRtl ? val.titleAr : val.titleFr}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isRtl ? val.descAr : val.descFr}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 3: The Pedagogical Team */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-start">
              <span className="text-xs font-black text-[#0056B3] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md">
                {isRtl ? "فريق التأطير" : "CORPS PÉDAGOGIQUE"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B284C]">
                {isRtl ? "نخبة من خيرة الأساتذة والمفتشين الممارسين" : "Des formateurs de haut vol et des inspecteurs chevronnés"}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {isRtl ? profile.teamTextAr : profile.teamTextFr}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {isRtl
                  ? "يجمع فريقنا بين المعرفة الأكاديمية العميقة والإلمام التام بخبايا امتحانات ومباريات المدارس العليا. كل أستاذ في تخصصه يمتلك رصيداً من النجاحات ومئات الطلبة الذين تمكنوا بفضله من اجتياز عتبات الانتقاء والاختبارات الكتابية والشفوية بتفوق."
                  : "Nos intervenants maîtrisent parfaitement les spécificités des concours marocains et apportent aux étudiants les clés méthodologiques indispensables pour décrocher les meilleures places."}
              </p>
            </div>

            <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 text-center">
              <div className="w-20 h-20 rounded-full bg-[#0B284C] text-[#E4BC44] flex items-center justify-center font-black text-2xl mx-auto shadow-md">
                LH
              </div>
              <div>
                <h4 className="font-black text-base text-[#0B284C]">
                  {isRtl ? "إدارة المركز والتنسيق البيداغوجي" : "Direction Pédagogique"}
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  {isRtl ? "آفاق للاستشارات · آسفي" : "Les Horizons Consulting · Safi"}
                </p>
              </div>
              <p className="text-xs text-slate-600 italic">
                {isRtl
                  ? "«النجاح ليس وليد الصدفة، بل هو ثمرة تخطيط محكم ومنهجية مستمرة وعمل دؤوب.»"
                  : "« La réussite n'est pas le fruit du hasard, mais celui d'une méthode rigoureuse et d'un travail assidu. »"}
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Facilities in Safi */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black text-[#0056B3] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md">
              {isRtl ? "فضاءات المركز بآسفي" : "NOS INFRASTRUCTURES À SAFI"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B284C]">
              {isRtl ? "بيئة تعليمية محفزة ومجهزة بأحدث الوسائل" : "Un environnement d'étude moderne et convivial"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((fac, idx) => {
              const Icon = fac.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0056B3] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-[#0B284C]">
                    {isRtl ? fac.titleAr : fac.titleFr}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isRtl ? fac.descAr : fac.descFr}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Strip */}
        <div className="bg-[#0B284C] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-black max-w-2xl mx-auto">
            {isRtl
              ? "انضم إلى أسرة المتفوقين في مركز آفاق للاستشارات بآسفي"
              : "Rejoignez la communauté de nos lauréats à Safi"}
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            {isRtl
              ? "تفضل بزيارتنا في مقر المركز بشارع مليلية بالمدينة الجديدة أو اتصل بنا مباشرة لحجز موعد استشارة وتحديد مسارك الأكاديمي."
              : "Visitez nos locaux Rue Melilla à la Ville Nouvelle ou contactez nos conseillers pour planifier votre entretien d'orientation."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="px-6 py-3.5 bg-[#E4BC44] hover:bg-[#d6ad36] text-[#0B284C] font-extrabold text-sm rounded-xl shadow-md transition-all cursor-pointer"
            >
              {isRtl ? "تواصل معنا واحجز مقعدك" : "Prendre Contact"}
            </button>
            <button
              onClick={() => onNavigatePage('programs')}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-white/20 transition-all cursor-pointer"
            >
              {isRtl ? "استكشف البرامج والتكوينات" : "Nos Programmes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
