import React, { useState } from 'react';
import { CenterProfile, Language } from '../types';
import { AppPage } from '../components/Header';
import { ARTICLES_DATA, ArticleItem } from '../data/articlesData';
import {
  FileText,
  Clock,
  Calendar,
  Tag,
  ArrowRight,
  ArrowLeft,
  Search,
  BookOpen,
  Share2,
  X,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

interface ArticlesPageProps {
  currentLang: Language;
  profile: CenterProfile;
  onNavigatePage: (page: AppPage) => void;
  onOpenContact: () => void;
}

export const ArticlesPage: React.FC<ArticlesPageProps> = ({
  currentLang,
  profile,
  onNavigatePage,
  onOpenContact,
}) => {
  const isRtl = currentLang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const filteredArticles = ARTICLES_DATA.filter((item) => {
    const query = searchQuery.trim().toLowerCase();
    const matchesTag = selectedTag === 'all' || item.tags.includes(selectedTag);
    if (!query) return matchesTag;

    const fullText = `${item.titleAr} ${item.titleFr} ${item.excerptAr} ${item.excerptFr} ${item.tags.join(' ')}`.toLowerCase();
    return matchesTag && fullText.includes(query);
  });

  const allTags = Array.from(new Set(ARTICLES_DATA.flatMap((a) => a.tags)));

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
            <span className="text-white">{isRtl ? "مقالات وأخبار" : "Articles & Guides"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            {isRtl ? "دليل التوجيه ومقالات اجتياز المباريات" : "Guides Pratiques & Actualités d'Orientation"}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {isRtl
              ? "نصائح وإرشادات منهجية حصرية يقدمها الفريق البيداغوجي لمركز آفاق للاستشارات لمساعدة التلاميذ والطلبة على التفوق."
              : "Retrouvez les analyses, conseils méthodologiques et guides exclusifs rédigés par nos inspecteurs et experts à Safi."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-10">
        {/* Search & Tag filter */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute top-1/2 -translate-y-1/2 start-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                isRtl
                  ? "ابحث في المقالات (عن مباراة الطب، TAFEM، اللغات، التوجيه)..."
                  : "Rechercher dans les articles (Médecine, TAFEM, Langues, Orientation)..."
              }
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 ps-12 pe-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B284C]"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedTag('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                selectedTag === 'all'
                  ? 'bg-[#0B284C] text-[#E4BC44]'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {isRtl ? "جميع المواضيع" : "Tous"}
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  selectedTag === tag
                    ? 'bg-[#0B284C] text-[#E4BC44]'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-200 hover:border-[#0B284C] transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={isRtl ? article.titleAr : article.titleFr}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 start-4">
                    <span className="px-3 py-1 rounded-lg text-xs font-black bg-[#0B284C] text-[#E4BC44] shadow-md">
                      {isRtl ? article.categoryAr : article.categoryFr}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3 text-start">
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-semibold">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{article.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{isRtl ? article.readTimeAr : article.readTimeFr}</span>
                    </span>
                  </div>

                  <h3 className="font-black text-lg text-[#0B284C] group-hover:text-[#0056B3] transition-colors line-clamp-2 leading-tight">
                    {isRtl ? article.titleAr : article.titleFr}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {isRtl ? article.excerptAr : article.excerptFr}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {article.tags.map((t, i) => (
                      <span key={i} className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between text-xs font-bold text-[#0B284C]">
                <span>{isRtl ? "قراءة المقال بالكامل" : "Lire l'article complet"}</span>
                <ArrowIcon className="w-4 h-4 text-[#E4BC44] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Detail Modal / Reader */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div
            className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-60 sm:h-72 shrink-0">
              <img
                src={activeArticle.image}
                alt={isRtl ? activeArticle.titleAr : activeArticle.titleFr}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B284C] via-[#0B284C]/40 to-transparent" />

              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 end-4 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 inset-x-6 space-y-2 text-white text-start">
                <span className="px-3 py-1 text-xs font-black bg-[#E4BC44] text-[#0B284C] rounded-lg">
                  {isRtl ? activeArticle.categoryAr : activeArticle.categoryFr}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  {isRtl ? activeArticle.titleAr : activeArticle.titleFr}
                </h2>
                <div className="text-xs text-slate-300 flex items-center gap-3">
                  <span>{activeArticle.date}</span>
                  <span>•</span>
                  <span>{isRtl ? activeArticle.readTimeAr : activeArticle.readTimeFr}</span>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-700 leading-relaxed text-start">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 font-semibold text-xs flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#E4BC44] shrink-0 mt-0.5" />
                <span>
                  {isRtl ? activeArticle.excerptAr : activeArticle.excerptFr}
                </span>
              </div>

              {(isRtl ? activeArticle.contentAr : activeArticle.contentFr).map((paragraph, idx) => (
                <p key={idx} className="text-slate-700 leading-loose">
                  {paragraph}
                </p>
              ))}

              {/* Author box */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0B284C] text-[#E4BC44] flex items-center justify-center font-black text-lg shrink-0">
                  LH
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0B284C]">
                    {isRtl ? "الفريق البيداغوجي لمركز آفاق للاستشارات" : "L'équipe pédagogique Les Horizons Consulting"}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    {isRtl ? "مقر المركز: شارع مليلية، المدينة الجديدة، آسفي" : "Centre Safi : Rue Melilla, Ville Nouvelle"}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => {
                  setActiveArticle(null);
                  onOpenContact();
                }}
                className="px-5 py-2.5 bg-[#0B284C] hover:bg-[#071d37] text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                {isRtl ? "طلب استشارة وتحضير لهذه المباراة" : "Préparer ce concours avec nous"}
              </button>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                {isRtl ? "إغلاق" : "Fermer"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
