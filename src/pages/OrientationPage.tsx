import React, { useState } from 'react';
import { CenterProfile, Language } from '../types';
import { AppPage } from '../components/Header';
import {
  Compass,
  User,
  Users,
  CheckCircle2,
  Calendar,
  Clock,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  FileCheck,
  Target,
  Brain,
  MessageCircle,
  Phone,
  HelpCircle,
} from 'lucide-react';

interface OrientationPageProps {
  currentLang: Language;
  profile: CenterProfile;
  onNavigatePage: (page: AppPage) => void;
  onOpenContact: (programId?: string) => void;
}

export const OrientationPage: React.FC<OrientationPageProps> = ({
  currentLang,
  profile,
  onNavigatePage,
  onOpenContact,
}) => {
  const isRtl = currentLang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [bookingStep, setBookingStep] = useState(1);
  const [selectedTrack, setSelectedTrack] = useState<'individual' | 'collective'>('individual');
  const [studentLevel, setStudentLevel] = useState('2bac');
  const [studentName, setStudentName] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !studentPhone) return;
    setBookingSuccess(true);
  };

  const individualSteps = [
    {
      titleAr: "رائز الميول والقدرات المعرفية",
      titleFr: "Test Psychométrique & Bilan d'Aptitudes",
      descAr: "تقييم علمي دقيق لشخصية التلميذ، قدراته التحليلية، ونقاط تميزه الأكاديمي.",
      descFr: "Évaluation objective de la personnalité, des aptitudes cognitives et des centres d'intérêt.",
      icon: Brain,
    },
    {
      titleAr: "جلسة استماع فردية معمقة (1-à-1)",
      titleFr: "Entretien Individuel d'Exploration",
      descAr: "حوار خاص ومثمر مع أخصائي التوجيه لتفكيك الطموحات والتطلعات الحقيقية.",
      descFr: "Échange privilégié avec un psychopédagogue pour clarifier les aspirations du jeune.",
      icon: User,
    },
    {
      titleAr: "خريطة المسارات والمدارس الملائمة",
      titleFr: "Cartographie des Filières Cibles",
      descAr: "تحديد قائمة المدارس والمعاهد والجامعات التي تتناسب تماماً مع مؤهلات التلميذ.",
      descFr: "Identification des formations d'excellence en cohérence avec le profil académique.",
      icon: Target,
    },
    {
      titleAr: "صياغة المشروع الشخصي ومواكبة الترشيحات",
      titleFr: "Plan d'Action & Dépôt des Dossiers",
      descAr: "مساعدة في كتابة رسائل التحفيز وإيداع الترشيحات عبر المنصات الرسمية (توجيهي، منح، دراسة بالخارج).",
      descFr: "Aide à la rédaction des lettres de motivation et sécurisation des candidatures.",
      icon: FileCheck,
    },
  ];

  const collectiveSteps = [
    {
      titleAr: "ورشات منهجية العمل وإدارة الوقت",
      titleFr: "Ateliers Méthodologiques & Gestion du Temps",
      descAr: "تدريب على تقنيات التلخيص، الخرائط الذهنية، وتنظيم فترات المراجعة للبكالوريا.",
      descFr: "Techniques de mémorisation, prise de notes efficace et planning de révision Bac.",
      icon: Clock,
    },
    {
      titleAr: "محاكاة المقابلات الشفوية للقبول",
      titleFr: "Simulations de Grands Oraux",
      descAr: "تدريبات حية أمام لجان تحكيم لاكتساب الثقة بالنفس وإتقان لغة الجسد وفن الإقناع.",
      descFr: "Mises en situation réelles face à un jury pour dompter le trac et convaincre.",
      icon: Users,
    },
    {
      titleAr: "لقاءات حصرية مع خريجي المدارس العليا",
      titleFr: "Rencontres avec des Lauréats & Professionnels",
      descAr: "تبادل الخبرات مع مهندسين، أطباء، وأطر تسيير للإجابة عن تساؤلات الميدان وسوق الشغل.",
      descFr: "Témoignages inspirants d'ingénieurs, médecins et managers issus des meilleures écoles.",
      icon: Sparkles,
    },
    {
      titleAr: "زيارات ميدانية ومنتديات الطالب",
      titleFr: "Visites Universitaires & Forums Étudiants",
      descAr: "مواكبة التلاميذ في المنتديات الكبرى وزيارة المدارس والمعاهد للتعرف على أجوائها عن قرب.",
      descFr: "Immersion dans les campus et participation encadrée aux grands salons d'orientation.",
      icon: Compass,
    },
  ];

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
            <span className="text-white">{isRtl ? "التوجيه والاستشارة" : "Orientation Scolaire"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            {isRtl ? "التوجيه المدرسي وبناء المشروع الشخصي" : "Pôle d'Orientation & Conseil Académique"}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {isRtl
              ? "نساعد التلميذ على اكتشاف قدراته الحقيقية، تجاوز التردد، واختيار الشعبة والمسار الجامعي الأنسب لضمان مستقبل مهني واعد."
              : "Un accompagnement psychopédagogique de pointe pour éclairer vos choix d'études et concrétiser vos ambitions professionnelles."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24 space-y-20">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5 text-start">
            <span className="text-xs font-black text-[#0056B3] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md">
              {isRtl ? "لماذا التوجيه مع آفاق للاستشارات؟" : "NOTRE APPROCHE"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B284C] leading-tight">
              {isRtl
                ? "الاختيار الصائب اليوم يوفر سنوات من الحيرة والتعثر غداً"
                : "Choisir sa voie avec lucidité pour sécuriser sa trajectoire d'avenir"}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {isRtl
                ? "في ظل التغيرات المتسارعة في سوق الشغل وتشعب الشعب والمسالك الدراسية بالمغرب والخارج، يجد الكثير من التلاميذ وأولياء الأمور أنفسهم أمام قرارات مصيرية معقدة. نوفر لكم في مركز آفاق للاستشارات (Les Horizons Consulting) بآسفي إطاراً علمياً ومنهجياً يقودكم للاختيار الصحيح بكل ثقة."
                : "Face à la multiplicité des filières et à l'évolution constante des métiers, s'orienter ne peut être laissé au hasard. Notre pôle d'orientation à Safi vous apporte une boussole claire, alliant rigueur psychométrique et connaissance intime des Grandes Écoles."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{isRtl ? "روائز علمية موجهة ومعتمدة" : "Tests validés par des spécialistes"}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{isRtl ? "جلسات حوارية في سرية تامة" : "Confidentialité et écoute bienveillante"}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{isRtl ? "مواكبة لمسطرة الترشيحات والمنح" : "Suivi rigoureux des plateformes"}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{isRtl ? "إشراك وتطمين أولياء الأمور" : "Dialogue continu avec les parents"}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-5 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#0B284C] text-[#E4BC44] flex items-center justify-center mx-auto shadow-md">
                <Compass className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-black text-xl text-[#0B284C]">
                  {isRtl ? "احجز جلسة استشارة مجانية بآسفي" : "Bilan d'Orientation Offert à Safi"}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {isRtl ? "جلسة استكشافية أولية مع مستشار التوجيه بالمركز" : "Premier entretien exploratoire sans engagement"}
                </p>
              </div>

              {bookingSuccess ? (
                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <p className="font-bold text-sm">
                    {isRtl ? "تم تسجيل طلب موعدكم بنجاح!" : "Votre demande a été enregistrée avec succès !"}
                  </p>
                  <p className="text-xs text-emerald-700">
                    {isRtl
                      ? "سيتصل بكم مستشار التوجيه هاتفياً خلال الساعات القادمة لتأكيد توقيت الجلسة."
                      : "Notre conseiller vous contactera sous peu pour fixer l'horaire de votre rendez-vous."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-3 text-start">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">
                      {isRtl ? "اسم التلميذ / الطالب الكامل" : "Nom complet de l'élève"}
                    </label>
                    <input
                      type="text"
                      required
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder={isRtl ? "مثال: مريم العلمي" : "Ex: Meriem El Alami"}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B284C]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">
                      {isRtl ? "رقم الهاتف / واتساب" : "Numéro de téléphone / WhatsApp"}
                    </label>
                    <input
                      type="tel"
                      required
                      value={studentPhone}
                      onChange={(e) => setStudentPhone(e.target.value)}
                      placeholder="06 XX XX XX XX"
                      dir="ltr"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B284C]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">
                      {isRtl ? "المستوى الدراسي الحالي" : "Niveau scolaire"}
                    </label>
                    <select
                      value={studentLevel}
                      onChange={(e) => setStudentLevel(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B284C]"
                    >
                      <option value="3ac">{isRtl ? "الثالثة إعدادي" : "3ème Année Collège"}</option>
                      <option value="tc">{isRtl ? "الجذع المشترك" : "Tronc Commun"}</option>
                      <option value="1bac">{isRtl ? "الأولى بكالوريا" : "1ère Année Bac"}</option>
                      <option value="2bac">{isRtl ? "الثانية بكالوريا (المترشح للباك)" : "2ème Année Bac"}</option>
                      <option value="sup">{isRtl ? "طالب جامعي / حائز على الباك" : "Étudiant supérieur / Bac+1"}</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#E4BC44] hover:bg-[#d6ad36] text-[#0B284C] font-black text-xs rounded-xl shadow-md transition-all cursor-pointer mt-2"
                  >
                    {isRtl ? "تأكيد طلب موعد الاستشارة مجاناً" : "Confirmer mon rendez-vous gratuit"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Section: The 2 Tracks */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black text-[#0056B3] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md">
              {isRtl ? "مسارات التوجيه بالمركز" : "NOS DEUX PARCOURS"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B284C]">
              {isRtl ? "اختر المسار الملائم لاحتياجاتك" : "Deux formules d'accompagnement sur-mesure"}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Track 1: Individual */}
            <div className="bg-white rounded-3xl p-8 border-2 border-[#0B284C]/15 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0B284C] text-[#E4BC44] flex items-center justify-center">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase text-[#E4BC44] tracking-wider block">
                      {isRtl ? "المسار الأول" : "PARCOURS 1"}
                    </span>
                    <h3 className="font-black text-xl text-[#0B284C]">
                      {isRtl ? "المسار الفردي (Parcours Individuel)" : "Parcours Individuel & Personnalisé"}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {isRtl
                    ? "مواكبة فردية دقيقة (1-to-1) ترتكز على تحليل شخصية التلميذ، كشف مهاراته الكامنة، ومساعدته على رسم مشروعه الشخصي خطوة بخطوة."
                    : "Un suivi en tête-à-tête axé sur l'analyse approfondie du profil de l'élève, la révélation de ses talents et la sécurisation de ses choix."}
                </p>

                <div className="space-y-3 pt-2">
                  {individualSteps.map((step, idx) => {
                    const Icon = step.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="w-8 h-8 rounded-lg bg-white text-[#0B284C] flex items-center justify-center shrink-0 shadow-2xs font-bold text-xs">
                          {idx + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-xs sm:text-sm text-[#0B284C]">
                            {isRtl ? step.titleAr : step.titleFr}
                          </h4>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            {isRtl ? step.descAr : step.descFr}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button
                onClick={() => onOpenContact('orientation_individuel')}
                className="w-full py-3 bg-[#0B284C] hover:bg-[#071d37] text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer mt-4"
              >
                {isRtl ? "حجز المسار الفردي" : "S'inscrire au Parcours Individuel"}
              </button>
            </div>

            {/* Track 2: Collective */}
            <div className="bg-white rounded-3xl p-8 border-2 border-[#0B284C]/15 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#E4BC44] text-[#0B284C] flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase text-[#0B284C] tracking-wider block">
                      {isRtl ? "المسار الثاني" : "PARCOURS 2"}
                    </span>
                    <h3 className="font-black text-xl text-[#0B284C]">
                      {isRtl ? "المسار الجماعي (Parcours Collectif)" : "Parcours Collectif & Ateliers"}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {isRtl
                    ? "ورشات تفاعلية، محاكاة المقابلات الشفوية، ولقاءات حصرية تهدف إلى تعزيز المهارات الحياتية، كسر حاجز الخجل، وبناء شبكة علاقات تحفيزية."
                    : "Ateliers dynamiques en petits groupes, simulations d'entretiens et échanges avec des lauréats pour booster l'éloquence et l'ambition."}
                </p>

                <div className="space-y-3 pt-2">
                  {collectiveSteps.map((step, idx) => {
                    return (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="w-8 h-8 rounded-lg bg-white text-[#E4BC44] flex items-center justify-center shrink-0 shadow-2xs font-bold text-xs">
                          {idx + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-xs sm:text-sm text-[#0B284C]">
                            {isRtl ? step.titleAr : step.titleFr}
                          </h4>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            {isRtl ? step.descAr : step.descFr}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button
                onClick={() => onOpenContact('orientation_collectif')}
                className="w-full py-3 bg-[#E4BC44] hover:bg-[#d6ad36] text-[#0B284C] font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer mt-4"
              >
                {isRtl ? "حجز المسار الجماعي" : "S'inscrire au Parcours Collectif"}
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Banner */}
        <div className="bg-[#0B284C] text-white rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black text-[#E4BC44] uppercase tracking-wider">
              {isRtl ? "شهادات طلابنا بآسفي" : "TÉMOIGNAGES DE NOS LAURÉATS"}
            </span>
            <h3 className="text-2xl font-black">
              {isRtl ? "كيف غيرت استشارة التوجيه مسارهم نحو القمة" : "Ils ont trouvé leur vocation grâce à notre encadrement"}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-200 text-xs sm:text-sm pt-4">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <p className="italic leading-relaxed">
                {isRtl
                  ? "«كنت متردداً بين الأقسام التحضيرية و ENCG، ومن خلال رائز الميول والجلسة الفردية مع مؤطر آفاق، اكتشفت شغفي بالإدارة والمالية وأنا الآن في سنتي الثالثة بـ ENCG بنجاح.»"
                  : "« J'hésitais entre les prépas et l'ENCG. Le bilan d'orientation m'a permis d'aligner mes forces et je m'épanouis aujourd'hui dans mes études de management. »"}
              </p>
              <div className="font-bold text-[#E4BC44]">
                — {isRtl ? "ياسين، طالب سابق بآسفي" : "Yassine, étudiant ENCG"}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <p className="italic leading-relaxed">
                {isRtl
                  ? "«محاكاة المقابلة الشفوية في المسار الجماعي كسرت خوفي تماماً من لجان التحكيم، ودخلت مباراة الهندسة المعمارية ENA وأنا واثقة من إجاباتي ومشروعي.»"
                  : "« Les oraux blancs m'ont donné l'assurance nécessaire pour affronter le jury de l'ENA sans aucun stress. Une préparation déterminante ! »"}
              </p>
              <div className="font-bold text-[#E4BC44]">
                — {isRtl ? "زينب، طالبة مهندسة معمارية" : "Zineb, future architecte ENA"}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <p className="italic leading-relaxed">
                {isRtl
                  ? "«مرافقة ابني في اختيار الشعبة بعد الجذع المشترك ريحتنا كأولياء أمور. احترافية عالية وتواصل مستمر من طرف إدارة المركز.»"
                  : "« Un accompagnement précieux pour notre fille lors de son passage en 1ère Bac. Équipe très professionnelle et rassurante pour les parents. »"}
              </p>
              <div className="font-bold text-[#E4BC44]">
                — {isRtl ? "السيد عبد الرحيم، ولي أمر تلميذ" : "M. Abdelrahim, parent d'élève"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
