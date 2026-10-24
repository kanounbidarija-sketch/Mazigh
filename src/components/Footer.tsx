import React from 'react';
import { CenterProfile, Language } from '../types';
import { AppPage } from './Header';
import { UI_TRANSLATIONS } from '../data/translations';
import { Settings, ShieldCheck, MapPin, Phone, Mail, MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  currentLang: Language;
  profile: CenterProfile;
  onNavigatePage: (page: AppPage) => void;
  onOpenPrivacy: () => void;
  onOpenAdmin: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  profile,
  onNavigatePage,
  onOpenPrivacy,
  onOpenAdmin,
  onOpenContact,
}) => {
  const isRtl = currentLang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const handleNav = (page: AppPage) => {
    onNavigatePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#051830] text-slate-300 text-xs border-t border-[#092b52]">
      {/* 4 Columns Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Presentation */}
          <div className="space-y-4">
            <div
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <BrandLogo size="md" />
              <div>
                <h3 className="text-base font-black text-white tracking-tight">
                  {isRtl ? profile.nameAr : profile.nameFr}
                </h3>
                <span className="text-[11px] font-bold text-[#E4BC44] block">
                  {isRtl ? "المواكبة | الابتكار | النجاح" : "Accompagner | Innover | Réussir"}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {isRtl
                ? "المركز الرائد بمدينة آسفي للتحضير لمباريات المدارس العليا (ENSA، ENCG، Médecine، ENA، ISCAE)، وتقوية اللغات، الدعم المدرسي والتوجيه الفردي والجماعي."
                : "Centre d'excellence à Safi pour la préparation aux concours des Grandes Écoles marocaines, le perfectionnement linguistique et l'orientation stratégique."}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${profile.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0B284C] text-[#E4BC44] flex items-center justify-center hover:bg-[#E4BC44] hover:text-[#0B284C] transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${profile.phone.split('/')[0].trim()}`}
                className="w-8 h-8 rounded-lg bg-[#0B284C] text-[#E4BC44] flex items-center justify-center hover:bg-[#E4BC44] hover:text-[#0B284C] transition-colors"
                title="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenAdmin}
                className="w-8 h-8 rounded-lg bg-[#0B284C] text-[#E4BC44] flex items-center justify-center hover:bg-[#E4BC44] hover:text-[#0B284C] transition-colors"
                title={isRtl ? "الإدارة" : "Admin"}
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links (Multi-Page) */}
          <div className="space-y-3">
            <h4 className="font-black text-white text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
              {isRtl ? "صفحات الموقع" : "Navigation"}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#E4BC44] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowIcon className="w-3 h-3 text-[#E4BC44]" />
                  <span>{isRtl ? "الرئيسية" : "Accueil"}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#E4BC44] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowIcon className="w-3 h-3 text-[#E4BC44]" />
                  <span>{isRtl ? "من نحن وعن المركز" : "À Propos"}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('programs')}
                  className="hover:text-[#E4BC44] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowIcon className="w-3 h-3 text-[#E4BC44]" />
                  <span>{isRtl ? "خدماتنا وبرامجنا (18 برنامج)" : "Nos Programmes"}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('orientation')}
                  className="hover:text-[#E4BC44] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowIcon className="w-3 h-3 text-[#E4BC44]" />
                  <span>{isRtl ? "التوجيه والاستشارة (المساران)" : "Pôle Orientation"}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('partners')}
                  className="hover:text-[#E4BC44] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowIcon className="w-3 h-3 text-[#E4BC44]" />
                  <span>{isRtl ? "المعاهد والمدارس العليا" : "Grandes Écoles"}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('articles')}
                  className="hover:text-[#E4BC44] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowIcon className="w-3 h-3 text-[#E4BC44]" />
                  <span>{isRtl ? "دليل التوجيه والمقالات" : "Articles & Guides"}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#E4BC44] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowIcon className="w-3 h-3 text-[#E4BC44]" />
                  <span>{isRtl ? "اتصل بنا والتسجيل" : "Contact & Inscription"}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Programs */}
          <div className="space-y-3">
            <h4 className="font-black text-white text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
              {isRtl ? "أبرز مباريات الولوج" : "Concours Préparés"}
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E4BC44]" />
                <span>{isRtl ? "مباراة كليات الطب والصيدلة (FMP/FMD)" : "Concours Médecine & Pharmacie"}</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E4BC44]" />
                <span>{isRtl ? "مباراة مدارس المهندسين (ENSA / ENSAM)" : "Écoles d'Ingénieurs ENSA / ENSAM"}</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E4BC44]" />
                <span>{isRtl ? "مباراة التجارة والتسيير TAFEM (ENCG / ISCAE)" : "Commerce & Gestion TAFEM (ENCG)"}</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E4BC44]" />
                <span>{isRtl ? "مباراة الهندسة المعمارية (ENA)" : "Architecture ENA"}</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E4BC44]" />
                <span>{isRtl ? "شواهد اللغات الدولية (TCF, TOEFL, IELTS)" : "Certifications Langues Internationales"}</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E4BC44]" />
                <span>{isRtl ? "مباريات التوظيف بالقطاع العام والخاص" : "Concours de Recrutement"}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Safi Contact Info */}
          <div className="space-y-3">
            <h4 className="font-black text-white text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
              {isRtl ? "مقر المركز بآسفي" : "Siège à Safi"}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>{isRtl ? profile.addressAr : profile.addressFr}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span dir="ltr" className="font-mono text-slate-200">{profile.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E4BC44] shrink-0" />
                <span dir="ltr">{profile.email}</span>
              </div>
              <div className="pt-2 text-[11px] text-[#E4BC44] font-semibold">
                {isRtl ? profile.openingHoursAr : profile.openingHoursFr}
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory disclaimer */}
        <div className="pt-6 border-t border-slate-800/80 text-[11px] text-slate-500 text-center max-w-4xl mx-auto leading-relaxed">
          <p>
            {isRtl
              ? "مركز آفاق للاستشارات (Les Horizons Consulting) مؤسسة تكوينية واستشارية مستقلة بمدينة آسفي. شروط الترشيح وعتبات الانتقاء والتواريخ الرسمية للمباريات تخضع للقرارات الصادرة عن الوزارة الوصية وإدارات المدارس المعنية."
              : "Les Horizons Consulting est un centre indépendant de préparation et d'orientation à Safi. Les seuils et calendriers officiels des concours demeurent sous la tutelle exclusive des ministères et établissements organisateurs."}
          </p>
        </div>
      </div>

      {/* Bottom Bar matching Ivory White #F4F4EC as per design */}
      <div className="bg-[#F4F4EC] text-[#041C34] py-3.5 px-4 sm:px-8 border-t-2 border-[#E4BC44] font-bold text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-start rtl:sm:text-end">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E4BC44] shrink-0" />
            <span>
              © {new Date().getFullYear()} {isRtl ? profile.nameAr : profile.nameFr} (Les Horizons Consulting). جميع الحقوق محفوظة.
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <button onClick={onOpenPrivacy} className="hover:underline cursor-pointer">
              {isRtl ? "ميثاق الخصوصية والشروط" : "Confidentialité"}
            </button>
            <span>·</span>
            <button onClick={onOpenAdmin} className="hover:underline text-[#041C34] font-black cursor-pointer">
              {isRtl ? "إدارة المركز" : "Administration"}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
