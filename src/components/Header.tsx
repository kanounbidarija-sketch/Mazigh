import React, { useState } from 'react';
import { CenterProfile, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import {
  Menu,
  X,
  Settings2,
  Phone,
  MapPin,
  Search,
  MessageCircle,
  HelpCircle,
  Sparkles,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export type AppPage = 'home' | 'about' | 'programs' | 'orientation' | 'partners' | 'articles' | 'contact';

interface HeaderProps {
  currentLang: Language;
  currentPage: AppPage;
  onNavigatePage: (page: AppPage) => void;
  onLanguageChange: (lang: Language) => void;
  profile: CenterProfile;
  onOpenAdmin: () => void;
  onOpenContact: (programId?: string) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  currentPage,
  onNavigatePage,
  onLanguageChange,
  profile,
  onOpenAdmin,
  onOpenContact,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = UI_TRANSLATIONS[currentLang];
  const isRtl = currentLang === 'ar';
  const brandName = isRtl ? profile.nameAr : profile.nameFr;

  const navLinks: { id: AppPage; labelAr: string; labelFr: string }[] = [
    { id: 'home', labelAr: 'الرئيسية', labelFr: 'Accueil' },
    { id: 'about', labelAr: 'من نحن', labelFr: 'À Propos' },
    { id: 'programs', labelAr: 'خدماتنا وبرامجنا', labelFr: 'Nos Programmes' },
    { id: 'orientation', labelAr: 'التوجيه والاستشارة', labelFr: 'Orientation' },
    { id: 'partners', labelAr: 'المعاهد والشركاء', labelFr: 'Écoles Ciblées' },
    { id: 'articles', labelAr: 'مقالات وأخبار', labelFr: 'Articles & Guides' },
    { id: 'contact', labelAr: 'اتصل بنا', labelFr: 'Contact' },
  ];

  const handleNavClick = (page: AppPage) => {
    onNavigatePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-md">
      {/* 1. TOP BAR (Pure White Background matching the reference template) */}
      <div className="bg-white text-slate-800 border-b border-slate-100 py-2.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo & Brand Identity */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <BrandLogo size="md" />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black text-[#0B284C] group-hover:text-[#E4BC44] transition-colors leading-tight">
                {brandName}
              </span>
              <span className="text-[11px] font-semibold text-slate-500 tracking-tight hidden sm:block">
                {isRtl ? "مركز التميز، التحضير للمباريات والتوجيه بآسفي" : "Centre d'excellence & d'orientation à Safi"}
              </span>
            </div>
          </div>

          {/* Contact details & Consultation button as shown in reference */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Address with red/blue location pin */}
            <div className="hidden xl:flex items-center gap-2 text-xs text-slate-600">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-[#0B284C]" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-800 text-[11px]">
                  {isRtl ? "مقر المركز" : "Notre Adresse"}
                </span>
                <span className="text-slate-500 text-[11px] max-w-[200px] truncate">
                  {isRtl ? profile.addressAr : profile.addressFr}
                </span>
              </div>
            </div>

            {/* Phone with phone icon */}
            <div className="hidden md:flex items-center gap-2 text-xs text-slate-600">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-[#0B284C]" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-800 text-[11px]">
                  {isRtl ? "اتصل بنا مباشرة" : "Service Conseil"}
                </span>
                <a
                  href={`tel:${profile.phone.split('/')[0].trim()}`}
                  className="font-bold text-[#0B284C] hover:text-[#E4BC44] transition-colors tabular-nums text-[11px]"
                  dir="ltr"
                >
                  {profile.phone.split('/')[0].trim()}
                </a>
              </div>
            </div>

            {/* "طلب استشارة" Button (Navy Blue CTA button as in screenshot) */}
            <button
              onClick={() => onOpenContact()}
              className="px-4 py-2 text-xs sm:text-sm font-bold text-white bg-[#0B284C] hover:bg-[#071d37] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap cursor-pointer"
            >
              {isRtl ? "طلب استشارة" : "Demander Conseil"}
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION HEADER (Solid Deep Navy `#0B284C` matching reference screenshot) */}
      <div className="bg-[#0B284C] text-white py-0 px-4 sm:px-8 border-b border-[#071c36]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Main Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-3.5 px-3.5 text-xs xl:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-[#E4BC44] bg-[#071e3a]'
                      : 'text-slate-100 hover:text-[#E4BC44] hover:bg-[#092241]'
                  }`}
                >
                  <span>{isRtl ? link.labelAr : link.labelFr}</span>
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-0 h-1 bg-[#E4BC44]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile brand text indicator */}
          <div className="lg:hidden py-3 text-xs font-bold text-[#E4BC44] flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {isRtl
                ? navLinks.find((l) => l.id === currentPage)?.labelAr || 'الرئيسية'
                : navLinks.find((l) => l.id === currentPage)?.labelFr || 'Accueil'}
            </span>
          </div>

          {/* Right Tools: Search Button + Language Switcher + Admin Button */}
          <div className="flex items-center gap-2 sm:gap-3 py-2">
            {/* Quick Search Button (Search icon as shown on the right of the reference nav) */}
            <button
              onClick={onOpenSearch}
              title={isRtl ? "البحث في المباريات والبرامج" : "Recherche rapide"}
              className="p-2 text-slate-200 hover:text-[#E4BC44] hover:bg-[#092241] rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 text-xs"
            >
              <Search className="w-4 h-4" />
              <span className="hidden xl:inline text-xs font-medium text-slate-300">
                {isRtl ? "بحث..." : "Rechercher..."}
              </span>
            </button>

            {/* Language Switcher */}
            <div className="flex items-center rounded-lg bg-[#071e3a] p-0.5 border border-[#163863] text-xs font-bold">
              <button
                onClick={() => onLanguageChange('ar')}
                className={`px-2 py-1 rounded-md transition-all ${
                  currentLang === 'ar'
                    ? 'bg-[#E4BC44] text-[#0B284C] shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
                title="العربية"
              >
                عربي
              </button>
              <button
                onClick={() => onLanguageChange('fr')}
                className={`px-2 py-1 rounded-md transition-all ${
                  currentLang === 'fr'
                    ? 'bg-[#E4BC44] text-[#0B284C] shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
                title="Français"
              >
                FR
              </button>
            </div>

            {/* Quick Admin Drawer Access */}
            <button
              onClick={onOpenAdmin}
              title={isRtl ? "إدارة المركز وتعديل المعلومات" : "Panneau d'administration"}
              className="p-2 text-slate-300 hover:text-[#E4BC44] hover:bg-[#092241] rounded-lg transition-colors cursor-pointer"
            >
              <Settings2 className="w-4 h-4 text-[#E4BC44]" />
            </button>

            {/* Mobile hamburger menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#E4BC44] hover:bg-[#092241] rounded-md transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071e3a] border-t border-[#092b52] px-4 py-4 space-y-2 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-start px-3 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-[#E4BC44] text-[#0B284C]'
                      : 'text-slate-200 hover:bg-[#0B284C] hover:text-[#E4BC44]'
                  }`}
                >
                  {isRtl ? link.labelAr : link.labelFr}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#092b52] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full text-center py-2.5 text-sm font-bold text-[#0B284C] bg-[#E4BC44] hover:bg-[#d1ab38] rounded-lg shadow-sm"
            >
              {isRtl ? "طلب استشارة وتسجيل" : "Demander Conseil & Inscription"}
            </button>
            <div className="flex items-center justify-between text-xs text-slate-400 px-1 pt-1">
              <span>{profile.phone}</span>
              <span>{profile.city}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
