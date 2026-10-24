import React from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import {
  Compass,
  UserCheck,
  Users2,
  CheckCircle2,
  Lightbulb,
  Target,
  ArrowRight,
  ArrowLeft,
  Calendar,
} from 'lucide-react';

interface OrientationSectionProps {
  currentLang: Language;
  onOpenContact: (programId: string) => void;
}

export const OrientationSection: React.FC<OrientationSectionProps> = ({
  currentLang,
  onOpenContact,
}) => {
  const t = UI_TRANSLATIONS[currentLang];
  const isRtl = currentLang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const individualPoints = [
    {
      step: '01',
      titleFr: "Connaissance de soi",
      titleAr: "استكشاف وفهم الذات",
      descFr: "Identification des motivations profondes, des talents naturels, des valeurs fondamentales et du style d'apprentissage propre à l'élève.",
      descAr: "تحديد الدوافع الشخصية والاهتمامات الحقيقية، والقدرات الذاتية وأسلوب التعلم الأكثر ملاءمة لشخصية التلميذ.",
    },
    {
      step: '02',
      titleFr: "Exploration des métiers et des formations",
      titleAr: "استكشاف المهن والتكوينات",
      descFr: "Cartographie réaliste des secteurs d'avenir, des filières d'études supérieures (universités, CPGE, grandes écoles, instituts techniques) et des réalités professionnelles.",
      descAr: "الاطلاع الدقيق على قطاعات المستقبل، مسالك التعليم العالي (الجامعات، الأقسام التحضيرية، المدارس الوطنية)، ومتطلبات سوق الشغل الواقعية.",
    },
    {
      step: '03',
      titleFr: "Mise en relation intérêts / possibilités de formation",
      titleAr: "التوفيق بين الميول وفرص التكوين",
      descFr: "Confrontation constructive entre les aspirations de l'élève, son profil académique réel et les critères de sélection des établissements.",
      descAr: "المواءمة الإيجابية بين طموحات التلميذ، مستواه الدراسي الحقيقي، ومعايير القبول والانتقاء بمختلف المعاهد.",
    },
    {
      step: '04',
      titleFr: "Aide à la prise de décision éclairée",
      titleAr: "المساعدة على اتخاذ القرار الواعي",
      descFr: "Construction d'un plan d'orientation prioritaire avec solutions alternatives (Plan A, B, C) et calendrier stratégique des candidatures.",
      descAr: "بناء استراتيجية توجيه واضحة مع خطط بديلة (المسار أ، ب، ج) وجدول زمني محكم للترشيحات الرسمية.",
    },
  ];

  const groupPoints = [
    {
      titleFr: "Dépassement des stéréotypes",
      titleAr: "تفكيك الصور النمطية والأحكام المسبقة",
      descFr: "Déconstruire les clichés limitants sur les filières (sciences vs lettres, métiers genrés) pour ouvrir le champ des possibles sans conditionnement social.",
      descAr: "تجاوز الأفكار الشائعة والتمييز التقليدي بين التخصصات والمهن لفتح آفاق أوسع لاختيارات قائمة على الاستحقاق والقناعة.",
    },
    {
      titleFr: "Intelligence collective",
      titleAr: "تفعيل الذكاء الجماعي وتبادل التجارب",
      descFr: "Mettre en commun les interrogations, s'inspirer des parcours d'autres jeunes et enrichir sa réflexion au contact d'un groupe bienveillant.",
      descAr: "الاستفادة من تلاقح الأفكار وتبادل التجارب في بيئة محفزة وآمنة تسهم في نضج التفكير والتخطيط للمستقبل.",
    },
    {
      titleFr: "Développement des compétences transversales (Soft Skills)",
      titleAr: "تطوير المهارات الحياتية والمستعرضة",
      descFr: "Renforcement de l'aisance oratoire, de l'écoute active, de l'argumentation d'un projet personnel et de la gestion du stress lors des entretiens.",
      descAr: "صقل مهارات الخطابة والتحدث أمام الجمهور، قوة الإقناع، الدفاع عن المشروع الشخصي، وتدبير قلق الامتحانات والمقابلات.",
    },
  ];

  return (
    <section id="orientation" className="py-16 bg-[#0C1C3C] border-b border-[#041C34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#041C34] bg-[#E4BC44] px-3.5 py-1.5 rounded-lg shadow-sm">
            <Compass className="w-3.5 h-3.5" />
            <span>
              {isRtl ? "التوجيه التربوي والمشروع الشخصي" : "Pôle Orientation & Projet Personnel"}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F4F4]">
            {isRtl
              ? "مساران متكاملان لمواكبة التلميذ في بناء مستقبله"
              : "Deux Parcours d'Accompagnement pour Éclairer Votre Avenir"}
          </h2>

          <p className="text-sm sm:text-base text-[#F4F4F4]/80 leading-relaxed">
            {isRtl
              ? "التوجيه ليس مجرد اختيار شعبة، بل مسار استكشاف عميق يمكن التلميذ من معرفة إمكاناته، استشراف المهن، واتخاذ قرارات دراسية صائبة."
              : "L'orientation ne se résume pas à cocher une case. C'est un processus structuré pour aligner motivations, réalités académiques et débouchés professionnels."}
          </p>
        </div>

        {/* The Two Dedicated Tracks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* TRACK 1: PROJET PERSONNEL INDIVIDUEL */}
          <div className="bg-[#041C34] border border-[#0C1C3C] hover:border-[#E4BC44] rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#0C1C3C] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0C1C3C] text-[#E4BC44] border border-[#E4BC44]/40 flex items-center justify-center shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#E4BC44]">
                      {isRtl ? "المسار 1: المشروع الشخصي الفردي" : "Parcours 1 : Projet Personnel Individuel"}
                    </h3>
                    <p className="text-xs text-[#F4F4F4]/70">
                      {isRtl ? "مواكبة مشخصة وجلسات استشارية خاصة" : "Entretiens individuels en cabinet d'écoute"}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-bold text-[#041C34] bg-[#E4BC44] px-2.5 py-1 rounded-md">
                  {isRtl ? "تفريد كامل" : "100% Personnalisé"}
                </span>
              </div>

              {/* 4 Pillars of Individual Track */}
              <div className="space-y-4">
                {individualPoints.map((item) => (
                  <div key={item.step} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-md bg-[#E4BC44] text-[#041C34] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 font-mono">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#F4F4F4]">
                        {isRtl ? item.titleAr : item.titleFr}
                      </h4>
                      <p className="text-xs text-[#F4F4F4]/80 mt-0.5 leading-relaxed">
                        {isRtl ? item.descAr : item.descFr}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#0C1C3C] flex items-center justify-between">
              <div className="text-xs text-[#F4F4EC]/70">
                {isRtl ? "جلسات حضورية بموعد مسبق" : "3 à 5 séances avec rapport"}
              </div>
              <button
                onClick={() => onOpenContact('orientation-individuel')}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-[#041C34] bg-[#E4BC44] hover:bg-[#d1ab38] rounded-xl shadow-md transition-colors cursor-pointer"
              >
                <span>{isRtl ? "حجز موعد استشارة فردية" : "Prendre RDV Individuel"}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* TRACK 2: PROJET PERSONNEL EN GROUPE */}
          <div className="bg-[#041C34] border border-[#0C1C3C] hover:border-[#E4BC44] rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#0C1C3C] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0C1C3C] text-[#E4BC44] border border-[#E4BC44]/40 flex items-center justify-center shrink-0">
                    <Users2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#E4BC44]">
                      {isRtl ? "المسار 2: المشروع الشخصي في إطار جماعي" : "Parcours 2 : Projet Personnel en Groupe"}
                    </h3>
                    <p className="text-xs text-[#F4F4F4]/70">
                      {isRtl ? "ورشات تفاعلية ودينامية جماعية" : "Ateliers dynamiques et développement des compétences"}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-bold text-[#041C34] bg-[#E4BC44] px-2.5 py-1 rounded-md">
                  {isRtl ? "ذكاء جماعي" : "Intelligence Collective"}
                </span>
              </div>

              {/* 3 Pillars of Group Track */}
              <div className="space-y-4">
                {groupPoints.map((item, idx) => (
                  <div key={idx} className="p-3.5 bg-[#0C1C3C] border border-[#0C1C3C] rounded-xl space-y-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E4BC44] shrink-0" />
                      <h4 className="text-sm font-bold text-[#F4F4F4]">
                        {isRtl ? item.titleAr : item.titleFr}
                      </h4>
                    </div>
                    <p className="text-xs text-[#F4F4F4]/80 leading-relaxed pl-6 rtl:pl-0 rtl:pr-6">
                      {isRtl ? item.descAr : item.descFr}
                    </p>
                  </div>
                ))}

                {/* Additional Benefit Card */}
                <div className="p-3 bg-[#0C1C3C] border border-[#E4BC44]/40 rounded-xl flex items-center gap-3 text-xs text-[#F4F4F4]">
                  <Lightbulb className="w-4 h-4 text-[#E4BC44] shrink-0" />
                  <span>
                    {isRtl
                      ? "تساعد الورشات الجماعية التلاميذ على تخطي حاجز الخجل، وبناء الثقة في التعبير عن الطموحات الأكاديمية أمام الآخرين."
                      : "Ces ateliers favorisent l'assurance à l'oral, indispensable pour les entretiens de sélection des grandes écoles."}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#0C1C3C] flex items-center justify-between">
              <div className="text-xs text-[#F4F4EC]/70">
                {isRtl ? "أفواج محدودة لضمان المشاركة الفعالة" : "Ateliers de 8 à 12 participants"}
              </div>
              <button
                onClick={() => onOpenContact('orientation-groupe')}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-[#041C34] bg-[#E4BC44] hover:bg-[#d1ab38] rounded-xl shadow-md transition-colors cursor-pointer"
              >
                <span>{isRtl ? "الانضمام للأفواج الجماعية" : "Rejoindre un atelier"}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
