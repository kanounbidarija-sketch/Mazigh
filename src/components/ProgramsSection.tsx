import React, { useState, useMemo } from 'react';
import { ProgramItem, Language, ProgramCategory } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { CATEGORIES_CONFIG } from '../data/defaultData';
import {
  Search,
  BookOpen,
  Calendar,
  Clock,
  Layers,
  ArrowRight,
  ArrowLeft,
  Info,
  GraduationCap,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

interface ProgramsSectionProps {
  programs: ProgramItem[];
  currentLang: Language;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onSelectProgram: (program: ProgramItem) => void;
  onRegisterProgram: (program: ProgramItem) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  programs,
  currentLang,
  selectedCategory,
  onSelectCategory,
  onSelectProgram,
  onRegisterProgram,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const t = UI_TRANSLATIONS[currentLang];
  const isRtl = currentLang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const filteredPrograms = useMemo(() => {
    return programs.filter((prog) => {
      const matchCategory =
        selectedCategory === 'all' || prog.category === selectedCategory;

      if (!matchCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const title = (isRtl ? prog.titleAr : prog.titleFr).toLowerCase();
      const subtitle = (isRtl ? prog.subtitleAr : prog.subtitleFr).toLowerCase();
      const audience = (isRtl ? prog.targetAudienceAr : prog.targetAudienceFr).toLowerCase();
      const code = prog.code ? prog.code.toLowerCase() : '';
      const subjects = (isRtl ? prog.subjectsAr : prog.subjectsFr)
        .join(' ')
        .toLowerCase();

      return (
        title.includes(q) ||
        subtitle.includes(q) ||
        audience.includes(q) ||
        code.includes(q) ||
        subjects.includes(q)
      );
    });
  }, [programs, selectedCategory, searchQuery, isRtl]);

  return (
    <section id="programmes" className="py-16 bg-[#041C34] border-b border-[#0C1C3C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[#E4BC44] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isRtl ? "دليل التكوينات ومباريات الولوج" : "Catalogue des Formations & Concours"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F4F4]">
              {t.sectionProgramsTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#F4F4F4]/80">
              {t.sectionProgramsSubtitle}
            </p>
          </div>

          {/* Search Box with Navy #0C1C3C & Gold focus */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#E4BC44]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isRtl ? "بحث في البرامج والمواد..." : "Rechercher un programme..."}
              className="w-full pl-9 pr-4 rtl:pl-4 rtl:pr-9 py-2.5 text-xs sm:text-sm bg-[#0C1C3C] border border-[#E4BC44]/30 rounded-xl focus:outline-none focus:border-[#E4BC44] transition-all text-[#F4F4F4] placeholder:text-[#F4F4F4]/40"
            />
          </div>
        </div>

        {/* Category Filter Tabs (Interactive Segmented Buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#0C1C3C]">
          {CATEGORIES_CONFIG.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#E4BC44] text-[#041C34] shadow-md font-bold'
                    : 'bg-[#0C1C3C] text-[#F4F4F4] hover:text-[#E4BC44] hover:border-[#E4BC44]/40 border border-transparent'
                }`}
              >
                {isRtl ? cat.labelAr : cat.labelFr}
              </button>
            );
          })}
        </div>

        {/* Disclaimer banner for accuracy */}
        <div className="flex items-start gap-3 p-3.5 bg-[#0C1C3C] border border-[#E4BC44]/30 rounded-xl text-xs text-[#F4F4F4]/90">
          <Info className="w-4 h-4 text-[#E4BC44] shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="font-bold text-[#E4BC44]">
              {isRtl ? "التزام الدقة والموثوقية بمركز آفاق للاستشارات :" : "Engagement de fiabilité et d'éthique :"}
            </span>
            <p>
              {isRtl
                ? "جميع التسميات الرسمية للمباريات (ENA، ENCG، Médecine، ENSA، ENSAM، ISCAE) محفوظة بأسمائها المعتمدة. تواريخ المباريات الرسمية وعتبات الانتقاء تحددها الوزارات المعنية، ويتم إعلام المسجلين بها فور نشرها."
                : "Les appellations officielles des concours (ENA, ENCG, Médecine, ENSA, ENSAM, ISCAE) sont scrupuleusement respectées. Les dates et conditions d'accès sont fixées par les ministères et établissements officiels."}
            </p>
          </div>
        </div>

        {/* Program Cards Grid */}
        {filteredPrograms.length === 0 ? (
          <div className="p-12 text-center border border-dashed border-[#0C1C3C] rounded-2xl space-y-3 bg-[#0C1C3C]/40">
            <GraduationCap className="w-10 h-10 text-[#E4BC44] mx-auto" />
            <h3 className="font-bold text-[#F4F4F4] text-base">
              {isRtl ? "لا توجد نتائج مطابقة لبحثك" : "Aucun programme correspondant"}
            </h3>
            <p className="text-xs text-[#F4F4F4]/60">
              {isRtl
                ? "جرب استخدام كلمات بحث أخرى أو اختر فئة مختلفة من الأقطاب أعلاه."
                : "Essayez de modifier votre recherche ou de sélectionner une autre catégorie."}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
              }}
              className="text-xs text-[#E4BC44] font-bold hover:underline cursor-pointer"
            >
              {isRtl ? "إعادة تعيين الفلاتر" : "Réinitialiser les filtres"}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program) => {
              const title = isRtl ? program.titleAr : program.titleFr;
              const subtitle = isRtl ? program.subtitleAr : program.subtitleFr;
              const audience = isRtl ? program.targetAudienceAr : program.targetAudienceFr;
              const subjects = isRtl ? program.subjectsAr : program.subjectsFr;
              const methodology = isRtl ? program.methodologyAr : program.methodologyFr;
              const duration = isRtl ? program.durationAr : program.durationFr;
              const format = isRtl ? program.formatAr : program.formatFr;
              const statusNotice = isRtl ? program.registrationStatusAr : program.registrationStatusFr;

              return (
                <div
                  key={program.id}
                  className="group bg-[#0C1C3C] border border-[#0C1C3C] hover:border-[#E4BC44] rounded-2xl p-5 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Header line: Code & Category tag */}
                    <div className="flex items-center justify-between text-xs text-[#F4F4F4]/70">
                      <div className="flex items-center gap-1.5 font-medium">
                        {program.code ? (
                          <span className="font-bold text-[#E4BC44] tracking-wide font-mono bg-[#041C34] px-2 py-0.5 rounded border border-[#E4BC44]/30">
                            {program.code}
                          </span>
                        ) : (
                          <span className="font-semibold text-[#E4BC44]">
                            {isRtl
                              ? (CATEGORIES_CONFIG.find((c) => c.id === program.category)?.labelAr || program.category)
                              : (CATEGORIES_CONFIG.find((c) => c.id === program.category)?.labelFr || program.category)}
                          </span>
                        )}
                        <span aria-hidden="true" className="text-[#E4BC44]">·</span>
                        <span>{isRtl ? "مسلك معتمد" : "Cursus officiel"}</span>
                      </div>

                      <span className="text-[11px] text-[#E4BC44] bg-[#041C34] px-2 py-0.5 rounded border border-[#E4BC44]/20 font-bold">
                        {isRtl ? "متاح للتسجيل" : "Ouvert"}
                      </span>
                    </div>

                    {/* Card Title */}
                    <div>
                      <h3 className="text-base font-bold text-[#E4BC44] leading-snug group-hover:text-[#F4F4EC] transition-colors">
                        {title}
                      </h3>
                      <p className="text-xs text-[#F4F4F4]/80 mt-1 line-clamp-2">
                        {subtitle}
                      </p>
                    </div>

                    {/* Target Audience */}
                    <div className="p-2.5 bg-[#041C34] rounded-xl text-xs space-y-1 border border-[#0C1C3C]">
                      <span className="font-bold text-[#E4BC44] block">
                        {t.targetAudienceLabel}
                      </span>
                      <p className="text-[#F4F4F4]/90 line-clamp-2">{audience}</p>
                    </div>

                    {/* Subjects overview (top 3) */}
                    <div className="space-y-1.5 text-xs">
                      <span className="font-bold text-[#F4F4EC] block">
                        {t.subjectsLabel}
                      </span>
                      <ul className="space-y-1 text-[#F4F4F4]/80">
                        {subjects.slice(0, 3).map((sub, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-[#E4BC44] mt-0.5 font-bold">•</span>
                            <span className="line-clamp-1">{sub}</span>
                          </li>
                        ))}
                        {subjects.length > 3 && (
                          <li className="text-[11px] text-[#E4BC44] font-semibold">
                            + {subjects.length - 3} {isRtl ? "مواد وتدريبات أخرى" : "autres matières"}
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Format & Duration metadata */}
                    <div className="pt-2 border-t border-[#041C34] grid grid-cols-2 gap-2 text-[11px] text-[#F4F4F4]/70">
                      <div>
                        <span className="block font-semibold text-[#E4BC44]">
                          {isRtl ? "الصيغة :" : "Format :"}
                        </span>
                        <span className="line-clamp-1 text-[#F4F4F4]">{format}</span>
                      </div>
                      <div>
                        <span className="block font-semibold text-[#E4BC44]">
                          {isRtl ? "الإيقاع :" : "Rythme :"}
                        </span>
                        <span className="line-clamp-1 text-[#F4F4F4]">{duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions row */}
                  <div className="mt-5 pt-3 border-t border-[#041C34] flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectProgram(program)}
                      className="text-xs font-bold text-[#F4F4F4] hover:text-[#E4BC44] transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>{t.ctaViewDetails}</span>
                      <ArrowIcon className="w-3.5 h-3.5 text-[#E4BC44]" />
                    </button>

                    <button
                      onClick={() => onRegisterProgram(program)}
                      className="px-3.5 py-1.5 text-xs font-bold text-[#041C34] bg-[#E4BC44] hover:bg-[#d1ab38] rounded-lg shadow-sm transition-colors cursor-pointer"
                    >
                      {isRtl ? "تسجيل" : "S'inscrire"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
