export interface PartnerSchool {
  id: string;
  nameAr: string;
  nameFr: string;
  acronym: string;
  category: 'ingenieurs' | 'commerce' | 'medecine' | 'architecture' | 'classes_prepas';
  descriptionAr: string;
  descriptionFr: string;
  cities: string;
  admissionTypeAr: string;
  admissionTypeFr: string;
  badgeColor: string;
}

export const PARTNERS_SCHOOLS: PartnerSchool[] = [
  {
    id: 'fmp-maroc',
    nameAr: "كليات الطب والصيدلة وطب الأسنان",
    nameFr: "Facultés de Médecine, de Pharmacie et Dentaire (FMP/FMD)",
    acronym: "FMP / FMD",
    category: 'medecine',
    descriptionAr: "الشبكة الوطنية لكليات الطب والصيدلة بالمغرب (الرباط، الدار البيضاء، مراكش، فاس، وجدة، طنجة، أكادير، العيون، كلميم، بني ملال).",
    descriptionFr: "Réseau national des facultés de médecine humaine, pharmacie et médecine dentaire au Maroc.",
    cities: "Marrakech, Rabat, Casablanca, etc.",
    admissionTypeAr: "انتقاء أولي (Seuil) + مباراة كتابية وطنية موحدة QCM",
    admissionTypeFr: "Présélection sur seuil + Concours écrit national QCM",
    badgeColor: "bg-emerald-600"
  },
  {
    id: 'ensa-maroc',
    nameAr: "المدارس الوطنية للعلوم التطبيقية",
    nameFr: "Écoles Nationales des Sciences Appliquées (ENSA)",
    acronym: "ENSA",
    category: 'ingenieurs',
    descriptionAr: "تكوين مهندسي الدولة في مختلف التخصصات الهندسية (المعلوميات، الذكاء الاصطناعي، الميكاترونيك، الهندسة المدنية، الاتصالات). شبكة تضم 13 مدرسة ومنها ENSA Safi القريبة من المركز.",
    descriptionFr: "Formation d'ingénieurs d'État sur 5 ans (Cycle préparatoire intégré + Cycle ingénieur). 13 écoles à travers le Royaume dont l'ENSA de Safi.",
    cities: "Safi, Marrakech, Agadir, Tanger, Fès, etc.",
    admissionTypeAr: "انتقاء بناءً على نقط البكالوريا + مباراة كتابية موحدة",
    admissionTypeFr: "Présélection sur dossier Bac + Concours écrit",
    badgeColor: "bg-blue-600"
  },
  {
    id: 'encg-maroc',
    nameAr: "المدارس الوطنية للتجارة والتسيير",
    nameFr: "Écoles Nationales de Commerce et de Gestion (ENCG)",
    acronym: "ENCG",
    category: 'commerce',
    descriptionAr: "الشبكة الأولى لتكوين أطر التسيير، المالية، المحاسبة، التدقيق، والتسويق الرقمي وإدارة الأعمال بالمغرب.",
    descriptionFr: "Grande référence universitaire pour les études de commerce, marketing, audit, finance et management international.",
    cities: "Marrakech, Casablanca, Tanger, Agadir, Settat, etc.",
    admissionTypeAr: "انتقاء بناءً على العتبة + رائز TAFEM الموحد",
    admissionTypeFr: "Présélection sur seuil + Test national TAFEM",
    badgeColor: "bg-amber-600"
  },
  {
    id: 'ena-maroc',
    nameAr: "المدارس الوطنية للهندسة المعمارية",
    nameFr: "Écoles Nationales d'Architecture (ENA)",
    acronym: "ENA",
    category: 'architecture',
    descriptionAr: "المؤسسات المرجعية لتكوين المهندسين المعماريين بالمملكة (الرباط، مراكش، فاس، تطوان، أكادير، وجدة).",
    descriptionFr: "Institutions prestigieuses préparant au Diplôme d'Architecte d'État sur 6 années d'études rigoureuses.",
    cities: "Rabat, Marrakech, Fès, Tétouan, Agadir, Oujda",
    admissionTypeAr: "انتقاء أولي + اختبار كتابي تعبيري + اختبار الرسم والمقابلة",
    admissionTypeFr: "Présélection + Épreuve écrite & Dessin d'observation + Oral",
    badgeColor: "bg-indigo-600"
  },
  {
    id: 'ensam-maroc',
    nameAr: "المدارس الوطنية العليا للفنون والمهن",
    nameFr: "Écoles Nationales Supérieures d'Arts et Métiers (ENSAM)",
    acronym: "ENSAM",
    category: 'ingenieurs',
    descriptionAr: "صرح تكوين مهندسي الميكانيك، الكهرباء، الصناعة والإنتاجية (مكناس، الدار البيضاء، الرباط).",
    descriptionFr: "Formation polytechnique de haut niveau axée sur le génie industriel, mécanique et les systèmes automatisés.",
    cities: "Meknès, Casablanca, Rabat",
    admissionTypeAr: "انتقاء أولي بحسب الشعبة + مباراة وطنية مشتركة",
    admissionTypeFr: "Présélection rigoureuse + Concours d'admission",
    badgeColor: "bg-teal-600"
  },
  {
    id: 'iscae-maroc',
    nameAr: "المعهد العالي للتجارة وإدارة المقاولات",
    nameFr: "Institut Supérieur de Commerce et d'Administration des Entreprises (ISCAE)",
    acronym: "ISCAE",
    category: 'commerce',
    descriptionAr: "المعهد الأقدم والأكثر تميزاً في العلوم الإدارية والتسيير والمالية (الدار البيضاء والرباط).",
    descriptionFr: "Pôle d'excellence en management et finance reconnu à l'international.",
    cities: "Casablanca, Rabat",
    admissionTypeAr: "انتقاء أولي شديد الدقة + اختبارات كتابية ومقابلات شفوية",
    admissionTypeFr: "Sélection d'excellence + Épreuves écrites approfondies + Grand Oral",
    badgeColor: "bg-purple-600"
  },
  {
    id: 'cpge-maroc',
    nameAr: "الأقسام التحضيرية للمدارس العليا",
    nameFr: "Classes Préparatoires aux Grandes Écoles (CPGE)",
    acronym: "CPGE",
    category: 'classes_prepas',
    descriptionAr: "سلك الأقسام التحضيرية العلمية والتكنولوجية والاقتصادية (MPSI, PCSI, TSI, ECS) المؤهلة للمباراة الوطنية المشتركة CNC و CNAEM.",
    descriptionFr: "Filières préparatoires préparant aux grands concours d'ingénieurs (CNC) et de management (CNAEM).",
    cities: "Safi, Marrakech, Casablanca, Rabat, etc.",
    admissionTypeAr: "انتقاء بناءً على لوائح الترتيب الوزارية ومعدل المراقبة المستمرة والجهوي والوطني",
    admissionTypeFr: "Sélection sur dossier académique via la plateforme ministérielle",
    badgeColor: "bg-rose-600"
  }
];
