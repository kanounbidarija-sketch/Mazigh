import React, { useState, useEffect } from 'react';
import {
  Language,
  CenterProfile,
  ProgramItem,
  InquirySubmission,
} from './types';
import {
  INITIAL_CENTER_PROFILE,
  PROGRAMS_DATA,
  FAQ_DATA,
} from './data/defaultData';
import { Header, AppPage } from './components/Header';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { OrientationPage } from './pages/OrientationPage';
import { PartnersPage } from './pages/PartnersPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { ContactPage } from './pages/ContactPage';
import { SearchModal } from './components/SearchModal';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { AdminDrawer } from './components/AdminDrawer';
import { PrivacyModal } from './components/PrivacyModal';
import { Footer } from './components/Footer';
import { Settings, MessageCircle } from 'lucide-react';

const STORAGE_PROFILE_KEY = 'centre_educatif_profile_v1';
const STORAGE_INQUIRIES_KEY = 'centre_educatif_inquiries_v1';
const STORAGE_LANG_KEY = 'centre_educatif_lang_v1';
const STORAGE_PAGE_KEY = 'centre_educatif_page_v1';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_LANG_KEY);
      if (savedLang === 'ar' || savedLang === 'fr' || savedLang === 'en') {
        return savedLang;
      }
    } catch (e) {
      console.warn('LocalStorage lang error:', e);
    }
    return 'ar';
  });

  const [currentPage, setCurrentPage] = useState<AppPage>(() => {
    try {
      const savedPage = localStorage.getItem(STORAGE_PAGE_KEY) as AppPage;
      if (['home', 'about', 'programs', 'orientation', 'partners', 'articles', 'contact'].includes(savedPage)) {
        return savedPage;
      }
    } catch (e) {
      console.warn('LocalStorage page error:', e);
    }
    return 'home';
  });

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem(STORAGE_LANG_KEY, lang);
    } catch (e) {
      console.warn('LocalStorage save lang error:', e);
    }
  };

  const handleNavigatePage = (page: AppPage) => {
    setCurrentPage(page);
    try {
      localStorage.setItem(STORAGE_PAGE_KEY, page);
    } catch (e) {
      console.warn('LocalStorage save page error:', e);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Load persistent profile or initial
  const [profile, setProfile] = useState<CenterProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_PROFILE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.nameFr || parsed.nameFr.includes('[Nom du Centre') || parsed.nameAr?.includes('ليزوريزون')) {
          return {
            ...parsed,
            nameAr: "آفاق للاستشارات",
            nameFr: "Les Horizons Consulting",
            aboutTextAr: INITIAL_CENTER_PROFILE.aboutTextAr,
          };
        }
        return parsed;
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    return INITIAL_CENTER_PROFILE;
  });

  // Load persistent inquiries
  const [inquiries, setInquiries] = useState<InquirySubmission[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_INQUIRIES_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    return [];
  });

  // Modals & Drawers state
  const [selectedProgramForModal, setSelectedProgramForModal] = useState<ProgramItem | null>(null);
  const [preselectedProgramForContact, setPreselectedProgramForContact] = useState<string | undefined>(undefined);
  const [adminOpen, setAdminOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Synchronize document dir and title when language changes
  useEffect(() => {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    const pageTitlesAr: Record<AppPage, string> = {
      home: 'الرئيسية - التحضير للمباريات والتوجيه',
      about: 'من نحن - عن مركز آفاق للاستشارات',
      programs: 'خدماتنا وبرامجنا - دليل التكوينات والمباريات',
      orientation: 'التوجيه والاستشارة - المسار الفردي والجماعي',
      partners: 'المعاهد والمدارس العليا المستهدفة',
      articles: 'مقالات وأخبار ودليل التوجيه التربوي',
      contact: 'اتصل بنا والتسجيل بالمركز',
    };

    const pageTitlesFr: Record<AppPage, string> = {
      home: 'Accueil - Préparation aux Concours & Orientation',
      about: 'À Propos - Centre Les Horizons Consulting',
      programs: 'Nos Formations & Concours',
      orientation: 'Pôle d\'Orientation & Bilans',
      partners: 'Grandes Écoles Ciblées',
      articles: 'Articles & Guides Pratiques',
      contact: 'Contact & Inscription',
    };

    if (currentLang === 'ar') {
      document.title = `${profile.nameAr} | ${pageTitlesAr[currentPage]} - آسفي`;
    } else {
      document.title = `${profile.nameFr} | ${pageTitlesFr[currentPage]} - Safi`;
    }
  }, [currentLang, currentPage, profile.nameFr, profile.nameAr]);

  const handleUpdateProfile = (newProfile: CenterProfile) => {
    setProfile(newProfile);
    try {
      localStorage.setItem(STORAGE_PROFILE_KEY, JSON.stringify(newProfile));
    } catch (e) {
      console.warn('Failed to save profile in localStorage:', e);
    }
  };

  const handleSaveInquiry = (newInquiry: InquirySubmission) => {
    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    try {
      localStorage.setItem(STORAGE_INQUIRIES_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Failed to save inquiry in localStorage:', e);
    }
  };

  const handleClearInquiries = () => {
    setInquiries([]);
    try {
      localStorage.removeItem(STORAGE_INQUIRIES_KEY);
    } catch (e) {
      console.warn('Failed to clear inquiries in localStorage:', e);
    }
  };

  const handleDeleteInquiry = (id: string) => {
    const updated = inquiries.filter((inq) => inq.id !== id);
    setInquiries(updated);
    try {
      localStorage.setItem(STORAGE_INQUIRIES_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Failed to delete inquiry:', e);
    }
  };

  const handleOpenContactWithProgram = (programId?: string) => {
    setPreselectedProgramForContact(programId);
    handleNavigatePage('contact');
  };

  const isRtl = currentLang === 'ar';

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`min-h-screen bg-[#F8FAFC] text-slate-800 ${
        isRtl ? 'font-arabic' : 'font-sans'
      }`}
    >
      {/* 1. Header with White Top Bar + Deep Navy Navigation Bar */}
      <Header
        currentLang={currentLang}
        currentPage={currentPage}
        onNavigatePage={handleNavigatePage}
        onLanguageChange={handleLanguageChange}
        profile={profile}
        onOpenAdmin={() => setAdminOpen(true)}
        onOpenContact={handleOpenContactWithProgram}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* 2. Multi-Page Main Content Area */}
      <main>
        {currentPage === 'home' && (
          <HomePage
            currentLang={currentLang}
            profile={profile}
            onNavigatePage={handleNavigatePage}
            onSelectProgram={setSelectedProgramForModal}
            onOpenContactWithProgram={handleOpenContactWithProgram}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            currentLang={currentLang}
            profile={profile}
            onNavigatePage={handleNavigatePage}
            onOpenContact={() => handleOpenContactWithProgram()}
          />
        )}

        {currentPage === 'programs' && (
          <ProgramsPage
            currentLang={currentLang}
            profile={profile}
            onNavigatePage={handleNavigatePage}
            onSelectProgram={setSelectedProgramForModal}
            onOpenContactWithProgram={handleOpenContactWithProgram}
          />
        )}

        {currentPage === 'orientation' && (
          <OrientationPage
            currentLang={currentLang}
            profile={profile}
            onNavigatePage={handleNavigatePage}
            onOpenContact={handleOpenContactWithProgram}
          />
        )}

        {currentPage === 'partners' && (
          <PartnersPage
            currentLang={currentLang}
            profile={profile}
            onNavigatePage={handleNavigatePage}
            onOpenContact={handleOpenContactWithProgram}
          />
        )}

        {currentPage === 'articles' && (
          <ArticlesPage
            currentLang={currentLang}
            profile={profile}
            onNavigatePage={handleNavigatePage}
            onOpenContact={() => handleOpenContactWithProgram()}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            currentLang={currentLang}
            profile={profile}
            preselectedProgramId={preselectedProgramForContact}
            onNavigatePage={handleNavigatePage}
            onSaveInquiry={handleSaveInquiry}
          />
        )}
      </main>

      {/* 3. Footer with Multi-Page Navigation and Ivory Bottom Bar */}
      <Footer
        currentLang={currentLang}
        profile={profile}
        onNavigatePage={handleNavigatePage}
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenAdmin={() => setAdminOpen(true)}
        onOpenContact={() => handleOpenContactWithProgram()}
      />

      {/* 4. Global Modals and Drawers */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        currentLang={currentLang}
        onSelectProgram={setSelectedProgramForModal}
        onNavigatePage={handleNavigatePage}
      />

      <ProgramDetailModal
        program={selectedProgramForModal}
        currentLang={currentLang}
        onClose={() => setSelectedProgramForModal(null)}
        onRegister={(p) => handleOpenContactWithProgram(p.id)}
      />

      <AdminDrawer
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        currentLang={currentLang}
        profile={profile}
        inquiries={inquiries}
        onUpdateProfile={handleUpdateProfile}
        onClearInquiries={handleClearInquiries}
        onDeleteInquiry={handleDeleteInquiry}
      />

      <PrivacyModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        currentLang={currentLang}
      />

      {/* 5. Persistent Floating Contact & Admin Buttons */}
      <div className="fixed bottom-5 end-5 z-30 flex items-center gap-2.5">
        <a
          href={`https://wa.me/${profile.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
            isRtl
              ? 'السلام عليكم مركز آفاق للاستشارات (Les Horizons Consulting)، أود الاستفسار والتسجيل في التكوينات.'
              : 'Bonjour Les Horizons Consulting, je souhaite des renseignements sur vos formations.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp direct"
          className="w-12 h-12 rounded-full bg-[#E4BC44] hover:bg-[#d1ab38] text-[#0B284C] shadow-xl hover:shadow-2xl flex items-center justify-center transition-all hover:scale-105 border-2 border-white"
        >
          <MessageCircle className="w-6 h-6 text-[#0B284C]" />
        </a>

        <button
          onClick={() => setAdminOpen(true)}
          title="إدارة المركز والإعدادات"
          className="group flex items-center gap-2 px-4 py-2.5 bg-[#0B284C] hover:bg-[#071c36] text-[#E4BC44] rounded-full shadow-xl hover:shadow-2xl text-xs font-bold transition-all hover:scale-105 border border-[#E4BC44]/40 cursor-pointer"
        >
          <Settings className="w-4 h-4 text-[#E4BC44] group-hover:rotate-45 transition-transform" />
          <span className="hidden sm:inline">
            {isRtl ? "إدارة وتعديل المركز" : "Mode Gestionnaire"}
          </span>
        </button>
      </div>
    </div>
  );
}
