import React, { useState } from 'react';
import { ProgramItem, Language } from '../types';
import { PROGRAMS_DATA } from '../data/defaultData';
import { ARTICLES_DATA, ArticleItem } from '../data/articlesData';
import { PARTNERS_SCHOOLS, PartnerSchool } from '../data/partnersData';
import { Search, X, ArrowRight, ArrowLeft, BookOpen, GraduationCap, Building2, FileText } from 'lucide-react';

import { AppPage } from './Header';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onSelectProgram: (program: ProgramItem) => void;
  onNavigatePage: (page: AppPage) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onSelectProgram,
  onNavigatePage,
}) => {
  const [query, setQuery] = useState('');
  const isRtl = currentLang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  if (!isOpen) return null;

  const normalizedQuery = query.trim().toLowerCase();

  const matchingPrograms = normalizedQuery
    ? PROGRAMS_DATA.filter((p) => {
        const textToSearch = `${p.titleAr} ${p.titleFr} ${p.code || ''} ${p.subtitleAr} ${p.subtitleFr} ${p.subjectsAr.join(' ')} ${p.subjectsFr.join(' ')}`.toLowerCase();
        return textToSearch.includes(normalizedQuery);
      })
    : PROGRAMS_DATA.slice(0, 4);

  const matchingArticles = normalizedQuery
    ? ARTICLES_DATA.filter((a) => {
        const textToSearch = `${a.titleAr} ${a.titleFr} ${a.categoryAr} ${a.categoryFr} ${a.tags.join(' ')}`.toLowerCase();
        return textToSearch.includes(normalizedQuery);
      })
    : ARTICLES_DATA.slice(0, 3);

  const matchingSchools = normalizedQuery
    ? PARTNERS_SCHOOLS.filter((s) => {
        const textToSearch = `${s.nameAr} ${s.nameFr} ${s.acronym} ${s.descriptionAr} ${s.descriptionFr}`.toLowerCase();
        return textToSearch.includes(normalizedQuery);
      })
    : PARTNERS_SCHOOLS.slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center p-4 border-b border-slate-200 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              isRtl
                ? "ابحث عن مباراة (ENSA, ENCG, Médecine...) أو لغات أو مقال..."
                : "Recherchez un concours (ENSA, ENCG, Médecine...), langues ou articles..."
            }
            className="w-full bg-transparent px-3 py-2 text-slate-800 placeholder-slate-400 text-sm focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="ms-2 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-lg transition-colors"
          >
            {isRtl ? "إغلاق" : "Fermer"}
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6 text-sm divide-y divide-slate-100">
          {/* Programs Section */}
          <div className="space-y-2 pt-1">
            <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
              <span className="flex items-center gap-1.5 text-[#0B284C]">
                <GraduationCap className="w-4 h-4 text-[#E4BC44]" />
                <span>{isRtl ? "التكوينات ومباريات الولوج" : "Programmes & Concours"}</span>
              </span>
              <span className="text-slate-400 text-[11px] font-normal">
                {matchingPrograms.length} {isRtl ? "نتائج" : "résultats"}
              </span>
            </div>

            {matchingPrograms.length === 0 ? (
              <p className="text-xs text-slate-400 py-2">
                {isRtl ? "لم يتم العثور على برامج مطابقة." : "Aucun programme trouvé."}
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-2">
                {matchingPrograms.map((prog) => (
                  <div
                    key={prog.id}
                    onClick={() => {
                      onSelectProgram(prog);
                      onClose();
                    }}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      {prog.code && (
                        <span className="px-2.5 py-1 text-xs font-black bg-[#0B284C] text-[#E4BC44] rounded-lg shrink-0">
                          {prog.code}
                        </span>
                      )}
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm group-hover:text-[#0B284C] transition-colors">
                          {isRtl ? prog.titleAr : prog.titleFr}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          {isRtl ? prog.subtitleAr : prog.subtitleFr}
                        </p>
                      </div>
                    </div>
                    <ArrowIcon className="w-4 h-4 text-slate-300 group-hover:text-[#E4BC44] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all shrink-0" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Schools Section */}
          <div className="space-y-2 pt-4">
            <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
              <span className="flex items-center gap-1.5 text-[#0B284C]">
                <Building2 className="w-4 h-4 text-[#E4BC44]" />
                <span>{isRtl ? "المعاهد والمدارس العليا" : "Grandes Écoles ciblées"}</span>
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {matchingSchools.map((school) => (
                <div
                  key={school.id}
                  onClick={() => {
                    onNavigatePage('partners');
                    onClose();
                  }}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-extrabold text-xs text-slate-700 bg-slate-100 px-2 py-1 rounded">
                      {school.acronym}
                    </span>
                    <span className="text-xs font-medium text-slate-700 group-hover:text-[#0B284C]">
                      {isRtl ? school.nameAr : school.nameFr}
                    </span>
                  </div>
                  <ArrowIcon className="w-4 h-4 text-slate-300 group-hover:text-[#E4BC44]" />
                </div>
              ))}
            </div>
          </div>

          {/* Articles Section */}
          <div className="space-y-2 pt-4">
            <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
              <span className="flex items-center gap-1.5 text-[#0B284C]">
                <FileText className="w-4 h-4 text-[#E4BC44]" />
                <span>{isRtl ? "مقالات وتوجيهات" : "Articles & Guides"}</span>
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {matchingArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => {
                    onNavigatePage('articles');
                    onClose();
                  }}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all cursor-pointer group"
                >
                  <span className="text-xs text-slate-700 group-hover:text-[#0B284C] font-medium line-clamp-1">
                    {isRtl ? article.titleAr : article.titleFr}
                  </span>
                  <ArrowIcon className="w-4 h-4 text-slate-300 group-hover:text-[#E4BC44] shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-500 flex items-center justify-between">
          <span>{isRtl ? "مركز آفاق للاستشارات · آسفي" : "Les Horizons Consulting · Safi"}</span>
          <span className="text-slate-400 text-[11px]">
            {isRtl ? "اضغط ESC للإغلاق" : "Appuyez sur Échap pour fermer"}
          </span>
        </div>
      </div>
    </div>
  );
};
