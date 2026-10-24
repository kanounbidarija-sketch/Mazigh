export interface ArticleItem {
  id: string;
  slug: string;
  titleAr: string;
  titleFr: string;
  categoryAr: string;
  categoryFr: string;
  date: string;
  readTimeAr: string;
  readTimeFr: string;
  excerptAr: string;
  excerptFr: string;
  image: string;
  contentAr: string[];
  contentFr: string[];
  tags: string[];
}

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'guide-medecine-2026',
    slug: 'guide-concours-medecine-maroc',
    titleAr: "الدليل الشامل لاجتياز مباريات كليات الطب والصيدلة وطب الأسنان بالمغرب",
    titleFr: "Guide complet pour réussir les concours de Médecine, Pharmacie et Dentaire au Maroc",
    categoryAr: "مباريات الطب والصحة",
    categoryFr: "Concours Santé & Médecine",
    date: "15 ماي 2026",
    readTimeAr: "5 دقائق قراءة",
    readTimeFr: "5 min de lecture",
    excerptAr: "كل ما تحتاج معرفته حول العتبات، نظام الأسئلة المتعددة الخيارات QCM، تقنيات إدارة الوقت، وطرق التدريب الفعالة مع مركز آفاق للاستشارات.",
    excerptFr: "Tout ce que vous devez savoir sur les seuils de présélection, les épreuves QCM, la gestion du temps et les méthodes gagnantes avec Les Horizons Consulting.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
    tags: ["Médecine", "Pharmacie", "Dentaire", "QCM", "آسفي"],
    contentAr: [
      "تعتبر مباراة كليات الطب والصيدلة وطب الأسنان من أكثر الاستحقاقات الأكاديمية تنافسية في المغرب. تتطلب هذه المباراة تحضيراً نوعياً يتجاوز مجرد الحفظ إلى الفهم المعمق والقدرة الفائقة على حل التمارين بدقة وسرعة.",
      "في مركز آفاق للاستشارات (Les Horizons Consulting) بآسفي، نعتمد على استراتيجية متكاملة تشمل: مراجعة دقيقة للمقررات الوزارية (علوم الحياة والأرض، الفيزياء، الكيمياء، والرياضيات)، التدريب على مئات النماذج المحينة، ومحاكاة ظروف الامتحان الواقعية.",
      "نصيحة الفريق البيداغوجي: ابدأ التحضير مبكراً ولا تترك المراجعة حتى صدور نتائج الدورة العادية للبكالوريا. التحكم في تقنيات استبعاد الخيارات الخاطئة وإدارة ضغط الدقائق الأولى هو مفتاحك للظفر بمقعد في كلية الطب."
    ],
    contentFr: [
      "Le concours commun d'accès aux Facultés de Médecine, de Pharmacie et de Médecine Dentaire requiert une rigueur méthodologique sans faille. La sélection repose sur la rapidité et la précision dans les 4 matières clés : SVT, Physique, Chimie et Mathématiques.",
      "Au centre Les Horizons Consulting à Safi, nous dispensons un programme d'entraînement intensif basé sur des centaines de QCM types, des astuces d'optimisation temporelle et des examens blancs hebdomadaires.",
      "Conseil de nos inspecteurs : La gestion du stress et la maîtrise du barème négatif font toute la différence entre un candidat moyen et un lauréat admis avec mention."
    ]
  },
  {
    id: 'secret-tafem-encg',
    slug: 'secrets-reussite-tafem-encg',
    titleAr: "أسرار التفوق في اختبار TAFEM لولوج المدارس الوطنية للتجارة والتسيير ENCG",
    titleFr: "Secrets de réussite au test TAFEM pour intégrer le réseau des ENCG",
    categoryAr: "التجارة والتسيير",
    categoryFr: "Commerce & Gestion",
    date: "02 ماي 2026",
    readTimeAr: "4 دقائق قراءة",
    readTimeFr: "4 min de lecture",
    excerptAr: "كيف تتدرب على أسئلة الذكاء، المنطق الرياضي، الثقافة العامة الاقتصادية، واللغة الفرنسية للحصول على نقطة تفوق في رائز TAFEM.",
    excerptFr: "Comment maîtriser la logique mathématique, la culture générale d'entreprise et l'expression française pour décrocher votre admission à l'ENCG.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
    tags: ["ENCG", "TAFEM", "Logique", "Commerce", "Gestion"],
    contentAr: [
      "يتميز اختبار TAFEM (Test d'Admissibilité à la Formation En Management) بنمطه الخاص الذي يختبر سرعة البديهة والقدرات التحليلية للمترشحين في أربعة مجالات: الاستدلال المنطقي والذاكرة، الرياضيات، الثقافة العامة، واللغة.",
      "تعتمد دوراتنا التحضيرية في مركز آفاق للاستشارات على تدريب تفاعلي يعود الطالب على استيعاب الأسئلة المعقدة وحلها في ثوان معدودة باستخدام استراتيجيات الاختزال الذهني والتحليل السريع.",
      "إحصائياتنا بمدينة آسفي تؤكد أن الطلبة الذين خضعوا لمحاكاة TAFEM الموقوتة بانتظام ترتفع نسبة قبولهم إلى أكثر من 92%."
    ],
    contentFr: [
      "Le test TAFEM mesure l'aptitude managériale, le sens logique et la vivacité d'esprit des bacheliers. La rapidité de traitement des questions est primordiale.",
      "Notre méthodologie à Safi intègre des simulations chronométrées, des fiches de synthèse en culture économique et un renforcement en raisonnement logique.",
      "Un entraînement régulier permet aux candidats d'acquérir les réflexes cognitifs nécessaires pour surclasser la concurrence."
    ]
  },
  {
    id: 'reussir-concours-ensa-ensam',
    slug: 'guide-concours-ingenieurs-ensa-ensam',
    titleAr: "دليلك الشامل لاجتياز مباريات مدارس المهندسين (ENSA و ENSAM)",
    titleFr: "Votre passeport pour intégrer les Écoles d'Ingénieurs ENSA et ENSAM",
    categoryAr: "مدارس المهندسين",
    categoryFr: "Écoles d'Ingénieurs",
    date: "20 أبريل 2026",
    readTimeAr: "6 دقائق قراءة",
    readTimeFr: "6 min de lecture",
    excerptAr: "المحاور الأساسية في الرياضيات والفيزياء، استراتيجيات حل أسئلة QCM المعقدة، والتحضير النفسي للمنافسة الشديدة.",
    excerptFr: "Les thèmes cruciaux en Mathématiques et Physique, la stratégie de réponse aux QCM complexes et la préparation mentale.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=80",
    tags: ["ENSA", "ENSAM", "Ingénierie", "Maths", "Physique"],
    contentAr: [
      "تشهد مباريات ولوج المدارس الوطنية للعلوم التطبيقية (ENSA) والمدارس الوطنية العليا للفنون والمهن (ENSAM) إقبالاً كبيراً من خيرة تلاميذ شعب العلوم الرياضية والعلوم التجريبية والتكنولوجية.",
      "يركز برنامج آفاق للاستشارات على تعميق المفاهيم الرياضية (التحليل، الجبر، المتتاليات، الاحتمالات) والفيزيائية (الميكانيك، الكهرباء، الموجات، التحولات الكيميائية)، مع تدريب حقيقي على التمارين النمطية ومسائل التفكير التركيبي.",
      "نوفر لتلاميذتنا في آسفي نماذج اختبارات موثوقة تغطي السنوات العشر الماضية مع التصحيح التفاعلي والشرح الدقيق لكل سؤال."
    ],
    contentFr: [
      "Les concours ENSA et ENSAM requièrent une parfaite maîtrise des outils mathématiques et des lois physiques du cycle secondaire qualifiant.",
      "Notre encadrement privilégie la résolution active, l'analyse dimensionnelle et les méthodes de vérification rapide des résultats.",
      "Chaque stagiaire bénéficie d'une évaluation continue et d'un plan de progression personnalisé avant le jour J."
    ]
  },
  {
    id: 'importance-langues-tcf-toefl',
    slug: 'certifications-internationales-langues-tcf-toefl',
    titleAr: "أهمية الشهادات اللغوية الدولية (TCF، DELF، TOEFL، IELTS) في القبول الأكاديمي والهجرة",
    titleFr: "L'importance des certifications linguistiques internationales dans les admissions académiques",
    categoryAr: "اللغات والتواصل",
    categoryFr: "Langues & Certifications",
    date: "10 أبريل 2026",
    readTimeAr: "4 دقائق قراءة",
    readTimeFr: "4 min de lecture",
    excerptAr: "لماذا لم يعد إتقان اللغات ترفاً، بل شرطاً أساسياً لملفات Campus France والدراسة بكندا والولايات المتحدة والمؤسسات المرموقة.",
    excerptFr: "Pourquoi la maîtrise certifiée des langues étrangères est devenue le passeport incontournable pour vos études à l'international.",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&auto=format&fit=crop&q=80",
    tags: ["TCF", "TOEFL", "IELTS", "Campus France", "Langues"],
    contentAr: [
      "أصبحت الشواهد الدولية للغات معياراً حاسماً للقبول في كبريات الجامعات العالمية، وكذا لبرامج الهجرة والتدريب المهني. فالحصول على شهادة TCF أو DELF بمستوى B2 أو C1 يفتح لك أبواب الجامعات الفرنسية والفرانكفونية بسهولة.",
      "في مركز آفاق للاستشارات، نوفر مختبر لغات تفاعلي، ومؤطرين حاصلين على شواهد دولية معتمدة لتدريبك على تقنيات الاستماع والفهم الكتابي والتعبير الشفوي المنظم.",
      "سواء كنت تستعد لملف Campus France أو المنح الكندية والأمريكية، فإننا نوفر لك دورات مكثفة تؤهلك لاجتياز الاختبار بنجاح من المرة الأولى."
    ],
    contentFr: [
      "Les certifications linguistiques standardisées sont aujourd'hui indispensables pour sécuriser une admission dans les universités européennes et nord-américaines.",
      "À Les Horizons Consulting Safi, nous préparons les candidats aux épreuves de compréhension orale, écrite et d'expression avec des supports audio-visuels immersifs.",
      "Nos modules personnalisés permettent d'atteindre les niveaux B2, C1 et C2 dans des délais optimisés."
    ]
  },
  {
    id: 'orientation-scolaire-projet-personnel',
    slug: 'reussir-orientation-scolaire-projet-personnel',
    titleAr: "التوجيه المدرسي وبناء المشروع الشخصي للتلميذ: دليلك لتفادي الاختيار العشوائي",
    titleFr: "Orientation scolaire et construction du projet personnel : guide pratique pour les lycéens",
    categoryAr: "التوجيه والاستشارة",
    categoryFr: "Orientation Scolaire",
    date: "25 مارس 2026",
    readTimeAr: "5 دقائق قراءة",
    readTimeFr: "5 min de lecture",
    excerptAr: "كيف تكتشف ميولك وقدراتك الحقيقية وتختار الشعبة الدراسية المناسبة لآفاق سوق الشغل بالمغرب والدول المتقدمة.",
    excerptFr: "Comment explorer vos aptitudes, identifier vos motivations profondes et choisir la filière adaptée à vos ambitions professionnelles.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80",
    tags: ["Orientation", "Projet Personnel", "Baccaleuréat", "Conseil"],
    contentAr: [
      "يعاني العديد من التلاميذ من الحيرة عند اختيار مسارهم الدراسي بعد الثالثة إعدادي، الجذع المشترك، أو بعد نيل شهادة البكالوريا. الاختيار غير الموفق قد يكلف التلميذ سنوات من التعثر والإحباط.",
      "يقدم مركز آفاق للاستشارات بآسفي مسارين متميزين في التوجيه: المسار الفردي الذي يعتمد على روائز نفسية وتوجيهية موجهة ومقابلات شخصية، والمسار الجماعي الذي يشمل ورشات المنهجية وزيارات ميدانية ومحاكاة المقابلات الشفوية.",
      "هدفنا هو تمكين كل تلميذ من بناء مشروعه الشخصي والمهني عن بينة ومعرفة حقيقية بمتطلبات المهن الصاعدة."
    ],
    contentFr: [
      "L'orientation scolaire réussie est le fondement de toute trajectoire d'excellence. Elle évite les réorientations tardives et renforce la motivation de l'élève.",
      "Notre démarche associe tests psychométriques validés, bilans de compétences et entretiens individuels approfondis avec nos spécialistes en psychopédagogie.",
      "Nous accompagnons les familles pour faire converger les aspirations du jeune, son potentiel réel et les opportunités du marché du travail."
    ]
  }
];
