import React, { useState } from 'react';
import { CenterProfile, Language, ProgramCategory, ProgramItem } from '../types';
import { AppPage } from '../components/Header';
import { PROGRAMS_DATA } from '../data/defaultData';
import {
  GraduationCap,
  Languages,
  Briefcase,
  BookOpen,
  Compass,
  Users,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Building,
} from 'lucide-react';

interface ProgramsPageProps {
  currentLang: Language;
  profile: CenterProfile;
  onNavigatePage: (page: AppPage) => void;
  onSelectProgram: (program: ProgramItem) => void;
  onOpenContactWithProgram: (programId?: string) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({
  currentLang,
  profile,
  onNavigatePage,
  onSelectProgram,
  onOpenContactWithProgram,
}) => {
  const isRtl = currentLang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryTabs = [
    { id: 'all', labelAr: 'جميع البرامج (18)', labelFr: 'Tous les Programmes (18)' },
    { id: 'concours_acces', labelAr: 'مباريات المدارس العليا (Concours)', labelFr: 'Concours Grandes Écoles' },
    { id: 'langues_certifs', labelAr: 'اللغات والشهادات الدولية', labelFr: 'Langues & Certifications' },
    { id: 'soutien_scolaire', labelAr: 'الدعم المدرسي والجامعي', labelFr: 'Soutien Scolaire' },
    { id: 'formations_pro', labelAr: 'التكوين المهني ومباريات التوظيف', labelFr: 'Formations Pro & Recrutement' },
    { id: 'orientation_scolaire', labelAr: 'التوجيه والاستشارة', labelFr: 'Orientation & Bilans' },
  ];

  // Filtering
  const filteredPrograms = PROGRAMS_DATA.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const query = searchQuery.trim().toLowerCase();
    if (!query) return matchesCategory;

    const fullText = `${p.titleAr} ${p.titleFr} ${p.code || ''} ${p.subtitleAr} ${p.subtitleFr} ${p.subjectsAr.join(' ')} ${p.subjectsFr.join(' ')}`.toLowerCase();
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
            <span className="text-white">{isRtl ? "خدماتنا وبرامجنا" : "Nos Programmes"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            {isRtl ? "دليل البرامج والتكوينات الأكاديمية" : "Catalogue des Formations & Concours"}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {isRtl
              ? "استكشف برامج التحضير المتخصصة لمباريات المعاهد العليا، شواهد اللغات المعتمدة، وسلسلة الدعم المدرسي والتوجيه بمركز آفاق للاستشارات بآسفي."
              : "Explorez nos modules intensifs de préparation aux concours, certifications linguistiques et accompagnement scolaire de référence à Safi."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-8">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200 space-y-5">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute top-1/2 -translate-y-1/2 start-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                isRtl
                  ? "ابحث باسم المباراة (مثل: ENSA, ENCG, ENA, Médecine) أو الكلمات المفتاحية..."
                  : "Rechercher par nom de concours (ex: ENSA, ENCG, ENA, Médecine) ou mot-clé..."
              }
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 ps-12 pe-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B284C] focus:bg-white transition-all"
            />
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categoryTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
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

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 font-semibold px-1">
          <span>
            {isRtl
              ? `عرض ${filteredPrograms.length} برنامجاً تكوينياً`
              : `Affichage de ${filteredPrograms.length} programmes`}
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#0056B3] hover:underline"
            >
              {isRtl ? "مسح البحث" : "Réinitialiser la recherche"}
            </button>
          )}
        </div>

        {/* Programs Grid */}
        {filteredPrograms.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4">
            <GraduationCap className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="font-bold text-lg text-slate-700">
              {isRtl ? "لم يتم العثور على برامج مطابقة لبحثك" : "Aucun programme trouvé"}
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              {isRtl
                ? "يرجى تجربة كلمات بحث أخرى أو تواصل مع إدارة المركز للاستفسار عن برامج وتكوينات مخصصة."
                : "Veuillez essayer d'autres mots-clés ou contacter nos conseillers pour une formation sur-mesure."}
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 bg-[#0B284C] text-white font-bold text-xs rounded-xl"
            >
              {isRtl ? "إعادة ضبط التصفية" : "Voir tous les programmes"}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-200 hover:border-[#0B284C] transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Bar with Badge */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 text-xs font-black bg-[#0B284C] text-[#E4BC44] rounded-lg">
                      {prog.code || (isRtl ? "برنامج تدريبي" : "FORMATION")}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {isRtl ? "حضوري بآسفي" : "Présentiel Safi"}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-black text-lg text-[#0B284C] group-hover:text-[#0056B3] transition-colors leading-tight">
                      {isRtl ? prog.titleAr : prog.titleFr}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {isRtl ? prog.subtitleAr : prog.subtitleFr}
                    </p>
                  </div>

                  {/* Subjects pill preview */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      {isRtl ? "المواد والمحاور المغطاة:" : "Matières & Modules clés :"}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {(isRtl ? prog.subjectsAr : prog.subjectsFr).slice(0, 3).map((sub, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium"
                        >
                          {sub}
                        </span>
                      ))}
                      {(isRtl ? prog.subjectsAr : prog.subjectsFr).length > 3 && (
                        <span className="px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-400 text-[11px]">
                          +{(isRtl ? prog.subjectsAr : prog.subjectsFr).length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Target Audience */}
                  <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">
                      {isRtl ? prog.targetAudienceAr : prog.targetAudienceFr}
                    </span>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProgram(prog)}
                    className="text-xs font-bold text-[#0B284C] group-hover:text-[#0056B3] flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{isRtl ? "عرض التفاصيل الكاملة" : "Détails & Programme"}</span>
                    <ArrowIcon className="w-3.5 h-3.5 text-[#E4BC44] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenContactWithProgram(prog.id)}
                    className="px-4 py-2 bg-[#0B284C] hover:bg-[#071d37] text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    {isRtl ? "تسجيل" : "S'inscrire"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Consultation reminder */}
        <div className="bg-[#E4BC44] rounded-2xl p-6 sm:p-8 text-[#0B284C] flex flex-col md:flex-row items-center justify-between gap-6 shadow-md mt-12">
          <div className="space-y-1 text-center md:text-start">
            <h4 className="font-black text-xl">
              {isRtl
                ? "هل تحتاج برنامجاً مخصصاً لا يظهر في القائمة؟"
                : "Vous cherchez une formation sur-mesure non répertoriée ?"}
            </h4>
            <p className="text-xs sm:text-sm font-semibold opacity-90">
              {isRtl
                ? "نقدم حصص تدريب ومواكبة فردية لمختلف المسارات الجامعية والمهنية."
                : "Nos enseignants et conseillers dispensent des modules personnalisés sur demande."}
            </p>
          </div>
          <button
            onClick={() => onOpenContactWithProgram()}
            className="px-6 py-3 bg-[#0B284C] hover:bg-[#071d37] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            {isRtl ? "طلب استشارة خاصة" : "Contactez nos Conseillers"}
          </button>
        </div>
      </div>
    </div>
  );
};
