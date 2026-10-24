import React, { useState } from 'react';
import { CenterProfile, Language, InquirySubmission } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import {
  X,
  CheckCircle2,
  AlertCircle,
  Save,
  Download,
  Upload,
  BookOpen,
  Inbox,
  Settings,
  HelpCircle,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Sparkles,
  ExternalLink,
  Trash2,
} from 'lucide-react';

interface AdminDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  profile: CenterProfile;
  inquiries: InquirySubmission[];
  onUpdateProfile: (newProfile: CenterProfile) => void;
  onClearInquiries: () => void;
  onDeleteInquiry: (id: string) => void;
}

export const AdminDrawer: React.FC<AdminDrawerProps> = ({
  isOpen,
  onClose,
  currentLang,
  profile,
  inquiries,
  onUpdateProfile,
  onClearInquiries,
  onDeleteInquiry,
}) => {
  if (!isOpen) return null;

  const t = UI_TRANSLATIONS[currentLang];
  const isRtl = currentLang === 'ar';

  const [activeTab, setActiveTab] = useState<'checklist' | 'profile' | 'inquiries' | 'guide'>('checklist');
  const [formData, setFormData] = useState<CenterProfile>({ ...profile });
  const [saveSuccess, setSaveSuccess] = useState(false);

  const checklistItems = [
    {
      key: 'hasOfficialName' as const,
      labelFr: "Nom commercial officiel (Les Horizons Consulting)",
      labelAr: "الاسم التجاري الرسمي (آفاق للاستشارات / Les Horizons Consulting)",
      descFr: "Vérifier la dénomination officielle et la graphie.",
      descAr: "التأكد من التسمية الرسمية للمؤسسة.",
    },
    {
      key: 'hasLogo' as const,
      labelFr: "Logo officiel et emblème doré",
      labelAr: "الشعار الرسمي والرمز الذهبي للمركز",
      descFr: "Intégration du logo et de l'emblème doré.",
      descAr: "إدراج الشعار الرسمي والرمز الأكاديمي الذهبي.",
    },
    {
      key: 'hasDirectPhone' as const,
      labelFr: "Numéros de téléphone (06 61 90 28 25 / 06 61 63 11 82)",
      labelAr: "أرقام الهاتف المباشرة للمركز بآسفي",
      descFr: "Lignes d'accueil et de renseignements.",
      descAr: "خطوط التواصل والاستقبال المباشرة.",
    },
    {
      key: 'hasPhysicalAddress' as const,
      labelFr: "Adresse physique (Rue Melilla, près de Hammam Hatim, Safi)",
      labelAr: "العنوان الجغرافي (شارع مليلية، قرب حمام حاتم، آسفي)",
      descFr: "Localisation exacte du centre à Safi.",
      descAr: "المقر الدقيق للمركز بمدينة آسفي.",
    },
    {
      key: 'hasOfficialTariffs' as const,
      labelFr: "Grille tarifaire officielle validée par la direction",
      labelAr: "جدول الأسعار الرسمي المعتمد من الإدارة",
      descFr: "Définir les tarifs par formule (annuelle, stages intensifs, cours particuliers).",
      descAr: "تحديد رسوم كل صيغة (اشتراك سنوي، دورات مكثفة، حصص فردية).",
    },
    {
      key: 'hasOfficialDates' as const,
      labelFr: "Calendrier et dates de sessions confirmées",
      labelAr: "الجدول الزمني ومواعيد انطلاق الدورات المؤكدة",
      descFr: "Aligner les dates sur les arrêtés ministériels des concours et examens.",
      descAr: "مطابقة التواريخ مع المذكرات الوزارية المنظمة للمباريات والامتحانات.",
    },
    {
      key: 'hasRealPhotos' as const,
      labelFr: "Photos réelles des locaux et salles de cours à Safi",
      labelAr: "صور حقيقية لفضاءات وقاعات المركز بآسفي",
      descFr: "Prendre des photos nettes des salles, du laboratoire et de l'accueil.",
      descAr: "التقاط صور واضحة للقاعات وفضاء الاستقبال والمكتبة.",
    },
    {
      key: 'hasSocialLinks' as const,
      labelFr: "Liens vers les réseaux sociaux officiels",
      labelAr: "روابط الحسابات الرسمية على شبكات التواصل",
      descFr: "Connecter les pages Facebook, Instagram et LinkedIn officielles du centre.",
      descAr: "ربط صفحات فيسبوك وإنستغرام ولينكد إن المعتمدة للمركز.",
    },
  ];

  const handleToggleChecklist = (key: keyof CenterProfile['checklist']) => {
    const updated = {
      ...formData,
      checklist: {
        ...formData.checklist,
        [key]: !formData.checklist[key],
      },
    };
    setFormData(updated);
    onUpdateProfile(updated);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile(formData);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const exportConfigJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `configuration_les_horizons_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const exportInquiriesJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(inquiries, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `demandes_inscriptions_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const completedCount = Object.values(formData.checklist).filter(Boolean).length;
  const totalCount = checklistItems.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-[#041C34]/80 backdrop-blur-xs">
      <div className="bg-[#041C34] text-[#F4F4F4] w-full max-w-2xl h-full shadow-2xl flex flex-col justify-between overflow-hidden border-l border-[#E4BC44]/40 rtl:border-l-0 rtl:border-r">
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#0C1C3C] bg-[#0C1C3C] flex items-center justify-between gap-4">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E4BC44]" />
              <h2 className="text-base font-bold text-[#E4BC44]">
                {t.adminDrawerTitle}
              </h2>
            </div>
            <p className="text-xs text-[#F4F4F4]/70">
              {isRtl ? "تعديل فوري لبيانات آفاق للاستشارات (Les Horizons Consulting)" : "Gestion en direct des coordonnées & de la checklist"}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#F4F4F4]/70 hover:text-[#E4BC44] hover:bg-[#041C34] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center border-b border-[#0C1C3C] bg-[#0C1C3C]/60 px-4 text-xs font-bold overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('checklist')}
            className={`py-3 px-3.5 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'checklist'
                ? 'border-[#E4BC44] text-[#E4BC44]'
                : 'border-transparent text-[#F4F4F4]/60 hover:text-[#E4BC44]'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{t.adminChecklistTab}</span>
            <span className="text-[10px] bg-[#E4BC44] text-[#041C34] px-1.5 py-0.2 rounded-full font-mono font-black">
              {completedCount}/{totalCount}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`py-3 px-3.5 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'profile'
                ? 'border-[#E4BC44] text-[#E4BC44]'
                : 'border-transparent text-[#F4F4F4]/60 hover:text-[#E4BC44]'
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            <span>{t.adminSettingsTab}</span>
          </button>

          <button
            onClick={() => setActiveTab('inquiries')}
            className={`py-3 px-3.5 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'inquiries'
                ? 'border-[#E4BC44] text-[#E4BC44]'
                : 'border-transparent text-[#F4F4F4]/60 hover:text-[#E4BC44]'
            }`}
          >
            <Inbox className="w-3.5 h-3.5" />
            <span>{t.adminInquiriesTab}</span>
            {inquiries.length > 0 && (
              <span className="text-[10px] bg-[#E4BC44] text-[#041C34] px-1.5 py-0.2 rounded-full font-mono font-black">
                {inquiries.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('guide')}
            className={`py-3 px-3.5 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'guide'
                ? 'border-[#E4BC44] text-[#E4BC44]'
                : 'border-transparent text-[#F4F4F4]/60 hover:text-[#E4BC44]'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.adminGuideTab}</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {/* TAB 1: CHECKLIST */}
          {activeTab === 'checklist' && (
            <div className="space-y-5">
              {/* Progress bar */}
              <div className="p-4 bg-[#0C1C3C] border border-[#E4BC44]/30 rounded-2xl space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-[#F4F4F4]">
                  <span>{isRtl ? "مستوى اكتمال معطيات الإطلاق" : "Niveau de complétion avant mise en ligne"}</span>
                  <span className="font-mono text-[#E4BC44] font-black">{progressPercent}%</span>
                </div>
                <div className="w-full bg-[#041C34] h-2.5 rounded-full overflow-hidden border border-[#0C1C3C]">
                  <div
                    className="bg-[#E4BC44] h-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <p className="text-[11px] text-[#F4F4EC]/80">
                  {isRtl
                    ? "تم استكمال وتثبيت كافة بيانات Les Horizons Consulting المستخرجة من الملصق الرسمي (الاسم، الهاتف، العنوان بآسفي، الشعار)."
                    : "Les données de contact et domaines officiels de Les Horizons Consulting ont été synchronisés."}
                </p>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {checklistItems.map((item) => {
                  const isChecked = formData.checklist[item.key];
                  return (
                    <div
                      key={item.key}
                      onClick={() => handleToggleChecklist(item.key)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                        isChecked
                          ? 'bg-[#0C1C3C] border-[#E4BC44]/50'
                          : 'bg-[#0C1C3C]/40 border-[#0C1C3C] hover:border-[#E4BC44]/30'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="mt-1 w-4 h-4 text-[#E4BC44] rounded border-[#E4BC44] focus:ring-[#E4BC44] cursor-pointer"
                      />
                      <div className="flex-1 space-y-0.5">
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-xs font-bold ${
                              isChecked ? 'text-[#E4BC44]' : 'text-[#F4F4F4]'
                            }`}
                          >
                            {isRtl ? item.labelAr : item.labelFr}
                          </span>
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded font-black ${
                              isChecked
                                ? 'bg-[#E4BC44] text-[#041C34]'
                                : 'bg-[#041C34] text-[#F4F4F4]/60'
                            }`}
                          >
                            {isChecked ? (isRtl ? "مؤكد" : "Confirmé") : (isRtl ? "إجراء" : "À faire")}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#F4F4F4]/70">
                          {isRtl ? item.descAr : item.descFr}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: PROFILE & COORDINATES */}
          {activeTab === 'profile' && (
            <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
              {saveSuccess && (
                <div className="p-3 bg-[#0C1C3C] border-2 border-[#E4BC44] rounded-xl text-[#E4BC44] font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E4BC44]" />
                  <span>{isRtl ? "تم حفظ البيانات بنجاح!" : "Modifications enregistrées avec succès !"}</span>
                </div>
              )}

              {/* Nom du Centre */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-[#E4BC44] block">
                    {isRtl ? "اسم المركز (بالفرنسية) :" : "Nom du centre (FR) :"}
                  </label>
                  <input
                    type="text"
                    value={formData.nameFr}
                    onChange={(e) => setFormData({ ...formData, nameFr: e.target.value })}
                    className="w-full px-3 py-2 bg-[#0C1C3C] border border-[#0C1C3C] focus:border-[#E4BC44] rounded-lg text-[#F4F4F4] focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-[#E4BC44] block">
                    {isRtl ? "اسم المركز (بالعربية) :" : "Nom du centre (AR) :"}
                  </label>
                  <input
                    type="text"
                    value={formData.nameAr}
                    onChange={(e) => setFormData({ ...formData, nameAr: e.target.value })}
                    className="w-full px-3 py-2 bg-[#0C1C3C] border border-[#0C1C3C] focus:border-[#E4BC44] rounded-lg text-[#F4F4F4] font-arabic focus:outline-none"
                  />
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-[#E4BC44] block">
                    {isRtl ? "أرقام الهاتف المباشرة :" : "Téléphones directs :"}
                  </label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-[#0C1C3C] border border-[#0C1C3C] focus:border-[#E4BC44] rounded-lg text-[#F4F4F4] font-mono focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-[#E4BC44] block">
                    {isRtl ? "رقم واتساب الرسمي :" : "Numéro WhatsApp :"}
                  </label>
                  <input
                    type="text"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-3 py-2 bg-[#0C1C3C] border border-[#0C1C3C] focus:border-[#E4BC44] rounded-lg text-[#F4F4F4] font-mono focus:outline-none"
                  />
                </div>
              </div>

              {/* Email & Ville */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-[#E4BC44] block">
                    {isRtl ? "البريد الإلكتروني المعتمد :" : "Email officiel :"}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-[#0C1C3C] border border-[#0C1C3C] focus:border-[#E4BC44] rounded-lg text-[#F4F4F4] font-mono focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-[#E4BC44] block">
                    {isRtl ? "المدينة :" : "Ville :"}
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 bg-[#0C1C3C] border border-[#0C1C3C] focus:border-[#E4BC44] rounded-lg text-[#F4F4F4] focus:outline-none"
                  />
                </div>
              </div>

              {/* Adresse physique */}
              <div className="space-y-1">
                <label className="font-bold text-[#E4BC44] block">
                  {isRtl ? "العنوان الكامل بآسفي (FR) :" : "Adresse complète à Safi (FR) :"}
                </label>
                <input
                  type="text"
                  value={formData.addressFr}
                  onChange={(e) => setFormData({ ...formData, addressFr: e.target.value })}
                  className="w-full px-3 py-2 bg-[#0C1C3C] border border-[#0C1C3C] focus:border-[#E4BC44] rounded-lg text-[#F4F4F4] focus:outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="font-bold text-[#E4BC44] block">
                  {isRtl ? "العنوان الكامل بآسفي (AR) :" : "Adresse complète à Safi (AR) :"}
                </label>
                <input
                  type="text"
                  value={formData.addressAr}
                  onChange={(e) => setFormData({ ...formData, addressAr: e.target.value })}
                  className="w-full px-3 py-2 bg-[#0C1C3C] border border-[#0C1C3C] focus:border-[#E4BC44] rounded-lg text-[#F4F4F4] font-arabic focus:outline-none"
                />
              </div>

              {/* Bouton de sauvegarde */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-xs font-bold text-[#041C34] bg-[#E4BC44] hover:bg-[#d1ab38] rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Save className="w-4 h-4" />
                  <span>{t.adminSaveBtn}</span>
                </button>
              </div>
            </form>
          )}

          {/* TAB 3: INQUIRIES RECEIVED */}
          {activeTab === 'inquiries' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#E4BC44] font-bold">
                  {inquiries.length} {isRtl ? "استمارة مستلمة" : "demande(s) reçue(s)"}
                </span>

                {inquiries.length > 0 && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={exportInquiriesJson}
                      className="px-2.5 py-1 bg-[#0C1C3C] hover:bg-[#E4BC44] hover:text-[#041C34] text-[#E4BC44] text-xs rounded-md transition-colors flex items-center gap-1 font-bold cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{isRtl ? "تصدير" : "Exporter"}</span>
                    </button>
                    <button
                      onClick={onClearInquiries}
                      className="px-2.5 py-1 text-red-400 hover:bg-[#0C1C3C] text-xs rounded-md transition-colors flex items-center gap-1 font-bold cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>{isRtl ? "مسح السجل" : "Vider"}</span>
                    </button>
                  </div>
                )}
              </div>

              {inquiries.length === 0 ? (
                <div className="p-8 text-center border border-dashed border-[#0C1C3C] rounded-2xl text-xs text-[#F4F4F4]/60 space-y-1 bg-[#0C1C3C]/30">
                  <Inbox className="w-8 h-8 text-[#E4BC44] mx-auto" />
                  <p className="font-bold text-[#F4F4F4]">{t.adminNoInquiries}</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {inquiries.map((inq) => (
                    <div
                      key={inq.id}
                      className="p-3.5 bg-[#0C1C3C] border border-[#0C1C3C] rounded-xl space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#E4BC44] text-sm">{inq.fullName}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-[#F4F4F4]/50 font-mono">
                            {new Date(inq.submittedAt).toLocaleString()}
                          </span>
                          <button
                            onClick={() => onDeleteInquiry(inq.id)}
                            className="text-[#F4F4F4]/40 hover:text-red-400 p-0.5 cursor-pointer"
                            title={isRtl ? "حذف" : "Supprimer"}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[#F4F4F4]">
                        <div>
                          <span className="font-bold text-[#E4BC44]">{isRtl ? "الهاتف : " : "Tél : "}</span>
                          <a href={`tel:${inq.phone}`} className="text-[#F4F4F4] font-mono hover:text-[#E4BC44]" dir="ltr">
                            {inq.phone}
                          </a>
                        </div>
                        {inq.email && (
                          <div>
                            <span className="font-bold text-[#E4BC44]">{isRtl ? "البريد الإلكتروني : " : "Email : "}</span>
                            <span className="text-[#F4F4F4] font-mono" dir="ltr">{inq.email}</span>
                          </div>
                        )}
                      </div>

                      <div className="p-2 bg-[#041C34] rounded border border-[#0C1C3C]">
                        <span className="font-bold text-[#E4BC44] block">
                          {isRtl ? "البرنامج المطلوب : " : "Programme : "} {inq.programTitle}
                        </span>
                        {inq.message && (
                          <p className="text-[#F4F4F4]/80 mt-1 italic">"{inq.message}"</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 4: GUIDE */}
          {activeTab === 'guide' && (
            <div className="space-y-4 text-xs text-[#F4F4F4]/80 leading-relaxed">
              <div className="p-4 bg-[#0C1C3C] border border-[#E4BC44]/40 rounded-xl space-y-2">
                <span className="font-bold text-[#E4BC44] block text-sm">
                  {isRtl ? "دليل تحديث البيانات والبرامج" : "Guide de personnalisation du centre"}
                </span>
                <p>
                  {isRtl
                    ? "تم ربط الموقع بالكامل بالبيانات الرسمية لمركز آفاق للاستشارات (Les Horizons Consulting) بآسفي، مع إمكانية تحيين أي عنصر في أي وقت."
                    : "Ce site reflète fidèlement l'identité visuelle et les coordonnées officielles de Les Horizons Consulting à Safi."}
                </p>
              </div>

              <div className="space-y-3">
                <div className="border border-[#0C1C3C] bg-[#0C1C3C]/40 rounded-xl p-3.5 space-y-1">
                  <h4 className="font-bold text-[#E4BC44]">
                    {isRtl ? "1. تعديل بيانات التواصل والمقر" : "1. Modification des coordonnées"}
                  </h4>
                  <p>
                    {isRtl ? (
                      <>
                        من تبويب <strong>"{t.adminSettingsTab}"</strong>، يمكنكم تعديل أرقام الهاتف، رقم واتساب والعنوان، وتُطبق التغييرات فورياً على كامل الموقع.
                      </>
                    ) : (
                      <>
                        Depuis l'onglet <strong>"{t.adminSettingsTab}"</strong>, modifiez le téléphone, le numéro WhatsApp et l'adresse. Les modifications s'appliquent en direct.
                      </>
                    )}
                  </p>
                </div>

                <div className="border border-[#0C1C3C] bg-[#0C1C3C]/40 rounded-xl p-3.5 space-y-1">
                  <h4 className="font-bold text-[#E4BC44]">
                    {isRtl ? "2. الحفظ والتصدير الخارجي" : "2. Sauvegarde & Exportation"}
                  </h4>
                  <p>
                    {isRtl ? (
                      <>
                        اضغطوا على <strong>"{t.adminExportBtn}"</strong> لتحميل ملف الإعدادات بصيغة JSON والاحتفاظ بنسخة احتياطية آمنة.
                      </>
                    ) : (
                      <>
                        Cliquez sur <strong>"Exporter la configuration (JSON)"</strong> pour télécharger le fichier de configuration et le conserver précieusement.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-[#0C1C3C] bg-[#0C1C3C] flex items-center justify-between gap-3 text-xs">
          <button
            onClick={exportConfigJson}
            className="px-3 py-2 text-[#041C34] bg-[#E4BC44] hover:bg-[#d1ab38] rounded-lg flex items-center gap-1.5 transition-colors font-bold cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t.adminExportBtn}</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 font-bold text-[#F4F4F4] hover:text-[#E4BC44] transition-colors cursor-pointer"
          >
            {t.closeModal}
          </button>
        </div>
      </div>
    </div>
  );
};
