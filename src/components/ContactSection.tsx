import React, { useState, useEffect } from 'react';
import { CenterProfile, Language, ProgramItem, InquirySubmission } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import {
  Send,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Lock,
  Share2,
  Facebook,
  Instagram,
  Linkedin,
  AlertCircle,
  Calendar,
  Sparkles,
} from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
  profile: CenterProfile;
  programs: ProgramItem[];
  preselectedProgramId?: string;
  onOpenPrivacy: () => void;
  onOpenAdmin: () => void;
  onSaveInquiry: (inquiry: InquirySubmission) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  profile,
  programs,
  preselectedProgramId,
  onOpenPrivacy,
  onOpenAdmin,
  onSaveInquiry,
}) => {
  const t = UI_TRANSLATIONS[currentLang];
  const isRtl = currentLang === 'ar';

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedProgram, setSelectedProgram] = useState(preselectedProgramId || '');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (preselectedProgramId) {
      setSelectedProgram(preselectedProgramId);
    }
  }, [preselectedProgramId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim()) {
      setErrorMsg(isRtl ? "يرجى إدخال الاسم واللقب." : "Veuillez renseigner votre nom complet.");
      return;
    }

    if (!phone.trim()) {
      setErrorMsg(isRtl ? "يرجى إدخال رقم الهاتف للتواصل." : "Veuillez indiquer un numéro de téléphone valide.");
      return;
    }

    setIsSubmitting(true);

    const programObj = programs.find((p) => p.id === selectedProgram);
    const progTitle = programObj
      ? isRtl ? programObj.titleAr : programObj.titleFr
      : (selectedProgram || (isRtl ? "طلب استشارة عامة" : "Demande générale"));

    const newInquiry: InquirySubmission = {
      id: 'inq-' + Date.now(),
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim() || undefined,
      programId: selectedProgram,
      programTitle: progTitle,
      message: message.trim(),
      submittedAt: new Date().toISOString(),
      status: 'new',
    };

    onSaveInquiry(newInquiry);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowConfirmation(true);
      setFullName('');
      setPhone('');
      setEmail('');
      setMessage('');
      setSelectedProgram('');
    }, 600);
  };

  const whatsappClean = profile.whatsapp.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${whatsappClean}?text=${encodeURIComponent(
    isRtl
      ? `السلام عليكم مركز آفاق للاستشارات (Les Horizons Consulting)، أود الاستفسار والتسجيل في برامجكم.${
          selectedProgram ? ` البرنامج المستهدف: ${selectedProgram}` : ''
        }`
      : `Bonjour Les Horizons Consulting, je souhaite obtenir des informations pour une inscription.${
          selectedProgram ? ` Programme ciblé : ${selectedProgram}` : ''
        }`
  )}`;

  return (
    <section id="contact" className="py-16 bg-[#0C1C3C] border-b border-[#041C34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#041C34] bg-[#E4BC44] px-3.5 py-1.5 rounded-lg shadow-xs">
            <Mail className="w-3.5 h-3.5" />
            <span>{isRtl ? "خدمة المستفيدين والتسجيل" : "Secrétariat & Inscriptions"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F4F4]">
            {t.contactHeading}
          </h2>
          <p className="text-sm sm:text-base text-[#F4F4F4]/80">
            {t.contactSubheading}
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#041C34] border border-[#0C1C3C] rounded-2xl p-6 sm:p-8 shadow-xl space-y-5">
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMsg && (
                <div className="p-3 bg-[#0C1C3C] border border-red-500 rounded-xl text-xs text-red-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Nom complet */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#E4BC44] block">
                  {t.formFullName} <span className="text-[#E4BC44]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={t.formFullNamePlaceholder}
                  className="w-full px-4 py-2.5 text-sm bg-[#0C1C3C] border border-[#0C1C3C] focus:border-[#E4BC44] rounded-xl focus:outline-none transition-all text-[#F4F4F4] placeholder:text-[#F4F4F4]/40"
                />
              </div>

              {/* Téléphone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#E4BC44] block">
                    {t.formPhone} <span className="text-[#E4BC44]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.formPhonePlaceholder}
                    className="w-full px-4 py-2.5 text-sm bg-[#0C1C3C] border border-[#0C1C3C] focus:border-[#E4BC44] rounded-xl focus:outline-none transition-all text-[#F4F4F4] placeholder:text-[#F4F4F4]/40 font-mono"
                    dir="ltr"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#E4BC44] block">
                    {t.formEmail}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.formEmailPlaceholder}
                    className="w-full px-4 py-2.5 text-sm bg-[#0C1C3C] border border-[#0C1C3C] focus:border-[#E4BC44] rounded-xl focus:outline-none transition-all text-[#F4F4F4] placeholder:text-[#F4F4F4]/40"
                    dir="ltr"
                  />
                </div>
              </div>

              {/* Programme souhaité */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#E4BC44] block">
                  {t.formProgramSelect}
                </label>
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm bg-[#0C1C3C] border border-[#0C1C3C] focus:border-[#E4BC44] rounded-xl focus:outline-none transition-all text-[#F4F4F4] cursor-pointer"
                >
                  <option value="" className="bg-[#041C34]">{t.formProgramSelectPlaceholder}</option>
                  <optgroup label={isRtl ? "مباريات الولوج (Concours)" : "Préparation aux Concours d'Accès"} className="bg-[#041C34] text-[#E4BC44]">
                    {programs
                      .filter((p) => p.category === 'concours_acces')
                      .map((p) => (
                        <option key={p.id} value={p.id} className="bg-[#0C1C3C] text-[#F4F4F4]">
                          {isRtl ? p.titleAr : p.titleFr}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label={isRtl ? "اللغات والشهادات الدولية" : "Langues & Certifications"} className="bg-[#041C34] text-[#E4BC44]">
                    {programs
                      .filter((p) => p.category === 'langues_certifs')
                      .map((p) => (
                        <option key={p.id} value={p.id} className="bg-[#0C1C3C] text-[#F4F4F4]">
                          {isRtl ? p.titleAr : p.titleFr}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label={isRtl ? "التكوينات المهنية والتوظيف" : "Formations Professionnelles"} className="bg-[#041C34] text-[#E4BC44]">
                    {programs
                      .filter((p) => p.category === 'formations_pro')
                      .map((p) => (
                        <option key={p.id} value={p.id} className="bg-[#0C1C3C] text-[#F4F4F4]">
                          {isRtl ? p.titleAr : p.titleFr}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label={isRtl ? "الدعم المدرسي (الجهوي والوطني)" : "Soutien Scolaire"} className="bg-[#041C34] text-[#E4BC44]">
                    {programs
                      .filter((p) => p.category === 'soutien_scolaire')
                      .map((p) => (
                        <option key={p.id} value={p.id} className="bg-[#0C1C3C] text-[#F4F4F4]">
                          {isRtl ? p.titleAr : p.titleFr}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label={isRtl ? "التوجيه التربوي والمشروع الشخصي" : "Orientation & Projet Personnel"} className="bg-[#041C34] text-[#E4BC44]">
                    {programs
                      .filter((p) => p.category === 'orientation_scolaire')
                      .map((p) => (
                        <option key={p.id} value={p.id} className="bg-[#0C1C3C] text-[#F4F4F4]">
                          {isRtl ? p.titleAr : p.titleFr}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label={isRtl ? "منتديات الطلبة والزيارات الميدانية" : "Forums Étudiants & Découverte"} className="bg-[#041C34] text-[#E4BC44]">
                    {programs
                      .filter((p) => p.category === 'forums_etudiants')
                      .map((p) => (
                        <option key={p.id} value={p.id} className="bg-[#0C1C3C] text-[#F4F4F4]">
                          {isRtl ? p.titleAr : p.titleFr}
                        </option>
                      ))}
                  </optgroup>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#E4BC44] block">
                  {t.formMessage}
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.formMessagePlaceholder}
                  className="w-full px-4 py-2.5 text-sm bg-[#0C1C3C] border border-[#0C1C3C] focus:border-[#E4BC44] rounded-xl focus:outline-none transition-all text-[#F4F4F4] placeholder:text-[#F4F4F4]/40 resize-none"
                />
              </div>

              {/* Buttons Row */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 px-6 text-sm font-bold text-[#041C34] bg-[#E4BC44] hover:bg-[#d1ab38] disabled:opacity-50 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? t.formSending : t.formSubmitBtn}</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 text-sm font-bold text-[#E4BC44] bg-[#0C1C3C] hover:bg-[#0C1C3C]/80 border border-[#E4BC44] rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#E4BC44]" />
                  <span>{t.ctaWhatsApp}</span>
                </a>
              </div>

              {/* Privacy Notice */}
              <div className="pt-3 border-t border-[#0C1C3C] flex items-start gap-2 text-[11px] text-[#F4F4F4]/60">
                <Lock className="w-3.5 h-3.5 text-[#E4BC44] shrink-0 mt-0.5" />
                <span>
                  {t.privacyNotice}{' '}
                  <button
                    type="button"
                    onClick={onOpenPrivacy}
                    className="text-[#E4BC44] hover:underline font-bold cursor-pointer"
                  >
                    {t.privacyLinkText}
                  </button>
                </span>
              </div>
            </form>
          </div>

          {/* Coordinates Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#041C34] border border-[#0C1C3C] rounded-2xl p-6 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-[#0C1C3C] pb-3">
                <h3 className="font-bold text-base text-[#E4BC44]">
                  {isRtl ? "معلومات الاتصال المباشرة" : "Coordonnées Officielles"}
                </h3>
                <button
                  onClick={onOpenAdmin}
                  className="text-xs text-[#E4BC44] hover:underline font-bold cursor-pointer"
                >
                  {isRtl ? "تعديل البيانات" : "Modifier"}
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#F4F4F4]">
                {/* Téléphone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0C1C3C] border border-[#E4BC44]/30 flex items-center justify-center shrink-0 text-[#E4BC44]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#E4BC44] block text-xs">
                      {isRtl ? "الهاتف المباشر :" : "Téléphone direct :"}
                    </span>
                    <span className="font-mono text-[#F4F4F4] tabular-nums" dir="ltr">
                      {profile.phone}
                    </span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0C1C3C] border border-[#E4BC44]/30 flex items-center justify-center shrink-0 text-[#E4BC44]">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#E4BC44] block text-xs">
                      {isRtl ? "رقم واتساب المعتمد :" : "WhatsApp officiel :"}
                    </span>
                    <span className="font-mono text-[#F4F4F4] tabular-nums" dir="ltr">
                      {profile.whatsapp}
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0C1C3C] border border-[#E4BC44]/30 flex items-center justify-center shrink-0 text-[#E4BC44]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#E4BC44] block text-xs">
                      {isRtl ? "البريد الإلكتروني :" : "Email de contact :"}
                    </span>
                    <span className="text-[#F4F4F4] font-mono" dir="ltr">
                      {profile.email}
                    </span>
                  </div>
                </div>

                {/* Adresse */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0C1C3C] border border-[#E4BC44]/30 flex items-center justify-center shrink-0 text-[#E4BC44]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#E4BC44] block text-xs">
                      {isRtl ? "العنوان ومقر المركز بآسفي :" : "Adresse physique à Safi :"}
                    </span>
                    <span className="text-[#F4F4F4]">
                      {isRtl ? profile.addressAr : profile.addressFr}
                    </span>
                  </div>
                </div>

                {/* Horaires */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0C1C3C] border border-[#E4BC44]/30 flex items-center justify-center shrink-0 text-[#E4BC44]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#E4BC44] block text-xs">
                      {isRtl ? "أوقات العمل والاستقبال :" : "Horaires d'ouverture :"}
                    </span>
                    <span className="text-[#F4F4F4]">
                      {isRtl ? profile.openingHoursAr : profile.openingHoursFr}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-[#0C1C3C] space-y-2">
                <span className="font-bold text-[#E4BC44] block text-xs">
                  {isRtl ? "شبكات التواصل الاجتماعي :" : "Réseaux sociaux :"}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={profile.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-[#0C1C3C] hover:bg-[#E4BC44] text-[#E4BC44] hover:text-[#041C34] rounded-lg transition-all border border-[#0C1C3C]"
                    title="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={profile.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-[#0C1C3C] hover:bg-[#E4BC44] text-[#E4BC44] hover:text-[#041C34] rounded-lg transition-all border border-[#0C1C3C]"
                    title="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-[#0C1C3C] hover:bg-[#E4BC44] text-[#E4BC44] hover:text-[#041C34] rounded-lg transition-all border border-[#0C1C3C]"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick appointment box */}
            <div className="p-4 bg-[#041C34] border border-[#E4BC44]/40 rounded-2xl space-y-2 text-xs text-[#F4F4F4]">
              <div className="flex items-center gap-2 font-bold text-[#E4BC44]">
                <Calendar className="w-4 h-4 text-[#E4BC44]" />
                <span>{isRtl ? "جلسات الاستشارة والتوجيه الشخصي" : "Permanences d'orientation sur rendez-vous"}</span>
              </div>
              <p className="text-[#F4F4F4]/80 leading-relaxed">
                {isRtl
                  ? "لضمان تخصيص الوقت الكافي لتحليل ملف التلميذ وميوله دون انتظار، يُرجى حجز موعد مسبق عبر الاستمارة أو الاتصال المباشر بكتابة المركز."
                  : "Afin de garantir un temps d'écoute dédié pour chaque famille, les entretiens avec nos conseillers pédagogiques se font sur rendez-vous."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#041C34]/80 backdrop-blur-xs">
          <div className="bg-[#0C1C3C] rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl border-2 border-[#E4BC44]">
            <div className="w-12 h-12 rounded-full bg-[#E4BC44] text-[#041C34] flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-lg font-bold text-[#E4BC44]">
                {t.formSuccessTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#F4F4F4] leading-relaxed">
                {t.formSuccessDesc}
              </p>
            </div>

            <button
              onClick={() => setShowConfirmation(false)}
              className="w-full py-2.5 px-4 text-sm font-bold text-[#041C34] bg-[#E4BC44] hover:bg-[#d1ab38] rounded-xl transition-colors cursor-pointer"
            >
              {t.formSuccessClose}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
