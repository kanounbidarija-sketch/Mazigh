import React, { useState } from 'react';
import { CenterProfile, Language } from '../types';
import { AppPage } from '../components/Header';
import { PARTNERS_SCHOOLS, PartnerSchool } from '../data/partnersData';
import {
  GraduationCap,
  Building2,
  MapPin,
  CheckCircle2,
  Award,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Search,
  Filter,
} from 'lucide-react';

interface PartnersPageProps {
  currentLang: Language;
  profile: CenterProfile;
  onNavigatePage: (page: AppPage) => void;
  onOpenContact: (programId?: string) => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({
  currentLang,
  profile,
  onNavigatePage,
  onOpenContact,
}) => {
  const isRtl = currentLang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', labelAr: 'جميع المؤسسات', labelFr: 'Toutes les institutions' },
    { id: 'ingenieurs', labelAr: 'مدارس المهندسين (ENSA, ENSAM)', labelFr: 'Écoles d\'Ingénieurs' },
    { id: 'commerce', labelAr: 'التجارة والتسيير (ENCG, ISCAE)', labelFr: 'Commerce & Management' },
    { id: 'medecine', labelAr: 'الطب والصيدلة (FMP, FMD)', labelFr: 'Médecine & Pharmacie' },
    { id: 'architecture', labelAr: 'الهندسة المعمارية (ENA)', labelFr: 'Architecture' },
    { id: 'classes_prepas', labelAr: 'الأقسام التحضيرية (CPGE)', labelFr: 'Classes Préparatoires' },
  ];

  const filteredSchools = PARTNERS_SCHOOLS.filter((school) => {
    const matchesCategory = selectedFilter === 'all' || school.category === selectedFilter;
    const query = searchQuery.trim().toLowerCase();
    if (!query) return matchesCategory;

    const fullText = `${school.nameAr} ${school.nameFr} ${school.acronym} ${school.descriptionAr} ${school.descriptionFr} ${school.cities}`.toLowerCase();
    return matchesCategory && fullText.includes(query);
  });

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
            <span className="text-white">{isRtl ? "المعاهد والشركاء" : "Écoles Ciblées"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            {isRtl ? "كبريات المدارس الوطنية والمعاهد العليا المستهدفة" : "Grandes Écoles & Instituts d'Élite Ciblés"}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {isRtl
              ? "تعرف على شروط الولوج، عتبات الانتقاء، والمسارات الأكاديمية للمدارس والمعاهد المرموقة التي نحضر طلابنا لاجتياز مبارياتها بآسفي."
              : "Découvrez les conditions d'accès, les épreuves et les débouchés des institutions les plus convoitées du Royaume."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-10">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute top-1/2 -translate-y-1/2 start-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                isRtl
                  ? "ابحث عن مدرسة (مثل: ENSA, ENCG, ENA, Médecine, ISCAE)..."
                  : "Rechercher une école (ex: ENSA, ENCG, ENA, Médecine, ISCAE)..."
              }
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 ps-12 pe-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B284C]"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filterTabs.map((tab) => {
              const isActive = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0B284C] text-[#E4BC44] shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {isRtl ? tab.labelAr : tab.labelFr}
                </button>
              );
            })}
          </div>
        </div>

        {/* Schools List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSchools.map((school) => (
            <div
              key={school.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-2xl font-black text-[#0B284C] tracking-wide block">
                      {school.acronym}
                    </span>
                    <h3 className="font-bold text-base sm:text-lg text-slate-800 mt-1">
                      {isRtl ? school.nameAr : school.nameFr}
                    </h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-white text-xs font-bold ${school.badgeColor}`}>
                    {isRtl ? "مباراة وطنية" : "Concours National"}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {isRtl ? school.descriptionAr : school.descriptionFr}
                </p>

                {/* Info badges */}
                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                  <div className="flex items-start gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">{isRtl ? "طبيعة المباراة:" : "Nature de l'épreuve :"} </strong>
                      <span>{isRtl ? school.admissionTypeAr : school.admissionTypeFr}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-slate-700">
                    <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                    <div>
                      <strong className="text-slate-900">{isRtl ? "المدن ومقرات المدارس:" : "Villes d'implantation :"} </strong>
                      <span className="text-slate-600">{school.cities}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onNavigatePage('programs')}
                  className="text-xs font-bold text-[#0B284C] hover:text-[#0056B3] flex items-center gap-1 cursor-pointer"
                >
                  <span>{isRtl ? "استكشف دورات التحضير لهذه المباراة" : "Programme de préparation"}</span>
                  <ArrowIcon className="w-3.5 h-3.5 text-[#E4BC44]" />
                </button>

                <button
                  onClick={() => onOpenContact(`concours-${school.acronym.toLowerCase()}`)}
                  className="px-4 py-2 bg-[#0B284C] hover:bg-[#071d37] text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  {isRtl ? "تسجيل في التحضير" : "S'inscrire"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Safi Proximity Card */}
        <div className="bg-[#0B284C] text-white rounded-3xl p-8 sm:p-10 space-y-4 shadow-xl">
          <div className="flex items-center gap-3 text-[#E4BC44] text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>{isRtl ? "ميزة القرب في آسفي" : "PROXIMITÉ LOCALE À SAFI"}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black">
            {isRtl
              ? "تحضير مكثف ومتخصص لولوج المدرسة الوطنية للعلوم التطبيقية بآسفي (ENSA Safi) وكليات المنطقة"
              : "Préparation ciblée pour l'ENSA de Safi et les facultés de la région"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            {isRtl
              ? "نظراً لتواجد المركز بقلب مدينة آسفي قرب الكليات وحمام حاتم، فإننا نخصص دورات خاصة تتلاءم مع متطلبات مباريات ENSA و ENCG وكليات الطب بمراكش والدار البيضاء مع محاكاة دورية وتأطير حضوري مستمر."
              : "Grâce à notre ancrage à Safi, nous adaptons nos cycles intensifs aux spécificités des épreuves des institutions locales et régionales."}
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenContact()}
              className="px-6 py-3 bg-[#E4BC44] hover:bg-[#d6ad36] text-[#0B284C] font-black text-xs rounded-xl shadow-md transition-all cursor-pointer"
            >
              {isRtl ? "احجز مقعدك في الدورة التحضيرية القادمة" : "Rejoindre la prochaine session"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
