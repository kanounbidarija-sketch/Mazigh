import { CenterProfile, ProgramItem, FAQItem } from '../types';

export const INITIAL_CENTER_PROFILE: CenterProfile = {
  nameFr: "Les Horizons Consulting",
  nameAr: "آفاق للاستشارات",
  taglineFr: "Accompagner | Innover | Réussir · Préparation aux Concours d'Accès & Formations",
  taglineAr: "المواكبة | الابتكار | النجاح · التحضير لمباريات الولوج، التكوينات والدعم المدرسي",
  phone: "06 61 90 28 25 / 06 61 63 11 82",
  whatsapp: "+212661902825",
  email: "izoraned82@gmail.com",
  city: "Safi (آسفي)",
  addressFr: "Rue Melilla, Ville nouvelle (près de Hammam Hatim), Safi, Maroc",
  addressAr: "شارع مليلية، المدينة الجديدة (قرب حمام حاتم)، آسفي، المغرب",
  openingHoursFr: "Lundi au Samedi : 08h30 – 19h30 (Permanence et orientation)",
  openingHoursAr: "من الإثنين إلى السبت: 08:30 – 19:30 (الاستقبال والتوجيه)",
  facebookUrl: "https://facebook.com/LesHorizonsConsulting",
  instagramUrl: "https://instagram.com/leshorizonsconsulting",
  linkedinUrl: "https://linkedin.com",
  aboutTextFr: "Les Horizons Consulting est un centre d'excellence dédié à l'accompagnement, l'innovation pédagogique et la réussite des élèves, étudiants et professionnels. Nous préparons avec méthode, expertise et passion les candidats aux grands concours d'accès (ENSA, ENSAM, ENA, ENCG, ISCAE, Médecine générale, Dentaire, Pharmacie, ainsi que les concours du secteur public et privé).",
  aboutTextAr: "مركز آفاق للاستشارات (Les Horizons Consulting) فضاء متميز مكرس للمواكبة، الابتكار البيداغوجي وتحقيق النجاح للتلاميذ والطلبة والمهنيين بمدينة آسفي. نستعد معكم لمستقبلكم بالمنهجية والخبرة والشغف لاجتياز كبرى مباريات الولوج (ENSA، ENSAM، ENA، ENCG، ISCAE، كليات الطب وطب الأسنان والصيدلة، ومباريات القطاعين العام والخاص).",
  teamTextFr: "Encadrement assuré par des experts pédagogiques, universitaires et formateurs chevronnés, offrant des programmes sur mesure, des méthodes efficaces et innovantes, ainsi qu'un suivi régulier et motivant.",
  teamTextAr: "تأطير بيداغوجي رفيع يقوده خبراء وأساتذة جامعيون ومختصون، يقدمون برامج مشخصة ومناهج مبتكرة ومتابعة دورية محفزة تعزز الثقة والتفوق.",
  valuesTextFr: "Accompagner | Innover | Réussir : méthode rigoureuse, expertise pédagogique, écoute active et passion de l'enseignement.",
  valuesTextAr: "المواكبة، الابتكار، والنجاح: منهجية دقيقة، خبرة بيداغوجية عالية، تواصل دائم، وشغف حقيقي بالتميز التعليمي.",
  checklist: {
    hasOfficialName: true,
    hasLogo: true,
    hasDirectPhone: true,
    hasPhysicalAddress: true,
    hasOfficialTariffs: false,
    hasOfficialDates: false,
    hasRealPhotos: false,
    hasSocialLinks: true,
  },
};

export const PROGRAMS_DATA: ProgramItem[] = [
  // --- 1. PRÉPARATION AUX CONCOURS D'ACCÈS ---
  {
    id: 'concours-ena',
    category: 'concours_acces',
    code: 'ENA',
    titleFr: "Préparation au Concours ENA (Architecture)",
    titleAr: "التحضير لمباراة ENA (المدرسة الوطنية للهندسة المعمارية)",
    subtitleFr: "Épreuve d'expression graphique, culture générale architecturale et entretien",
    subtitleAr: "اختبارات التعبير الفني، الثقافة المعمارية، والمقابلة الشفوية",
    targetAudienceFr: "Bacheliers et candidats préparant l'accès aux Écoles Nationales d'Architecture",
    targetAudienceAr: "حاملو شهادة البكالوريا والمرشحون لولوج المدارس الوطنية للهندسة المعمارية",
    subjectsFr: [
      "Expression graphique et dessin d'observation",
      "Perception de l'espace et géométrie",
      "Culture générale & faits d'actualité urbaine",
      "Simulation d'entretien oral et motivation"
    ],
    subjectsAr: [
      "التعبير البياني والرسم الملاحظ",
      "الإدراك الفضائي والهندسي",
      "الثقافة العامة والتحولات المعمارية والحضرية",
      "محاكاة المقابلة الشفوية ومناقشة المشروع الشخصي"
    ],
    methodologyFr: "Ateliers pratiques de dessin, analyses de sujets antérieurs, études de cas et entraînement en conditions réelles.",
    methodologyAr: "ورشات تطبيقية في الرسم، تحليل مواضيع السنوات السابقة، دراسات حالات، وتدريبات في ظروف مماثلة للامتحان.",
    durationFr: "Sessions intensives & cycles continus (durée communiquée lors du contact)",
    durationAr: "دورات مكثفة وبرامج مستمرة (تُحدد المدة بالتفصيل عند التواصل مع المركز)",
    formatFr: "Présentiel en atelier avec encadrement individuel",
    formatAr: "حضوري بورشات المركز مع تأطير فردي",
    registrationStatusFr: "Inscriptions ouvertes sur dossier (calendrier officiel à confirmer)",
    registrationStatusAr: "التسجيل مفتوح بناءً على دراسة الملف (المواعيد الرسمية تُؤكد من الإدارة)",
    disclaimerFr: "Les conditions officielles d'accès et les seuils de présélection sont fixés par l'administration des ENA.",
    disclaimerAr: "الشروط الرسمية وعتبات الانتقاء تحددها إدارة المدارس الوطنية للهندسة المعمارية والوزارة الوصية."
  },
  {
    id: 'concours-encg',
    category: 'concours_acces',
    code: 'ENCG',
    titleFr: "Préparation au Concours ENCG (TAFEM)",
    titleAr: "التحضير لمباراة ENCG (اختبار TAFEM)",
    subtitleFr: "Commerce, Gestion, Mathématiques appliquées et Logique",
    subtitleAr: "التجارة والتسيير، الرياضيات التطبيقية، والاستدلال المنطقي",
    targetAudienceFr: "Bacheliers scientifiques, économiques et techniques visant les ENCG",
    targetAudienceAr: "تلاميذ البكالوريا في الشعب العلمية والاقتصادية والتقنية الراغبون في ولوج شبكة ENCG",
    subjectsFr: [
      "Mémorisation et logique",
      "Raisonnement mathématique",
      "Culture générale économique",
      "Français & compréhension de texte"
    ],
    subjectsAr: [
      "الذاكرة واختبارات الذكاء المنطقي",
      "الاستدلال الرياضي والعددي",
      "الثقافة العامة والمستجدات الاقتصادية",
      "اللغة الفرنسية والفهم الاستيعابي"
    ],
    methodologyFr: "Batteries de tests psychotechniques, QCM chronométrés TAFEM, et révision méthodique des notions clés.",
    methodologyAr: "تمارين مكثفة في الاختبارات النفسية التقنية، أسئلة متعددة الخيارات موقوتة، ومراجعة ممنهجة للمفاهيم الأساسية.",
    durationFr: "Cycles préparatoires printaniers et stages bloqués",
    durationAr: "دورات ربيعية تأهيلية وتدريبات مكثفة مغلقة",
    formatFr: "Séances interactives & plateformes d'entraînement QCM",
    formatAr: "حصص تفاعلية ومنصة تدريب على اختبارات السرعة والدقة",
    registrationStatusFr: "Ouvert – Détails communiqués après prise de contact",
    registrationStatusAr: "مفتوح – التفاصيل الدقيقة تُعلن بعد التواصل المباشر مع المركز",
    disclaimerFr: "L'admission finale dépend des résultats officiels au test d'accès TAFEM.",
    disclaimerAr: "القبول النهائي يرتبط حصراً بالنتائج الرسمية المحققة في اختبار TAFEM الوطني."
  },
  {
    id: 'concours-medecine',
    category: 'concours_acces',
    code: 'Médecine',
    titleFr: "Préparation aux Concours de Médecine & Médecine Dentaire",
    titleAr: "التحضير لمباراة كليات الطب وطب الأسنان",
    subtitleFr: "Mathématiques, Physique, Chimie et Sciences de la Vie et de la Terre",
    subtitleAr: "الرياضيات، الفيزياء، الكيمياء، وعلوم الحياة والأرض",
    targetAudienceFr: "Bacheliers des branches scientifiques (Sciences Maths, Sciences Physiques, SVT)",
    targetAudienceAr: "حاملو بكالوريا الشعب العلمية (علوم رياضية، علوم فيزيائية، علوم الحياة والأرض)",
    subjectsFr: [
      "Sciences de la Vie et de la Terre (Génétique, immunologie, reproduction)",
      "Chimie (Chimie organique, cinétique, équilibres)",
      "Physique (Mécanique, ondes, électricité, nucléaire)",
      "Mathématiques (Probabilités, analyse, suites)"
    ],
    subjectsAr: [
      "علوم الحياة والأرض (علم الوراثة، المناعة، التوالد والتعبير الجيني)",
      "الكيمياء (الكيمياء العضوية، الحركية والتوازنات الكيميائية)",
      "الفيزياء (الميكانيك، الموجات، الكهرباء والتحولات النووية)",
      "الرياضيات (الاحتمالات، الدوال والتحليل، المتتاليات)"
    ],
    methodologyFr: "Résolution méthodique de QCM types concours nationaux, synthèse des pièges fréquents et gestion du temps.",
    methodologyAr: "حل ممنهج لأسئلة الاختيار من متعدد وفق المعايير الوطنية، تفكيك الفخاخ المألوفة، والتحكم الصارم في زمن الإجابة.",
    durationFr: "Programme régulier annuel & stages intensifs post-bac",
    durationAr: "برنامج تدريبي سنوي منتظم ودورات مكثفة مباشرة بعد امتحانات البكالوريا",
    formatFr: "Présentiel avec polycopiés et concours blancs hebdomadaires",
    formatAr: "حضوري مع مطبوعات ملخصة وامتحانات تجريبية بيضاء أسبوعية",
    registrationStatusFr: "Pré-inscriptions en cours auprès du secrétariat",
    registrationStatusAr: "التسجيل المسبق مفتوح عبر كتابة المركز",
    disclaimerFr: "Les seuils de présélection sont fixés chaque année par le Ministère de l'Enseignement Supérieur.",
    disclaimerAr: "عتبات الانتقاء تحددها سنوياً وزارة التعليم العالي والبحث العلمي والابتكار."
  },
  {
    id: 'concours-pharmacie',
    category: 'concours_acces',
    code: 'Pharmacie',
    titleFr: "Préparation au Concours de Pharmacie",
    titleAr: "التحضير لمباراة كليات الصيدلة",
    subtitleFr: "Biologie cellulaire, chimie générale et organique, physique et mathématiques",
    subtitleAr: "البيولوجيا الخلوية، الكيمياء العامة والعضوية، الفيزياء والرياضيات",
    targetAudienceFr: "Candidats scientifiques préparant le concours commun des facultés de pharmacie",
    targetAudienceAr: "المترشحون العلميون لاجتياز المباراة المشتركة لولوج كليات الصيدلة",
    subjectsFr: [
      "Chimie organique et minérale",
      "Biologie humaine et végétale",
      "Physique appliquée aux sciences de la santé",
      "Mathématiques et statistiques descriptives"
    ],
    subjectsAr: [
      "الكيمياء العضوية والمعدنية",
      "البيولوجيا العامة وعلم وظائف الأعضاء",
      "الفيزياء الموجهة لعلوم الصحة",
      "الرياضيات والإحصاء الوصفي"
    ],
    methodologyFr: "Approfondissement conceptuel, entraînements intensifs sur épreuves antérieures et bilans réguliers.",
    methodologyAr: "ترسيخ المفاهيم العلمية التخصصية، تدريبات مكثفة على نماذج المباريات الوطنية، وتقييمات دورية فردية.",
    durationFr: "Cycles condensés et modules thématiques",
    durationAr: "دورات مكثفة ومصوغات موضوعاتية مركزة",
    formatFr: "Séances encadrées en petits groupes",
    formatAr: "مجموعات محدودة العدد لضمان التأطير والمتابعة الفردية",
    registrationStatusFr: "Dates et organisation à confirmer par la direction",
    registrationStatusAr: "التواريخ والتنظيم النهائي يُؤكدان من إدارة المركز",
    disclaimerFr: "Le centre ne se substitue pas aux institutions officielles d'admission.",
    disclaimerAr: "المركز يضمن جودة التكوين ولا يمثل جهة التعيين أو القبول الجامعي."
  },
  {
    id: 'concours-ensa',
    category: 'concours_acces',
    code: 'ENSA',
    titleFr: "Préparation au Concours ENSA (Réseau des Écoles d'Ingénieurs)",
    titleAr: "التحضير لمباراة ENSA (المدارس الوطنية للعلوم التطبيقية)",
    subtitleFr: "Sciences pour l'Ingénieur, Mathématiques avancées et Physique",
    subtitleAr: "علوم المهندس، الرياضيات المتقدمة، والفيزياء",
    targetAudienceFr: "Bacheliers scientifiques et techniques visant les formations d'ingénieurs ENSA",
    targetAudienceAr: "تلاميذ البكالوريا العلمية والتقنية الراغبون في مسالك تكوين المهندسين",
    subjectsFr: [
      "Mathématiques (Algèbre linéaire, calcul différentiel, géométrie)",
      "Physique (Mécanique du point, électrostatique, thermodynamique de base)",
      "Logique et raisonnement d'ingénierie"
    ],
    subjectsAr: [
      "الرياضيات (الجبر، الحساب التفاضلي والتكاملي، الهندسة التحليلية)",
      "الفيزياء (الميكانيك، الكهرباء الساكنة والديناميكية، مبادئ الديناميكا الحرارية)",
      "المنطق العلمي والتفكير الهندسي"
    ],
    methodologyFr: "Diagnostic initial, fiches d'automatismes de calcul, entraînements chronométrés et correction détaillée.",
    methodologyAr: "تشخيص قبلي لمستوى المترشح، بطاقات تدريب على سرعة الحساب الذهني، وتصحيح تفاعلي مدقق.",
    durationFr: "Sessions ciblées précédant les dates nationales du concours",
    durationAr: "دورات موجهة تنطلق قبل المواعيد الرسمية للمباراة الوطنية",
    formatFr: "Cours et travaux dirigés en présentiel",
    formatAr: "دروس وأعمال تطبيقية حضورية",
    registrationStatusFr: "Consultez le centre pour le planning officiel",
    registrationStatusAr: "يُرجى التواصل مع كتابة المركز للاطلاع على البرنامج الزمني",
    disclaimerFr: "Les épreuves et seuils sont régis par le concours national commun d'accès aux ENSA.",
    disclaimerAr: "تخضع الاختبارات والعتبات للشروط الصادرة عن وزارة التعليم العالي."
  },
  {
    id: 'concours-ensam',
    category: 'concours_acces',
    code: 'ENSAM',
    titleFr: "Préparation au Concours ENSAM (Arts et Métiers)",
    titleAr: "التحضير لمباراة ENSAM (المدرسة الوطنية العليا للفنون والمهن)",
    subtitleFr: "Excellence en Mathématiques, Physique et Sciences Industrielles",
    subtitleAr: "التميز في الرياضيات، الفيزياء، والعلوم الصناعية والتقنية",
    targetAudienceFr: "Candidats aux métiers d'ingénieurs des systèmes industriels et mécaniques",
    targetAudienceAr: "المترشحون لمسالك الهندسة الصناعية والميكانيكية والأنظمة الذكية",
    subjectsFr: [
      "Mathématiques approfondies",
      "Physique fondamentale et appliquée",
      "Logique spatiale et dessin technique élémentaire"
    ],
    subjectsAr: [
      "الرياضيات المعمقة والدوال المركبة",
      "الفيزياء الأساسية والتطبيقية",
      "المنطق الفضائي ومبادئ الرسم التقني"
    ],
    methodologyFr: "Rigueur démonstrative, maîtrise des questions complexes et simulations d'épreuves.",
    methodologyAr: "التدريب على البرهان الرياضي الدقيق، التحكم في المسائل المركبة، والمحاكاة الميدانية.",
    durationFr: "Modules d'approfondissement et sessions intensives",
    durationAr: "مصوغات دعم معمقة ودورات مغلقة قبيل المباراة",
    formatFr: "Présentiel interactif",
    formatAr: "تأطير حضوري تفاعلي مباشر",
    registrationStatusFr: "Places limitées – Détails auprès du centre",
    registrationStatusAr: "المقاعد محدودة – التفاصيل لدى كتابة المركز",
    disclaimerFr: "Sous réserve des conditions d'éligibilité définies par l'ENSAM.",
    disclaimerAr: "تخضع المشاركة لشروط الأهلية الصادرة رسمياً عن إدارة ENSAM."
  },
  {
    id: 'concours-iscae',
    category: 'concours_acces',
    code: 'ISCAE',
    titleFr: "Préparation au Concours ISCAE (Grande École de Management)",
    titleAr: "التحضير لمباراة ISCAE (المعهد العالي للتجارة وإدارة المقاولات)",
    subtitleFr: "Épreuves écrites de mathématiques, culture générale, synthèse et oraux",
    subtitleAr: "الاختبارات الكتابية في الرياضيات، الثقافة العامة، دراسة النصوص، والشفوي",
    targetAudienceFr: "Bacheliers et étudiants préparant l'accès aux cycles de management et commerce",
    targetAudienceAr: "حاملو البكالوريا والطلبة الراغبون في ولوج مسالك التسيير والتدبير المقاولاتي",
    subjectsFr: [
      "Mathématiques appliquées à l'économie",
      "Culture générale et enjeux contemporains",
      "Épreuve d'anglais des affaires & compréhension",
      "Techniques d'expression française et synthèse",
      "Préparation à l'épreuve orale et jury d'admission"
    ],
    subjectsAr: [
      "الرياضيات التطبيقية في الاقتصاد",
      "الثقافة العامة والرهانات المعاصرة",
      "اختبار اللغة الإنجليزية للأعمال والفهم",
      "تقنيات التعبير والتلخيص باللغة الفرنسية",
      "الإعداد المنهجي لاختبارات المقابلة واللجان الشفوية"
    ],
    methodologyFr: "Développement de l'esprit critique, méthodologie de la note de synthèse et entraînements intensifs aux simulations orales.",
    methodologyAr: "تنمية الحس النقدي، منهجية التلخيص والتحليل، وتدريبات فردية مكثفة على المقابلات الشفوية.",
    durationFr: "Programme semestriel structuré",
    durationAr: "برنامج تدريبي منظم على امتداد السداسي",
    formatFr: "Présentiel et ateliers d'éloquence",
    formatAr: "حصص حضورية وورشات في الخطابة والتواصل",
    registrationStatusFr: "Informations et calendrier sur demande",
    registrationStatusAr: "المعلومات والمواعيد متوفرة بطلب من المعنيين",
    disclaimerFr: "L'inscription finale à l'ISCAE relève de la procédure nationale officielle.",
    disclaimerAr: "التسجيل النهائي بمعهد ISCAE يخضع للمسطرة الرسمية الصادرة عن المعهد."
  },

  // --- 2. APPRENTISSAGE DES LANGUES ET CERTIFICATIONS ---
  {
    id: 'langue-francais',
    category: 'langues_certifs',
    titleFr: "Apprentissage du Français & Préparation TCF",
    titleAr: "تعلم اللغة الفرنسية والإعداد لاختبار TCF",
    subtitleFr: "Du niveau A1 au C2 selon le CECRL · Français général et académique",
    subtitleAr: "من المستوى A1 إلى C2 وفق الإطار الأوروبي المشترك (CECRL)",
    targetAudienceFr: "Élèves, étudiants préparant des études supérieures et adultes professionnels",
    targetAudienceAr: "التلاميذ، الطلبة المقبلون على الدراسات العليا، والمهنيون",
    subjectsFr: [
      "Expression orale et fluidité conversationnelle",
      "Compréhension écrite et écoute active",
      "Grammaire, syntaxe et vocabulaire enrichi",
      "Entraînement spécifique aux épreuves TCF (Tout Public & Québec/DAP)"
    ],
    subjectsAr: [
      "التعبير الشفوي وطلاقة الحوار والتواصل",
      "الفهم الكتابي والاستماع التفاعلي",
      "قواعد النحو والتركيب والرصيد اللغوي المتخصص",
      "تدريب خاص على اختبارات TCF بمختلف أصنافها"
    ],
    methodologyFr: "Approche communicative actionnelle, simulations d'examens et bilans périodiques.",
    methodologyAr: "مقاربة تواصلية تفاعلية، محاكاة للاختبارات الدولية، وتقييمات دورية للمستوى.",
    durationFr: "Modules de 30h à 60h par niveau (à confirmer par la direction)",
    durationAr: "مصوغات من 30 إلى 60 ساعة لكل مستوى (تؤكدها الإدارة)",
    formatFr: "Cours en groupe restreint ou cours particuliers",
    formatAr: "دروس في مجموعات صغيرة أو حصص فردية خاصة",
    registrationStatusFr: "Test de positionnement préalable requis",
    registrationStatusAr: "يُجرى اختبار تشخيصي قبلي لتحديد المستوى",
    disclaimerFr: "Les niveaux, durées et sessions d'examen doivent être confirmés par la direction avant publication.",
    disclaimerAr: "المستويات والمدد وجلسات الاختبار يتم تأكيدها رسمياً من إدارة المركز قبل النشر."
  },
  {
    id: 'langue-anglais',
    category: 'langues_certifs',
    titleFr: "Apprentissage de l'Anglais, TOEFL & IELTS",
    titleAr: "تعلم اللغة الإنجليزية والإعداد لـ TOEFL و IELTS",
    subtitleFr: "Anglais général, académique et professionnel · Préparation certifiante",
    subtitleAr: "الإنجليزية العامة، الأكاديمية والمهنية · تحضير للاختبارات الدولية",
    targetAudienceFr: "Candidats aux études à l'étranger, lycéens et cadres d'entreprise",
    targetAudienceAr: "الراغبون في متابعة الدراسة بالخارج، تلاميذ الثانوي، وأطر المقاولات",
    subjectsFr: [
      "Speaking & Pronunciation workshop",
      "Academic Reading & Listening strategies",
      "Academic Writing Task 1 & Task 2",
      "Simulations chronométrées TOEFL iBT / IELTS Academic"
    ],
    subjectsAr: [
      "ورشات النطق والمحادثة التفاعلية",
      "استراتيجيات الاستماع والفهم الأكاديمي السريع",
      "تقنيات التعبير الكتابي الأكاديمي المتخصص",
      "نماذج محاكاة موقوتة لاختبارات TOEFL iBT و IELTS Academic"
    ],
    methodologyFr: "Pratique immersive, analyse des grilles d'évaluation officielles et feedback individualisé.",
    methodologyAr: "ممارسة لغوية مكثفة، دراسة معايير التنقيط الرسمية، وملاحظات فردية لتطوير الأداء.",
    durationFr: "Formules intensives et cours du soir modulaires",
    durationAr: "صيغ مكثفة وحصص مسائية مرنة",
    formatFr: "Présentiel équipé de matériel audio interactif",
    formatAr: "حضوري بقاعات مجهزة بأحدث الوسائل الصوتية والتفاعلية",
    registrationStatusFr: "Inscriptions ouvertes selon le planning de session",
    registrationStatusAr: "التسجيل مفتوح وفق المخطط الزمني المعتمد لكل دورة",
    disclaimerFr: "Les centres d'examen officiels sont les seuls habilités à délivrer les scores finaux.",
    disclaimerAr: "مراكز الاختبار المعتمدة دولياً هي الجهات الوحيدة المخولة لمنح الشواهد والنتائج الرسمية."
  },
  {
    id: 'langue-espagnol',
    category: 'langues_certifs',
    titleFr: "Apprentissage de l'Espagnol",
    titleAr: "تعلم اللغة الإسبانية",
    subtitleFr: "Niveaux débutant (A1-A2) à intermédiaire supérieur (B1-B2)",
    subtitleAr: "من مستوى المبتدئين (A1-A2) إلى المستوى المتوسط والمتقدم (B1-B2)",
    targetAudienceFr: "Étudiants, professionnels en relation avec l'Espagne et passionnés de langues",
    targetAudienceAr: "الطلبة، المهنيون المرتبطون بقطاعات التبادل الاقتصادي، وهواة تعلم اللغات",
    subjectsFr: [
      "Vocabulaire courant et expressions idiomatiques",
      "Bases grammaticales et conjugaison espagnole",
      "Pratique orale et situations concrètes du quotidien",
      "Introduction à la préparation du DELE (sur demande)"
    ],
    subjectsAr: [
      "الرصيد المعجمي اليومي والعبارات الاصطلاحية",
      "قواعد الصرف والتحويل والتراكيب الإسبانية",
      "التواصل الشفوي في المواقف اليومية والمهنية",
      "مدخل تمهيدي لاختبارات DELE الرسمية (عند الطلب)"
    ],
    methodologyFr: "Méthode interactive favorisant la prise de parole spontanée et l'autonomie.",
    methodologyAr: "طريقة تفاعلية تشجع على الحديث التلقائي واكتساب الاستقلالية اللغوية.",
    durationFr: "Sessions trimestrielles adaptées aux disponibilités",
    durationAr: "دورات ثلاثية شهرية ملائمة لأوقات المستفيدين",
    formatFr: "Petits groupes dynamiques",
    formatAr: "مجموعات مصغرة وورشات تفاعلية",
    registrationStatusFr: "Consultez le secrétariat pour le calendrier des sessions",
    registrationStatusAr: "يُرجى مراجعة إدارة المركز للاطلاع على جدول الدورات",
    disclaimerFr: "Détails et niveaux à confirmer par la direction.",
    disclaimerAr: "تخضع المستويات وتفاصيل البرنامج لمصادقة الإدارة."
  },
  {
    id: 'langue-allemand',
    category: 'langues_certifs',
    titleFr: "Apprentissage de l'Allemand",
    titleAr: "تعلم اللغة الألمانية",
    subtitleFr: "Préparation pour projets d'études et opportunités en Allemagne",
    subtitleAr: "تأهيل لمشاريع الدراسة والآفاق الأكاديمية والمهنية في ألمانيا",
    targetAudienceFr: "Étudiants visant les universités allemandes, techniciens et professionnels",
    targetAudienceAr: "الطلبة الراغبون في متابعة دراستهم بالجامعات الألمانية والتقنيون والمهنيون",
    subjectsFr: [
      "Structures fondamentales de la langue allemande",
      "Phonétique et prononciation correcte",
      "Compétences de communication quotidienne et administrative",
      "Initiation aux formats d'examens (Goethe-Zertifikat / ÖSD)"
    ],
    subjectsAr: [
      "التراكيب والقواعد الأساسية للغة الألمانية",
      "الصوتيات وضبط النطق السليم",
      "مهارات التواصل اليومي والتعامل الإداري",
      "التعريف بنماذج اختبارات Goethe-Zertifikat و ÖSD"
    ],
    methodologyFr: "Progression structurée et rigoureuse appuyée sur des manuels pédagogiques reconnus.",
    methodologyAr: "تدرج منهجي دقيق يعتمد على مراجع بيداغوجية حديثة ومعتمدة.",
    durationFr: "Modules modulables selon le niveau initial",
    durationAr: "مصوغات مرنة تُحدد بناءً على المستوى الأولي للمتعلم",
    formatFr: "Cours intensifs et semi-intensifs",
    formatAr: "دروس مكثفة وشبه مكثفة حضورية",
    registrationStatusFr: "Sessions ouvertes sous réserve du nombre de participants",
    registrationStatusAr: "انطلاق الأفواج يرتبط باكتمال النصاب المحدد لكل مجموعة",
    disclaimerFr: "Les niveaux et certifications préparés sont confirmés auprès de la direction.",
    disclaimerAr: "يتم تحديد المستويات والشهادات المستهدفة بتنسيق مباشر مع إدارة المركز."
  },
  {
    id: 'langue-tamazight',
    category: 'langues_certifs',
    titleFr: "Apprentissage de la Langue Tamazight",
    titleAr: "تعلم اللغة الأمازيغية",
    subtitleFr: "Graphie Tifinagh, grammaire, enrichissement lexical et patrimoine linguistique",
    subtitleAr: "حرف تيفيناغ، القواعد التركيبية، الإثراء المعجمي، والموروث اللغوي",
    targetAudienceFr: "Enseignants, éducateurs, étudiants et passionnés du patrimoine national",
    targetAudienceAr: "الأساتذة والمربون والطلبة وعموم الراغبين في إتقان اللغة الأمازيغية الوطنية",
    subjectsFr: [
      "Apprentissage de l'alphabet Tifinagh et règles d'écriture",
      "Phonologie, morphosyntaxe et conjugaison amazighe",
      "Vocabulaire usuel et terminologie standardisée",
      "Ateliers de lecture et de production de textes simples"
    ],
    subjectsAr: [
      "تعلم أبجدية تيفيناغ وضوابط الكتابة السليمة",
      "الصوتيات، التراكيب الصرفية وقواعد الفعل الأمازيغي",
      "المعجم الوظيفي والمصطلحات المعيارية المعتمدة",
      "ورشات القراءة وتأليف النصوص البسيطة والمحادثة"
    ],
    methodologyFr: "Pédagogie active valorisant la pratique orale, la découverte culturelle et les exercices d'écriture.",
    methodologyAr: "بيداغوجيا نشطة تعتمد الممارسة الشفوية، الاستكشاف الثقافي، وتمارين الكتابة.",
    durationFr: "Cycles d'initiation et de perfectionnement",
    durationAr: "دورات تأسيسية ومستويات متقدمة للمهتمين",
    formatFr: "Ateliers hebdomadaires en présentiel",
    formatAr: "ورشات أسبوعية تفاعلية بمقر المركز",
    registrationStatusFr: "Ouvert – Renseignements auprès du secrétariat",
    registrationStatusAr: "مفتوح – تفاصيل التسجيل متوفرة لدى كتابة المركز",
    disclaimerFr: "Programme établi en conformité avec les orientations pédagogiques nationales.",
    disclaimerAr: "يُراعى في بناء البرنامج التوجيهات البيداغوجية الوطنية المعتمدة."
  },
  {
    id: 'certif-sat-toeic',
    category: 'langues_certifs',
    titleFr: "Préparation aux Tests SAT & TOEIC",
    titleAr: "التحضير لاختباري SAT و TOEIC",
    subtitleFr: "Tests standardisés pour admissions universitaires et mobilités professionnelles",
    subtitleAr: "اختبارات موحدة للقبول الجامعي والدراسات الدولية والحركية المهنية",
    targetAudienceFr: "Élèves de lycée préparant le SAT et professionnels préparant le TOEIC",
    targetAudienceAr: "تلاميذ الثانوي المستعدون لاختبار SAT والمهنيون لاختبار TOEIC الدولي",
    subjectsFr: [
      "SAT Reading and Writing : Analyse textuelle et rhétorique",
      "SAT Math : Algèbre avancée, géométrie et analyse de données",
      "TOEIC Listening & Reading : Anglais des affaires et contextes professionnels",
      "Stratégies de rapidité, gestion du stress et concours blancs"
    ],
    subjectsAr: [
      "SAT للقراءة والكتابة: التحليل النصي والأساليب البلاغية",
      "SAT للرياضيات: الجبر المتقدم، الهندسة وتحليل المعطيات",
      "TOEIC للاستماع والقراءة: الإنجليزية في بيئة الأعمال والشركات",
      "استراتيجيات إدارة الوقت والتعامل الإيجابي مع ضغط الاختبار"
    ],
    methodologyFr: "Pratique intensive sur banques d'items récents et débriefing personnalisé de chaque test blanc.",
    methodologyAr: "تدريب مكثف على نماذج حديثة وتحليل دقيق لنتائج الامتحانات البيضاء لتصحيح الثغرات.",
    durationFr: "Sessions condensées ciblées avant les dates officielles de test",
    durationAr: "دورات مركزة تسبق المواعيد الرسمية المبرمجة للاختبارات",
    formatFr: "Présentiel & ressources d'entraînement numérique",
    formatAr: "حضوري مع منصات تدريب واختبارات قياس دورية",
    registrationStatusFr: "Places limitées par groupe de révision",
    registrationStatusAr: "المقاعد محدودة لضمان التركيز والمردودية",
    disclaimerFr: "Les inscriptions aux examens officiels se font sur les plateformes officielles des organismes certificateurs.",
    disclaimerAr: "التسجيل في الاختبارات الرسمية يتم مباشرة عبر المنصات المعتمدة للهيئات المصدرة للاختبار."
  },

  // --- 3. FORMATIONS PROFESSIONNELLES ---
  // A. Préparation aux concours professionnels
  {
    id: 'pro-prescolaire',
    category: 'formations_pro',
    titleFr: "Préparation au Concours des Éducatrices & Éducateurs du Préscolaire",
    titleAr: "التحضير لمباراة مربيات ومربي التعليم الأولي",
    subtitleFr: "Pédagogie de la petite enfance, psychologie de l'enfant et législation",
    subtitleAr: "بيداغوجيا الطفولة المبكرة، علم نفس الطفل، والتشريع المنظم للتعليم الأولي",
    targetAudienceFr: "Candidates et candidats aux postes d'éducateurs dans les structures préscolaires",
    targetAudienceAr: "المترشحات والمترشحون لمباريات ومناصب مربي ومربيات التعليم الأولي",
    subjectsFr: [
      "Développement psychomoteur et psychoaffectif du jeune enfant",
      "Techniques d'animation, comptines et activités d'éveil",
      "Cadre curriculaire national de l'enseignement préscolaire",
      "Préparation à l'entretien oral et mise en situation professionnelle"
    ],
    subjectsAr: [
      "النمو النفسي الحركي والوجداني للطفل دون سن التمدرس",
      "تقنيات التنشيط التربوي، الأناشيد والألعاب الهادفة وأنشطة الإيقاظ",
      "الإطار المنهاجي الوطني للتعليم الأولي ومجالات التعلم",
      "الإعداد لاجتياز المقابلة الشفوية والمحاكاة المهنية الميدانية"
    ],
    methodologyFr: "Apports théoriques clairs complétés par des ateliers pratiques de conception de fiches pédagogiques.",
    methodologyAr: "دروس نظرية مركزة مع ورشات تطبيقية لإعداد الجذاذات وبناء الأنشطة التعليمية التعلمية.",
    durationFr: "Modules préparatoires intensifs",
    durationAr: "مصوغات تكوينية وتحضيرية مكثفة",
    formatFr: "Présentiel et ateliers pratiques",
    formatAr: "تكوين حضوري مدعم بورشات عملية تطبيقية",
    registrationStatusFr: "Renseignements auprès du centre",
    registrationStatusAr: "الاستعلام والتسجيل متاح بكتابة المركز",
    disclaimerFr: "Les conditions de recrutement et diplômes exigés relèvent des organismes recruteurs.",
    disclaimerAr: "شروط الترشح والدبلومات المطلوبة تحددها حصراً الجهات المشغلة والمؤسسات المعنية."
  },
  {
    id: 'pro-enseignants',
    category: 'formations_pro',
    titleFr: "Préparation aux Concours de Recrutement des Enseignants (Primaire, Collège, Lycée)",
    titleAr: "التحضير لمباراة توظيف الأساتذة أطر الأكاديميات (الابتدائي، الإعدادي، التأهيلي)",
    subtitleFr: "Didactique des disciplines, sciences de l'éducation et épreuves de spécialité",
    subtitleAr: "ديداكتيك المواد، علوم التربية ومستجدات المنظومة، واختبارات التخصص",
    targetAudienceFr: "Titulaires de licences (études fondamentales, professionnelles ou éducation)",
    targetAudienceAr: "الحاصلون على الإجازة (الأساسية، المهنية، أو في التربية) بجميع التخصصات",
    subjectsFr: [
      "Sciences de l'éducation : théories d'apprentissage, approches pédagogiques",
      "Didactique du français, des mathématiques, des sciences et des langues",
      "Système éducatif marocain et textes législatifs de référence",
      "Simulations de l'épreuve orale et analyse de situations de classe"
    ],
    subjectsAr: [
      "علوم التربية: نظريات التعلم، المقاربات البيداغوجية، ودينامية الجماعات",
      "ديداكتيك التخصص (اللغات، المواد العلمية، العلوم الإنسانية، التخصص المزدوج)",
      "مستجدات نظام التربية والتكوين بالمغرب والمذكرات التنظيمية",
      "محاكاة الاختبار الشفوي وتدبير وضعيات الصف والتدريس المصغر"
    ],
    methodologyFr: "Analyse des épreuves antérieures, entraînement à la rédaction didactique et jurys blancs d'oraux.",
    methodologyAr: "تحليل امتحانات السنوات الماضية، التدريب على صياغة السيناريوهات الديداكتيكية، ولجان محاكاة شفوية.",
    durationFr: "Cycle de formation approfondi avant le concours officiel",
    durationAr: "برنامج تدريبي متكامل ينطلق قبل الإعلان الرسمي عن المباراة",
    formatFr: "Séances de spécialité et modules transversaux",
    formatAr: "حصص في مادة التخصص ومصوغات مشتركة في علوم التربية",
    registrationStatusFr: "Ouvert – Détails disponibles au centre",
    registrationStatusAr: "مفتوح – تفاصيل الجداول متوفرة لدى إدارة المركز",
    disclaimerFr: "Le centre prépare aux épreuves et ne se substitue aucunement au ministère de tutelle.",
    disclaimerAr: "المركز يقدم تكويناً تحضيرياً ولا يمثل وزارة التربية الوطنية أو الأكاديميات الجهوية."
  },
  {
    id: 'pro-cope',
    category: 'formations_pro',
    titleFr: "Préparation au Concours des Conseillers en Orientation et Planification (COPE)",
    titleAr: "التحضير لمباراة ولوج مركز التوجيه والتخطيط التربوي (COPE)",
    subtitleFr: "Psychologie du conseil, méthodes statistiques et planification scolaire",
    subtitleAr: "علم نفس التوجيه والإرشاد، الإحصاء التربوي، والتخطيط المدرسي",
    targetAudienceFr: "Enseignants et personnels de l'éducation éligibles au concours d'accès au COPE",
    targetAudienceAr: "الأطر التعليمية والتربوية المستوفية لشروط اجتياز مباراة مركز التوجيه والتخطيط",
    subjectsFr: [
      "Théories du développement de l'adolescent et de la vocation",
      "Outils et démarches du conseil en orientation scolaire et professionnelle",
      "Statistiques appliquées, démographie scolaire et planification de l'offre",
      "Textes réglementaires et réformes du système d'orientation"
    ],
    subjectsAr: [
      "نظريات الاختيار المهني ونمو المراهق وبناء المشروع الشخصي",
      "أدوات ومناهج الاستشارة والتوجيه المدرسي والمهني",
      "الإحصاء التطبيقي، الديموغرافيا المدرسية، وتخطيط الخريطة المدرسية",
      "النصوص التنظيمية والمشاريع المندمجة لإصلاح منظومة التوجيه"
    ],
    methodologyFr: "Études de dossiers thématiques, résolution d'épreuves de spécialité et préparation aux soutenances orales.",
    methodologyAr: "دراسة ملفات موضوعاتية مركبة، معالجة نماذج المباريات السابقة، والتمرن على العرض والمناقشة الشفوية.",
    durationFr: "Sessions de fin de semaine adaptées aux professionnels en activité",
    durationAr: "حصص نهاية الأسبوع ملائمة للالتزامات المهنية للمترشحين",
    formatFr: "Présentiel et documentation spécialisée",
    formatAr: "حضوري مع حقيبة وثائقية وتوثيقية متخصصة",
    registrationStatusFr: "Préparation sur dossier – À confirmer par la direction",
    registrationStatusAr: "التسجيل بناءً على دراسة الملف – يُؤكد من الإدارة",
    disclaimerFr: "Les conditions d'ancienneté et de diplômes sont fixées par la note ministérielle annuelle.",
    disclaimerAr: "شروط الأقدمية والدرجة تحددها المذكرة الوزارية المنظمة للمباراة."
  },
  {
    id: 'pro-inspecteurs',
    category: 'formations_pro',
    titleFr: "Préparation au Concours des Inspecteurs Pédagogiques (CFIE)",
    titleAr: "التحضير لمباراة التفتيش التربوي (مركز تكوين مفتشي التعليم - الابتدائي، الإعدادي، التأهيلي)",
    subtitleFr: "Évaluation pédagogique, ingénierie de formation et analyse des pratiques",
    subtitleAr: "التقويم التربوي، هندسة التكوين، وتحليل الممارسات الصفية والتأطير",
    targetAudienceFr: "Enseignants titulaires remplissant les conditions réglementaires d'accès",
    targetAudienceAr: "الأساتذة الممارسون المستوفون للشروط القانونية لولوج مركز تكوين المفتشين",
    subjectsFr: [
      "Méthodologie de l'inspection et de l'encadrement pédagogique",
      "Analyse réflexive des pratiques d'enseignement",
      "Élaboration des curricula et évaluation des apprentissages",
      "Législation scolaire, éthique professionnelle et management éducatif"
    ],
    subjectsAr: [
      "منهجية التفتيش والمواكبة البيداغوجية للأطر التعليمية",
      "التحليل التفاعلي للممارسات الصفية ودينامية التعلم",
      "بناء المناهج والبرامج وتقويم المكتسبات الدراسية",
      "التشريع المدرسي، أخلاقيات المهنة، وتدبير المنظومات التعليمية"
    ],
    methodologyFr: "Séminaires d'analyse didactique, rédactions encadrées de synthèses problématiques et entretiens avec jurys d'experts.",
    methodologyAr: "ندوات في التحليل الديداكتيكي، تحرير مقالات تركيبية إشكالية، واختبارات تجريبية أمام لجان متخصصة.",
    durationFr: "Cycles approfondis avec suivi individualisé",
    durationAr: "برنامج تدريبي معمق بمواكبة شخصية مدققة",
    formatFr: "Séminaires présentiels le week-end",
    formatAr: "ندوات حضورية خلال عطل نهاية الأسبوع",
    registrationStatusFr: "Programme sous réserve des dates officielles",
    registrationStatusAr: "البرنامج يُفعل وفق المستجدات والمواعيد الرسمية",
    disclaimerFr: "Accès soumis aux critères administratifs arrêtés par le Ministère de l'Éducation Nationale.",
    disclaimerAr: "المشاركة مشروطة بالمعايير الإدارية الصادرة عن وزارة التربية الوطنية والتعليم الأولي والرياضة."
  },
  {
    id: 'pro-cadres-admin',
    category: 'formations_pro',
    titleFr: "Concours d'Accès au Cycle des Cadres de l'Administration Éducative (CRMEF)",
    titleAr: "مباراة الدخول لمسلك تكوين أطر الإدارة التربوية بالمراكز الجهوية (CRMEF)",
    subtitleFr: "Gouvernance des établissements scolaires, gestion financière et relationnelle",
    subtitleAr: "حكامة المؤسسات التعليمية، التدبير الإداري والمالي، والقيادة التربوية",
    targetAudienceFr: "Cadres enseignants et administratifs candidats à la direction d'établissements",
    targetAudienceAr: "الأطر التعليمية والإدارية الراغبة في تقلد مهام الإدارة والإشراف التربوي",
    subjectsFr: [
      "Projet d'établissement intégré (PEI) et pilotage par objectifs",
      "Gestion matérielle, financière et comptabilité publique appliquée",
      "Management d'équipe, communication institutionnelle et gestion des conflits",
      "Droit administratif et responsabilité civile et pénale de l'administrateur"
    ],
    subjectsAr: [
      "مشروع المؤسسة المندمج وآليات القيادة التشاركية والتدبير بالنتائج",
      "التدبير المادي والمالي والمحاسباتي بالمؤسسات التعليمية",
      "قيادة فرق العمل، التواصل المؤسساتي، وحل النزاعات",
      "القانون الإداري والمسؤولية المدنية والجنائية للمسؤول التربوي"
    ],
    methodologyFr: "Résolution d'études de cas de gestion, fiches synthétiques et entraînements à l'épreuve orale.",
    methodologyAr: "حل وضعيات-مشاكل في التدبير الإداري، ملخصات مركزة، ومحاكاة المقابلة المهنية الشفوية.",
    durationFr: "Sessions condensées ciblées",
    durationAr: "دورات مكثفة وموجهة لاجتياز الاختبارين الكتابي والشفوي",
    formatFr: "Présentiel et ateliers de simulation",
    formatAr: "حضوري مع ورشات تدبيرية تطبيقية",
    registrationStatusFr: "Détails à confirmer auprès du secrétariat",
    registrationStatusAr: "التفاصيل تُؤكد لدى كتابة المركز",
    disclaimerFr: "Ce cursus constitue un accompagnement préparatoire indépendant.",
    disclaimerAr: "يقدم هذا البرنامج تكويناً تأهيلياً مستقلاً لمساعدة المترشحين."
  },
  {
    id: 'pro-aptitude',
    category: 'formations_pro',
    titleFr: "Préparation à l'Examen d'Aptitude Professionnelle",
    titleAr: "التحضير لامتحان الكفاءة المهنية للترقية",
    subtitleFr: "Avancement de grade des enseignants et personnels de l'éducation",
    subtitleAr: "الترقية في الدرجة والرتبة لأساتذة وأطر وزارة التربية الوطنية",
    targetAudienceFr: "Fonctionnaires de l'éducation nationale préparant les épreuves écrites d'aptitude",
    targetAudienceAr: "أطر وزارة التربية الوطنية المعنيون باجتياز امتحانات الكفاءة المهنية للترقي",
    subjectsFr: [
      "Didactique de la discipline et analyse de séquences d'apprentissage",
      "Sciences de l'éducation et questions éducatives contemporaines",
      "Textes officiels, chartes de déontologie et cadre légal de la fonction publique"
    ],
    subjectsAr: [
      "ديداكتيك مادة التخصص وتدبير المقاطع التعلمية والتقويم",
      "علوم التربية والقضايا التربوية المعاصرة ومناهج التدريس",
      "النصوص الرسمية، ميثاق أخلاقيات المهنة، والنظام الأساسي للوظيفة العمومية"
    ],
    methodologyFr: "Analyse critique des sujets des sessions précédentes, fiches récapitulatives et méthodologie de rédaction.",
    methodologyAr: "تحليل نقدي لاختبارات الدورات السابقة، بطاقات ملخصة، ومنهجية التحرير العلمي المنظم.",
    durationFr: "Stages intensifs avant les sessions d'examen",
    durationAr: "دورات سريعة مكثفة تنظم قبيل تاريخ إجراء الامتحانات",
    formatFr: "Cours en présentiel et fascicules de révision",
    formatAr: "دروس حضورية ودعامات للمراجعة المركزة",
    registrationStatusFr: "Sessions programmées selon le calendrier du ministère",
    registrationStatusAr: "تُبرمج الدورات بالتزامن مع الجدول الزمني الصادر عن الوزارة",
    disclaimerFr: "Les conditions d'inscription à l'examen officiel sont gérées par les académies régionales.",
    disclaimerAr: "إجراءات التسجيل في الامتحان الرسمي تخضع للمذكرات الصادرة عن الأكاديميات."
  },

  // B. Formation Continue
  {
    id: 'pro-continue-prescolaire',
    category: 'formations_pro',
    titleFr: "Formation Continue : Éducatrices & Éducateurs du Préscolaire",
    titleAr: "التكوين المستمر: مربيات ومربو التعليم الأولي",
    subtitleFr: "Perfectionnement des pratiques pédagogiques, éveil et inclusion",
    subtitleAr: "تطوير الممارسات البيداغوجية، أنشطة الإيقاظ، والدمج المدرسي",
    targetAudienceFr: "Éducatrices et éducateurs en exercice souhaitant enrichir leurs compétences",
    targetAudienceAr: "المربيات والمربون الممارسون الراغبون في تطوير مهاراتهم الميدانية",
    subjectsFr: [
      "Conception et mise en œuvre des ateliers sensoriels et moteurs",
      "Gestion de classe bienveillante et communication non-violente",
      "Accompagnement de l'enfant en difficulté d'adaptation ou à besoins spécifiques",
      "Évaluation formative continue sans notation chiffrée"
    ],
    subjectsAr: [
      "تصميم وتفعيل الورشات الحسية والحركية واللغوية",
      "تدبير الفضاء التربوي بروح إيجابية والتواصل الفعال مع الأطفال",
      "مواكبة الأطفال في وضعيات صعوبة التكيف أو ذوي الاحتياجات الخاصة",
      "التقويم التكويني المستمر القائم على الملاحظة دون تقييم رقمي"
    ],
    methodologyFr: "Ateliers participatifs, jeux de rôle, analyse de capsules vidéo et partage de pratiques.",
    methodologyAr: "ورشات تفاعلية، لعب الأدوار، تحليل مقاطع لممارسات ميدانية، وتبادل التجارب المهنية.",
    durationFr: "Modules modulaires le week-end ou en période de vacances",
    durationAr: "مصوغات دورية تنظم في عطل نهاية الأسبوع وفترات التوقف المدرسي",
    formatFr: "Présentiel actif et travaux pratiques en ateliers",
    formatAr: "تكوين تطبيقي تفاعلي داخل ورشات المركز",
    registrationStatusFr: "Attestation de participation délivrée à la fin de chaque module",
    registrationStatusAr: "تُمنح إفادة حضور ومشاركة عند استكمال متطلبات كل مصوغة",
    disclaimerFr: "Cette formation est certifiée par le centre comme attestation de perfectionnement continu.",
    disclaimerAr: "يمنح المركز شهادة تكوين مستمر تثبت المهارات المكتسبة خلال الدورة."
  },
  {
    id: 'pro-continue-enseignants-prive',
    category: 'formations_pro',
    titleFr: "Formation Continue : Enseignants du Privé (Anglais, Français, Maths)",
    titleAr: "التكوين المستمر: أساتذة التعليم الخاص (الإنجليزية، الفرنسية، الرياضيات)",
    subtitleFr: "Renforcement didactique, nouvelles approches pédagogiques et numérique éducatif",
    subtitleAr: "التعزيز الديداكتيكي، المقاربات البيداغوجية الحديثة، وإدماج التكنولوجيا التعليمية",
    targetAudienceFr: "Enseignants du primaire, collège et lycée en fonction dans les établissements privés",
    targetAudienceAr: "أساتذة الابتدائي والإعدادي والثانوي الممارسون في مؤسسات التعليم المدرسي الخصوصي",
    subjectsFr: [
      "Didactique avancée des mathématiques : résolution de problèmes et modélisation",
      "Didactique du français : pédagogie de l'erreur, expression écrite et lecture méthodique",
      "Didactique de l'anglais : approche par les tâches (Task-Based Learning)",
      "Intégration d'outils numériques interactifs dans la classe"
    ],
    subjectsAr: [
      "ديداكتيك الرياضيات المتقدم: وضعيات-المسائل والنمذجة الرياضية",
      "ديداكتيك الفرنسية: بيداغوجيا الخطأ، الإنتاج الكتابي، والقراءة المنهجية",
      "ديداكتيك الإنجليزية: التعلم المعتمد على المهام والأنشطة التواصلية",
      "إدماج الوسائل الرقمية والمنصات التفاعلية داخل الحجرة الدراسية"
    ],
    methodologyFr: "Études de cas, co-construction de projets pédagogiques et simulations d'animation.",
    methodologyAr: "دراسة حالات، البناء المشترك للمشاريع البيداغوجية، ومحاكاة التنشيط الصفي.",
    durationFr: "Modules de 20h à 40h selon les disciplines choisies",
    durationAr: "مصوغات من 20 إلى 40 ساعة بحسب المادة المختارة",
    formatFr: "Séances pratiques en fin de semaine",
    formatAr: "حصص عملية منظمة في نهايات الأسبوع",
    registrationStatusFr: "Informations détaillées disponibles au centre",
    registrationStatusAr: "التفاصيل الدقيقة والبرنامج متوفران لدى كتابة المركز",
    disclaimerFr: "Programme conçu pour valoriser le parcours professionnel des enseignants.",
    disclaimerAr: "صُمم البرنامج لتثمين المسار المهني وتطوير الكفاءة التدريسية للأساتذة."
  },

  // --- 4. SOUTIEN SCOLAIRE ---
  {
    id: 'soutien-regional',
    category: 'soutien_scolaire',
    titleFr: "Préparation à l'Examen Régional (1ère Année Bac)",
    titleAr: "الإعداد للامتحان الجهوي الموحد (السنة الأولى بكالوريا)",
    subtitleFr: "Accompagnement intensif dans toutes les matières certificatives",
    subtitleAr: "مواكبة مكثفة ودقيقة في جميع المواد المشمولة بالامتحان الجهوي",
    targetAudienceFr: "Élèves de première année du baccalauréat (toutes séries et filières)",
    targetAudienceAr: "تلاميذ السنة الأولى من سلك البكالوريا بجميع الشعب والمسالك",
    subjectsFr: [
      "Français (Étude des œuvres au programme, écriture d'invention, production écrite)",
      "Histoire-Géographie (Méthodologie des synthèses, études de documents cartographiques)",
      "Éducation Islamique (Maîtrise des concepts, sourates et analyse des situations)",
      "Mathématiques (Pour les filières littéraires et sciences humaines)"
    ],
    subjectsAr: [
      "اللغة الفرنسية (دراسة المؤلفات المقررة، منهجية الإنتاج الكتابي والتحليل الأدبي)",
      "التاريخ والجغرافيا (منهجية المقال، استثمار الوثائق والمبيانات، والمفاهيم الكبرى)",
      "التربية الإسلامية (فهم المداخل، تحليل النصوص الشرعية، وحل الوضعيات التقويمية)",
      "الرياضيات (بالنسبة لمسالك الآداب والعلوم الإنسانية)"
    ],
    methodologyFr: "Fiches de synthèse claires, acquisition d'automatismes d'analyse et examens blancs régionaux chronométrés.",
    methodologyAr: "ملخصات شاملة وميسرة، تدريب على منهجية الإجابة الدقيقة، وامتحانات جهوية تجريبية في ظروف واقعية.",
    durationFr: "Suivi continu sur l'année scolaire et stages de révision ciblés",
    durationAr: "متابعة دورية منتظمة طيلة الموسم الدراسي ودورات مكثفة قبيل موعد الامتحان",
    formatFr: "Groupes homogènes à effectif maîtrisé",
    formatAr: "مجموعات متجانسة بعدد محدود يضمن جودة الاستيعاب والتفاعل",
    registrationStatusFr: "Inscriptions ouvertes pour l'année en cours",
    registrationStatusAr: "التسجيل مفتوح للموسم الدراسي الحالي",
    disclaimerFr: "Le programme respecte scrupuleusement les cadres de référence du Ministère.",
    disclaimerAr: "يعتمد البرنامج بدقة الأطر المرجعية المعتمدة للامتحان الجهوي الموحد."
  },
  {
    id: 'soutien-national',
    category: 'soutien_scolaire',
    titleFr: "Préparation à l'Examen National du Baccalauréat",
    titleAr: "الإعداد للامتحان الوطني الموحد لنيل شهادة البكالوريا",
    subtitleFr: "Entraînement de pointe dans toutes les matières principales",
    subtitleAr: "تدريب مكثف في جميع المواد الأساسية المؤثرة في المعدل العام",
    targetAudienceFr: "Élèves de deuxième année baccalauréat (Sciences Maths, PC, SVT, Éco, Lettres)",
    targetAudienceAr: "تلاميذ السنة الثانية بكالوريا (علوم رياضية، علوم فيزيائية، SVT، علوم اقتصادية، آداب)",
    subjectsFr: [
      "Mathématiques (Analyse, probabilités, nombres complexes, géométrie dans l'espace)",
      "Physique-Chimie (Ondes, mécanique, électricité, réactions acido-basiques et redox)",
      "Sciences de la Vie et de la Terre (Consommation de matière, génétique humaine, immunologie)",
      "Philosophie (Analyse de texte, dissertation philosophique, notions clés)",
      "Anglais (Grammar, Reading comprehension, Vocabulary & Writing)"
    ],
    subjectsAr: [
      "الرياضيات (التحليل، الاحتمالات، الأعداد العقدية، والهندسة الفضائية)",
      "الفيزياء والكيمياء (الموجات، الميكانيك، الكهرباء، والتحولات الكيميائية)",
      "علوم الحياة والأرض (استهلاك المادة العضوية، الوراثة البشرية، وعلم المناعة)",
      "الفلسفة (منهجية القولة والسؤال والنص الفلسفي، وتفكيك المفاهيم)",
      "اللغة الإنجليزية (القواعد، فهم النصوص، التعبير الكتابي المتخصص)"
    ],
    methodologyFr: "Déconstruction approfondie des sujets types, gestion du barème de notation et examens blancs réguliers.",
    methodologyAr: "تفكيك الامتحانات الوطنية السابقة، ضبط سلم التنقيط، وامتحانات تجريبية بيضاء مصححة بعناية.",
    durationFr: "Accompagnement annuel et révisions finales post-vacances",
    durationAr: "مواكبة أسبوعية ممتدة مع دورات مراجعة نهائية مركزة",
    formatFr: "Séances présentielles et corrections individualisées",
    formatAr: "حصص حضورية تفاعلية مع تصحيح فردي ورصد لمكامن التعثر",
    registrationStatusFr: "Consultez le secrétariat pour les plannings par filière",
    registrationStatusAr: "يُرجى مراجعة إدارة المركز للاطلاع على جداول كل شعبة",
    disclaimerFr: "Accompagnement rigoureux sans promesse d'admission miraculeuse non vérifiée.",
    disclaimerAr: "مواكبة علمية جادة قائمة على العمل والمثابرة دون وعود وهمية أو مبالغ فيها."
  },
  {
    id: 'soutien-renforcement',
    category: 'soutien_scolaire',
    titleFr: "Renforcement des Acquis (Primaire, Collège, Lycée)",
    titleAr: "دعم وتقوية المكتسبات الأساسية (الابتدائي، الإعدادي، الثانوي)",
    subtitleFr: "Remédiation pédagogique, consolidation des bases et remise à niveau",
    subtitleAr: "معالجة الصعوبات التعلمية، ترسيخ القواعد الأساسية، واستعادة الثقة",
    targetAudienceFr: "Élèves souhaitant consolider leurs bases et combler des lacunes accumulées",
    targetAudienceAr: "التلاميذ الراغبون في تثبيت الأساسيات وتجاوز التعثرات المتراكمة",
    subjectsFr: [
      "Français (Grammaire, conjugaison, orthographe, lecture fluide)",
      "Mathématiques (Calcul mental, opérations fondamentales, géométrie, algèbre)",
      "Anglais (Initiation et consolidation des acquis)",
      "Physique-Chimie (Concepts de base et démarche expérimentale)",
      "Sciences de la Vie et de la Terre (Observation et rigueur scientifique)"
    ],
    subjectsAr: [
      "اللغة الفرنسية (القواعد، الصرف، الإملاء، والقراءة الاستيعابية السليمة)",
      "الرياضيات (الحساب، المفاهيم العددية، الهندسة، والجبر الأولي)",
      "اللغة الإنجليزية (بناء الرصيد اللغوي والقواعد الأساسية)",
      "الفيزياء والكيمياء (المفاهيم الأولى والنهج التجريبي)",
      "علوم الحياة والأرض (الملاحظة العلمية والدقة المنهجية)"
    ],
    methodologyFr: "Bilan diagnostique préalable, pédagogie différenciée et progression à un rythme adapté à l'élève.",
    methodologyAr: "تقويم تشخيصي أولي، بيداغوجيا فارقية تراعي خصوصية كل تلميذ، وتدرج تدريجي يعيد بناء الثقة.",
    durationFr: "Formules modulaires tout au long de l'année scolaire",
    durationAr: "صيغ مرنة منتظمة على مدار السنة الدراسية",
    formatFr: "Petits effectifs favorisant l'attention bienveillante de l'enseignant",
    formatAr: "أفواج صغرى تضمن الاهتمام الفردي ومواكبة كل تلميذ على حدة",
    registrationStatusFr: "Inscriptions ouvertes toute l'année",
    registrationStatusAr: "التسجيل مفتوح على مدار العام الدراسي",
    disclaimerFr: "Les résultats dépendent de l'assiduité de l'élève et de l'implication familiale.",
    disclaimerAr: "تحقيق التقدم يرتبط بانتظام حضور التلميذ وتعاون الأسرة مع الفريق التربوي."
  },

  // --- 5. ORIENTATION SCOLAIRE ET PROJET PERSONNEL ---
  {
    id: 'orientation-individuel',
    category: 'orientation_scolaire',
    titleFr: "Parcours Individuel : Projet Personnel de l'Élève",
    titleAr: "المسار الفردي: المشروع الشخصي للتلميذ",
    subtitleFr: "Bilan d'orientation sur-mesure, connaissance de soi et prise de décision éclairée",
    subtitleAr: "حصيلة توجيه مشخصة، استكشاف الذات، واتخاذ القرار الدراسي الواعي",
    targetAudienceFr: "Collégiens, lycéens et étudiants en quête de clarté sur leur avenir d'études",
    targetAudienceAr: "تلاميذ الإعدادي والتأهيلي والطلبة الراغبون في رسم معالم مسارهم الدراسي والمهني",
    subjectsFr: [
      "01. Connaissance de soi : identification des centres d'intérêt, talents et valeurs",
      "02. Exploration des métiers : débouchés réels, secteurs porteurs et réalités du marché",
      "03. Cartographie des formations : filières universitaires, grandes écoles, BTS, EST",
      "04. Mise en relation : confrontation des motivations personnelles avec les exigences d'admission",
      "05. Aide à la prise de décision : élaboration d'un plan d'action réaliste et personnalisé"
    ],
    subjectsAr: [
      "01. استكشاف الذات: رصد الميول والاهتمامات الحقيقية والقدرات والقيم الشخصية",
      "02. استكشاف المهن: مجالات العمل الواعدة، المستجدات، ومتطلبات سوق الشغل",
      "03. استكشاف منظومة التكوين: الجامعات، المعاهد والمدارس العليا، مسالك التقني المتخصص",
      "04. الملاءمة والتوفيق: مطابقة الطموحات الذاتية مع الشروط والمعايير الأكاديمية",
      "05. اتخاذ القرار المستنير: صياغة مخطط عمل دراسي محكم وواقعي"
    ],
    methodologyFr: "Entretiens individuels approfondis avec un conseiller d'orientation, passation de questionnaires d'intérêts et synthèse remise à la famille.",
    methodologyAr: "جلسات استشارية فردية معمقة مع مستشار التوجيه، استبيانات الميول المهنية، وتقرير تركيبي يُسلم للأسرة.",
    durationFr: "Accompagnement en 3 à 5 séances personnalisées",
    durationAr: "مواكبة مشخصة من 3 إلى 5 جلسات فردية",
    formatFr: "Entretiens en tête-à-tête en cabinet d'écoute",
    formatAr: "جلسات فردية مباشرة داخل قاعة استماع مخصصة وهادئة",
    registrationStatusFr: "Sur rendez-vous préalable auprès du secrétariat",
    registrationStatusAr: "بموعد مسبق عبر كتابة المركز",
    disclaimerFr: "L'orientation est un conseil d'aide à la décision ; le choix final appartient à l'élève et sa famille.",
    disclaimerAr: "خدمة التوجيه استشارة مساعدة على القرار؛ ويبقى الاختيار النهائي مسؤولية التلميذ وأسرته."
  },
  {
    id: 'orientation-groupe',
    category: 'orientation_scolaire',
    titleFr: "Parcours Collectif : Ateliers en Groupe & Compétences Transversales",
    titleAr: "المسار الجماعي: ورشات تفاعلية وتطوير المهارات الحياتية",
    subtitleFr: "Intelligence collective, dépassement des stéréotypes et compétences du XXIe siècle",
    subtitleAr: "الذكاء الجماعي، تفكيك الصور النمطية، والمهارات الحياتية للقرن 21",
    targetAudienceFr: "Groupes de lycéens et étudiants désireux de mûrir leur vision en dynamique de groupe",
    targetAudienceAr: "مجموعات تلاميذ الثانوي والطلبة الراغبين في إنضاج تفكيرهم عبر دينامية تفاعلية",
    subjectsFr: [
      "Dépassement des stéréotypes sur les filières et les métiers (littéraire vs scientifique, etc.)",
      "Intelligence collective : résolution collaborative d'études de cas d'orientation",
      "Développement des compétences transversales (Soft Skills) : communication, écoute et posture",
      "Prise de parole en public et préparation aux oraux d'admission",
      "Organisation personnelle, gestion du temps et autonomie de travail"
    ],
    subjectsAr: [
      "تفكيك الأحكام المسبقة والصور النمطية حول الشعب والمهن (علمي/أدبي، مهن ذكورية/أنثوية)",
      "تفعيل الذكاء الجماعي: التفكير التعاوني في حل مشكلات الاختيار الأكاديمي",
      "تنمية المهارات الحياتية والمستعرضة: مهارات التواصل، الإنصات، والثقة بالنفس",
      "الإلقاء والخطابة والتعبير عن الذات في المقابلات",
      "التنظيم الذاتي، إدارة الوقت، واكتساب استقلالية التعلم"
    ],
    methodologyFr: "Dynamique de groupe vivante, jeux de rôle, débats structurés et études de situations concrètes.",
    methodologyAr: "دينامية تفاعلية حية، محاكاة ولعب أدوار، مناظرات موجهة، ودراسة حالات واقعية ملهمة.",
    durationFr: "Cycles de 4 à 6 ateliers thématiques de 2 heures",
    durationAr: "سلسلة من 4 إلى 6 ورشات موضوعاتية مدة كل منها ساعتان",
    formatFr: "Séminaires en salle atelier équipée",
    formatAr: "ندوات وورشات عمل مجهزة ومريحة",
    registrationStatusFr: "Calendrier des ateliers disponible au centre",
    registrationStatusAr: "جدول انطلاق الورشات متوفر لدى إدارة المركز",
    disclaimerFr: "Les ateliers complètent harmonieusement la réflexion individuelle.",
    disclaimerAr: "تشكل هذه الورشات رافعة مكملة للتفكير والتخطيط الفردي للتلميذ."
  },

  // --- 6. FORUMS POUR ÉTUDIANTS & ACTIVITÉS D'ORIENTATION ---
  {
    id: 'forums-etudiants',
    category: 'forums_etudiants',
    titleFr: "Forums pour Étudiants & Rencontres d'Orientation",
    titleAr: "منتديات الطلبة وأنشطة استكشاف الآفاق الجامعية",
    subtitleFr: "Information sur les filières, systèmes d'orientation, procédures et visites sur place",
    subtitleAr: "التعريف بالشعب والمسالك، منظومات التوجيه، مساطر الترشيح، والزيارات الميدانية",
    targetAudienceFr: "Bacheliers, étudiants de classes prépas, universitaires et parents d'élèves",
    targetAudienceAr: "تلاميذ البكالوريا، طلبة الأقسام التحضيرية، الجامعيون، وأولياء الأمور",
    subjectsFr: [
      "Panorama complet des filières de l'enseignement supérieur au Maroc et à l'international",
      "Compréhension approfondie des systèmes et passerelles d'orientation",
      "Décryptage des procédures d'inscription, plateformes nationales et critères de sélection",
      "Écoles et instituts supérieurs publics et privés : statuts, accréditations et débouchés",
      "Visites sur place des écoles et instituts partenaires (organisées périodiquement par le centre)"
    ],
    subjectsAr: [
      "بانوراما شاملة حول مسالك التعليم العالي بالمغرب والآفاق الدولية المتاحة",
      "فهم دقيق لمنظومات التوجيه الجامعي والجسور الممكنة بين التخصصات",
      "شرح مساطر الترشيح، البوابات الوطنية للتسجيل، ومعايير الانتقاء المعتمدة",
      "المدارس والمعاهد العليا العمومية والخاصة: الوضعيات القانونية والاعتراف والشواهد",
      "زيارات ميدانية استكشافية للمؤسسات والمعاهد (يبرمجها المركز دورياً وفق الإمكانات)"
    ],
    methodologyFr: "Tables rondes avec des professionnels et des anciens étudiants, stands d'information, conférences et sorties encadrées.",
    methodologyAr: "موائد مستديرة مع مهنيين وخريجين، أروقة إعلامية، ندوات توجيهية، وزيارات ميدانية مؤطرة.",
    durationFr: "Événements ponctuels et journées portes ouvertes",
    durationAr: "فعاليات دورية وأيام إعلامية وأبواب مفتوحة مبرمجة",
    formatFr: "Conférences, panels et visites de terrain encadrées",
    formatAr: "ندوات، جلسات حوارية، وزيارات استكشافية ميدانية",
    registrationStatusFr: "Participation gratuite sur inscription préalable",
    registrationStatusAr: "المشاركة متاحة ومجانية مع ضرورة التسجيل المسبق لضبط المقاعد",
    disclaimerFr: "Les visites sur place sont organisées selon les autorisations et partenariats validés.",
    disclaimerAr: "تُنظم الزيارات الميدانية حصراً وفق التراخيص والتنسيقات المؤكدة مع المؤسسات المستقبلة."
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    category: "concours",
    questionFr: "Quelles sont les conditions d'accès aux concours (ENA, ENCG, Médecine, ENSA...) ?",
    questionAr: "ما هي شروط الترشح لمباريات الولوج (ENA، ENCG، كليات الطب، ENSA...)؟",
    answerFr: "Les conditions d'accès officielles (type de baccalauréat, mentions, moyennes de seuil et critères d'âge) sont arrêtées chaque année par les ministères et les directions des écoles concernées. Notre centre assure une préparation intensive aux épreuves mais ne fixe pas les conditions d'accès officielles. Les détails à jour vous seront précisés lors de votre prise de contact avec notre équipe.",
    answerAr: "شروط الولوج الرسمية (شعبة البكالوريا، عتبات الانتقاء، والسن) تحددها سنوياً الوزارات الوصية وإدارات المدارس المعنية. يركز مركزنا على الإعداد المنهجي والمعرفي لاجتياز الاختبارات بنجاح، ويحيطكم علماً بالمستجدات الرسمية بمجرد صدورها فور تواصلكم معنا."
  },
  {
    category: "tarifs",
    questionFr: "Comment connaître les tarifs et les dates exactes des formations ?",
    questionAr: "كيف يمكنني معرفة الأسعار وتواريخ انطلاق التكوينات بدقة؟",
    answerFr: "Afin de garantir une information rigoureuse et adaptée au besoin de chaque apprenant (formule annuelle, stage intensif, cours particuliers ou collectifs), les tarifs et plannings officiels sont communiqués directement par la direction lors de votre visite au centre ou par échange direct téléphonique/WhatsApp.",
    answerAr: "حرصاً على تقديم معلومات دقيقة تتطابق مع حاجة كل متعلم (اشتراك سنوي، دورة مكثفة، حصص فردية أو جماعية)، تقدم الإدارة جداول الرسوم والمواعيد المحددة مباشرة عبر الهاتف أو تطبيق واتساب أو خلال زيارة مقر المركز."
  },
  {
    category: "garantie",
    questionFr: "Le centre garantit-il la réussite ou l'admission aux concours ?",
    questionAr: "هل يضمن المركز النجاح أو القبول التلقائي في المباريات؟",
    answerFr: "Non. Conformément à notre charte éthique et à la réglementation, nous ne promettons jamais d'admission ou de réussite garantie. Nous nous engageons en revanche sur la plus haute exigence pédagogique, la qualité de nos formateurs, la rigueur des entraînements et un suivi assidu pour maximiser le potentiel de chaque candidat.",
    answerAr: "كلا. التزاماً بميثاقنا الأخلاقي والمهني، لا نقدم أي وعود بالنجاح المضمون أو القبول التلقائي. التزامنا الصارم يتمثل في توفير أعلى جودة تكوينية، وأفضل المراجع، والمتابعة البيداغوجية الصادقة لتمكين المترشح من استثمار كامل قدراته."
  },
  {
    category: "langues",
    questionFr: "Comment sont évalués les niveaux pour les cours de langues et certifications ?",
    questionAr: "كيف يتم تقييم المستويات في دورات اللغات والتحضير للشهادات؟",
    answerFr: "Chaque nouvel inscrit bénéficie d'un test de positionnement (écrit et oral) aligné sur le Cadre Européen Commun de Référence pour les Langues (CECRL) afin de l'intégrer dans un groupe homogène garantissant une progression rapide et mesurable.",
    answerAr: "يستفيد كل مسجل جديد من اختبار تشخيصي قبلي (كتابي وشفوي) مطابق لمعايير الإطار الأوروبي المرجعي المشترك (CECRL)، لضمان توجيهه للمستوى الملائم الذي يكفل له التطور السريع."
  },
  {
    category: "soutien",
    questionFr: "En quoi consiste l'accompagnement au soutien scolaire (régional et national) ?",
    questionAr: "ما هي صيغة المواكبة في الدعم المدرسي للامتحانين الجهوي والوطني؟",
    answerFr: "Notre méthode repose sur trois piliers : la révision ciblée des notions clés selon les cadres de référence officiels, la résolution méthodique de sujets d'examens antérieurs et la passation d'examens blancs en temps limité avec corrections personnalisées.",
    answerAr: "تقوم طريقتنا على ثلاثة ركائز أساسية: المراجعة الذكية والشاملة للمفاهيم الأساسية وفق الأطر المرجعية، والتدريب على حل نماذج الامتحانات السابقة، وإجراء امتحانات تجريبية دورية مع تصحيح فردي دقيق."
  },
  {
    category: "orientation",
    questionFr: "Quelle est la différence entre le parcours d'orientation individuel et collectif ?",
    questionAr: "ما هو الفرق بين مسار التوجيه الفردي والورشات الجماعية؟",
    answerFr: "Le parcours individuel est un tête-à-tête confidentiel avec un conseiller pour analyser le profil unique de l'élève, ses notes, intérêts et aspirations. Les ateliers collectifs favorisent quant à eux la prise de parole, la déconstruction des préjugés sur les métiers et le développement de compétences relationnelles précieuses.",
    answerAr: "المسار الفردي عبارة عن جلسات خاصة مع مستشار التوجيه لتحليل ميول التلميذ الخاصة ورسم خطة تناسبه شخصياً. بينما تركز الورشات الجماعية على الذكاء الجماعي، تبادل التجارب، وتطوير مهارات التحدث والتواصل."
  }
];

export const CATEGORIES_CONFIG = [
  { id: 'all', labelFr: 'Tous les programmes', labelAr: 'جميع البرامج' },
  { id: 'concours_acces', labelFr: 'Concours d\'accès', labelAr: 'مباريات الولوج' },
  { id: 'langues_certifs', labelFr: 'Langues & Certifications', labelAr: 'اللغات والشهادات الدولية' },
  { id: 'formations_pro', labelFr: 'Formations professionnelles', labelAr: 'التكوينات المهنية' },
  { id: 'soutien_scolaire', labelFr: 'Soutien scolaire', labelAr: 'الدعم المدرسي' },
  { id: 'orientation_scolaire', labelFr: 'Orientation & Projet', labelAr: 'التوجيه والمشروع الشخصي' },
  { id: 'forums_etudiants', labelFr: 'Forums & Visites', labelAr: 'المنتديات والزيارات' },
];
