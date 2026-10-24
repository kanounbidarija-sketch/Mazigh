import React, { useState } from 'react';
import { CenterProfile, Language, ProgramItem, InquirySubmission } from '../types';
import { AppPage } from '../components/Header';
import { PROGRAMS_DATA } from '../data/defaultData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Sparkles,
  Building,
  ShieldCheck,
} from 'lucide-react';

interface ContactPageProps {
  currentLang: Language;
  profile: CenterProfile;
  preselectedProgramId?: string;
  onNavigatePage: (page: AppPage) => void;
  onSaveInquiry: (inquiry: InquirySubmission) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  currentLang,
  profile,
  preselectedProgramId,
  onNavigatePage,
  onSaveInquiry,
}) => {
  const isRtl = currentLang === 'ar';

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [programId, setProgramId] = useState(preselectedProgramId || 'concours-ena');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const chosenProg = PROGRAMS_DATA.find((p) => p.id === programId);
    const newInquiry: InquirySubmission = {
      id: `inq_${Date.now()}`,
      fullName,
      phone,
      email: email || undefined,
      programId,
      programTitle: chosenProg
        ? isRtl
          ? chosenProg.titleAr
          : chosenProg.titleFr
        : 'Demande générale',
      message,
      submittedAt: new Date().toISOString(),
      status: 'new',
    };

    onSaveInquiry(newInquiry);
    setSubmitted(true);
  };

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
            <span className="text-white">{isRtl ? "اتصل بنا" : "Contact & Inscription"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            {isRtl ? "تواصل معنا والتسجيل بالمركز" : "Contactez-Nous & Inscription"}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {isRtl
              ? "فريق التوجيه والاستقبال بمركز آفاق للاستشارات رهن إشارتكم بمدينة آسفي للإجابة عن استفساراتكم وتسجيلكم في التكوينات والمباريات."
              : "Notre équipe à Safi est disponible pour répondre à vos questions et finaliser votre inscription."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24 space-y-16">
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Address */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0056B3] flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-black text-base text-[#0B284C]">
              {isRtl ? "العنوان والمقر" : "Adresse du Centre"}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isRtl ? profile.addressAr : profile.addressFr}
            </p>
            <span className="text-[11px] font-bold text-slate-400 block pt-1">
              {isRtl ? "قرب مدارة الكليات وحمام حاتم" : "Près du rond-point des Facultés"}
            </span>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-black text-base text-[#0B284C]">
              {isRtl ? "الهاتف المباشر" : "Téléphone Direct"}
            </h3>
            <p className="text-xs font-bold text-slate-800 tabular-nums" dir="ltr">
              {profile.phone}
            </p>
            <a
              href={`tel:${profile.phone.split('/')[0].trim()}`}
              className="text-xs font-bold text-[#0056B3] hover:underline block pt-1"
            >
              {isRtl ? "اتصل بنا الآن ←" : "Appeler maintenant →"}
            </a>
          </div>

          {/* Card 3: WhatsApp */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="font-black text-base text-[#0B284C]">
              {isRtl ? "واتساب السريع" : "WhatsApp Conseil"}
            </h3>
            <p className="text-xs text-slate-600">
              {isRtl ? "استجابة سريعة لجميع استفسارات التسجيل ومواعيد الحصص" : "Réponse rapide pour inscriptions et plannings"}
            </p>
            <a
              href={`https://wa.me/${profile.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
                isRtl
                  ? 'السلام عليكم مركز آفاق للاستشارات، أود الاستفسار والتسجيل في التكوينات.'
                  : 'Bonjour Les Horizons Consulting, je souhaite des informations sur vos formations.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-emerald-600 hover:underline block pt-1"
            >
              {isRtl ? "محادثة فورية على واتساب ←" : "Discuter sur WhatsApp →"}
            </a>
          </div>

          {/* Card 4: Hours */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-black text-base text-[#0B284C]">
              {isRtl ? "أوقات العمل والاستقبال" : "Horaires d'Ouverture"}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isRtl ? profile.openingHoursAr : profile.openingHoursFr}
            </p>
            <span className="text-[11px] font-bold text-emerald-700 block pt-1">
              {isRtl ? "مفتوح طيلة أيام الأسبوع ما عدا الأحد" : "Ouvert du lundi au samedi"}
            </span>
          </div>
        </div>

        {/* Contact Form & Location Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-black text-[#0056B3] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md">
                {isRtl ? "استمارة التسجيل والاستفسار" : "FORMULAIRE D'INSCRIPTION"}
              </span>
              <h2 className="text-2xl font-black text-[#0B284C]">
                {isRtl ? "سجل طلبك أو احجز مقعدك في التكوينات القادمة" : "Inscrivez-vous ou demandez un entretien"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                {isRtl
                  ? "املأ الاستمارة وسيتواصل معك مستشار المركز في أقرب وقت لتأكيد تسجيلك وتزويدك بكافة التفاصيل."
                  : "Remplissez ce formulaire et notre conseiller vous recontactera rapidement."}
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
                <h3 className="font-black text-lg text-emerald-900">
                  {isRtl ? "تم إرسال طلبكم بنجاح!" : "Votre demande a bien été envoyée !"}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-700 max-w-md mx-auto leading-relaxed">
                  {isRtl
                    ? `شكراً لك ${fullName}. سيتصل بك فريق مركز آفاق للاستشارات بآسفي عبر الرقم ${phone} للإجابة عن تساؤلاتك وتأكيد التسجيل.`
                    : `Merci ${fullName}. Notre équipe vous contactera au ${phone} dans les plus brefs délais.`}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFullName('');
                    setPhone('');
                    setMessage('');
                  }}
                  className="px-6 py-2.5 bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs"
                >
                  {isRtl ? "إرسال طلب آخر" : "Envoyer une autre demande"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {isRtl ? "الاسم الكامل *" : "Nom et Prénom *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={isRtl ? "مثال: مريم العلمي" : "Ex: Meriem El Alami"}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B284C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {isRtl ? "رقم الهاتف / واتساب *" : "Téléphone / WhatsApp *"}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="06 XX XX XX XX"
                      dir="ltr"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B284C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {isRtl ? "البريد الإلكتروني (اختياري)" : "Email (optionnel)"}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="exemple@email.com"
                      dir="ltr"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B284C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {isRtl ? "التكوين أو المباراة المطلوبة *" : "Formation / Concours visé *"}
                    </label>
                    <select
                      value={programId}
                      onChange={(e) => setProgramId(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B284C]"
                    >
                      {PROGRAMS_DATA.map((p) => (
                        <option key={p.id} value={p.id}>
                          {isRtl ? p.titleAr : p.titleFr}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isRtl ? "رسالتك أو استفسارك الخاص" : "Votre message / question"}
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      isRtl
                        ? "أود معرفة مواعيد انطلاق الدورة التحضيرية القادمة وكيفية إيداع الملف..."
                        : "Je souhaite connaître les dates de démarrage de la prochaine session..."
                    }
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B284C]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#E4BC44] hover:bg-[#d6ad36] text-[#0B284C] font-black text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isRtl ? "إرسال طلب التسجيل والاستفسار" : "Envoyer ma demande d'inscription"}</span>
                </button>
              </form>
            )}
          </div>

          {/* Location Map Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-black text-lg text-[#0B284C] flex items-center gap-2">
                <Building className="w-5 h-5 text-[#E4BC44]" />
                <span>{isRtl ? "موقع المركز بمدينة آسفي" : "Plan d'accès au centre"}</span>
              </h3>

              {/* Map Mockup */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 h-64 flex flex-col items-center justify-center p-6 text-center space-y-3">
                <MapPin className="w-10 h-10 text-rose-500 animate-bounce" />
                <div>
                  <p className="font-extrabold text-sm text-[#0B284C]">
                    {isRtl ? "مركز آفاق للاستشارات (Les Horizons)" : "Les Horizons Consulting Safi"}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {isRtl ? profile.addressAr : profile.addressFr}
                  </p>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent('Rue Melilla Safi Maroc Les Horizons Consulting')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0B284C] text-white text-xs font-bold rounded-xl shadow-xs hover:bg-[#071d37] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{isRtl ? "فتح في خرائط Google" : "Ouvrir dans Google Maps"}</span>
                </a>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2 text-slate-800 font-bold">
                  <Sparkles className="w-4 h-4 text-[#E4BC44]" />
                  <span>{isRtl ? "معالم قريبة لتسهيل الوصول:" : "Repères à proximité :"}</span>
                </div>
                <ul className="space-y-1 list-disc list-inside text-slate-600 ps-1">
                  <li>{isRtl ? "المدينة الجديدة بآسفي، شارع مليلية" : "Ville Nouvelle de Safi, Rue Melilla"}</li>
                  <li>{isRtl ? "بجوار حمام حاتم الشهير" : "Près du Hammam Hatim"}</li>
                  <li>{isRtl ? "على مقربة من المدارس والكليات" : "À proximité des facultés et lycées"}</li>
                </ul>
              </div>
            </div>

            {/* Direct WhatsApp Box */}
            <div className="bg-[#0B284C] text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
              <span className="text-xs font-black text-[#E4BC44] uppercase tracking-wider block">
                {isRtl ? "تواصل فوري" : "SERVICE RAPIDE"}
              </span>
              <h4 className="font-black text-lg">
                {isRtl ? "هل تفضل التواصل مباشرة عبر تطبيق واتساب؟" : "Vous préférez échanger sur WhatsApp ?"}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isRtl
                  ? "انقر على الزر بالأسفل لبدء محادثة مباشرة مع مستشار التوجيه بالمركز."
                  : "Cliquez ci-dessous pour démarrer une conversation directe avec nos conseillers."}
              </p>
              <a
                href={`https://wa.me/${profile.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
                  isRtl
                    ? 'السلام عليكم مركز آفاق للاستشارات، أود الاستفسار عن التسجيل في التكوينات.'
                    : 'Bonjour Les Horizons Consulting, je souhaite des informations sur vos inscriptions.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#E4BC44] hover:bg-[#d6ad36] text-[#0B284C] font-black text-xs rounded-xl shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#0B284C]" />
                <span>{isRtl ? "محادثة فورية على واتساب" : "Écrire sur WhatsApp"}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
