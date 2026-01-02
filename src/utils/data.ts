import { BarChart3, Bot, Brain, Code, FileText, Rocket, Settings, Sparkles, Target } from "lucide-react";

const servicesFR = [
  {
    number: "01",
    title: "Automatisation des tâches métier",
    description:
      "Intégrez des workflows intelligents qui déclenchent des actions automatiques basées sur les données et interactions AI, pour optimiser vos opérations.",
    icon: Settings,
    color: "from-purple-500 to-purple-600",
    advantages: [
      "Réduction du temps passé sur les tâches répétitives",
      "Amélioration de la productivité globale",
      "Personnalisation des processus métier selon vos besoins",
    ],
    impact: [
      "Fluidification des opérations internes",
      "Meilleure réactivité face aux besoins clients",
      "Optimisation des coûts et ressources",
    ],
  },
  {
    number: "02",
    title: "Analyse et catégorisation de données",
    description:
      "Analysez le sentiment, catégorisez automatiquement vos retours clients, emails ou contenus, et obtenez des insights actionnables.",
    icon: BarChart3,
    color: "from-blue-500 to-blue-600",
    advantages: [
      "Meilleure compréhension des besoins clients",
      "Détection rapide des tendances et problèmes",
      "Automatisation des processus d'analyse qualitative",
    ],
    impact: [
      "Décisions plus rapides et éclairées",
      "Amélioration continue des produits et services",
      "Réduction des coûts liés aux enquêtes manuelles",
    ],
  },
  {
    number: "03",
    title: "Résumé et extraction de documents",
    description:
      "Résumez automatiquement des documents PDF, factures, contrats, et extrayez les données clés pour simplifier vos processus métier.",
    icon: FileText,
    color: "from-emerald-500 to-emerald-600",
    advantages: [
      "Gain d'efficacité dans la gestion documentaire",
      "Réduction des erreurs humaines dans l'extraction",
      "Intégration fluide avec vos bases de données",
    ],
    impact: [
      "Optimisation des flux administratifs et financiers",
      "Accélération des cycles de validation",
      "Meilleure traçabilité et conformité",
    ],
  },
  {
    number: "04",
    title: "Génération de contenu automatisée",
    description:
      "Créez automatiquement des articles, descriptions produits, newsletters ou posts sociaux en quelques clics grâce à la génération de texte avancée.",
    icon: Sparkles,
    color: "from-pink-500 to-pink-600",
    advantages: [
      "Gain de temps considérable pour la production de contenu",
      "Contenu optimisé SEO et personnalisé",
      "Adapté à différents formats et styles rédactionnels",
    ],
    impact: [
      "Augmentation de la visibilité en ligne",
      "Renforcement de l'autorité et crédibilité de la marque",
      "Meilleure conversion grâce à des messages ciblés",
    ],
  },
  {
    number: "05",
    title: "Chatbots AI intégrés",
    description:
      "Automatisez le support client, la gestion des FAQ, et l'interaction utilisateur grâce à des chatbots basés sur GPT-5, DeepSeek ou Claude.",
    icon: Bot,
    color: "from-indigo-500 to-indigo-600",
    advantages: [
      "Réponse instantanée 24/7 à vos clients",
      "Réduction des coûts de support humain",
      "Personnalisation selon le contexte métier",
    ],
    impact: [
      "Amélioration de la satisfaction client",
      "Augmentation du taux de conversion via une meilleure assistance",
      "Libération de ressources pour d'autres tâches critiques",
    ],
  },
];

const philosophyFR = [
  {
    number: "01",
    title: "Approche centrée besoins",
    description:
      "Notre approche centrée sur vos besoins métier garantit un impact réel sur votre productivité, satisfaction client, et croissance digitale.",
    icon: Target,
    color: "from-cyan-500 to-blue-500",
  },
  {
    number: "02",
    title: "Solutions robustes et évolutives",
    description:
      "Nous développons des solutions robustes et évolutives qui s'adaptent à la croissance de votre entreprise et aux évolutions technologiques.",
    icon: Rocket,
    color: "from-violet-500 to-purple-500",
  },
  {
    number: "03",
    title: "Technologies avancées",
    description:
      "Integration des technologies AI les plus avancées incluant GPT-5, DeepSeek, Claude pour des performances optimales.",
    icon: Brain,
    color: "from-emerald-500 to-teal-500",
  },
  {
    number: "04",
    title: "Expertise Laravel/Next.js/Node.js",
    description:
      "Chez Devti, nous combinons expertise en développement Laravel/Next.js/Node.js et intégration des technologies AI les plus avancées pour offrir des solutions sur mesure.",
    icon: Code,
    color: "from-orange-500 to-red-500",
  },
];

const faqsFR = [
  {
    question:
      "Qu'est-ce que Devti AI apporte de plus que les autres plateformes AI ?",
    answer:
      "Devti AI se distingue par notre expertise unique en développement Laravel/Next.js combinée à l'intégration des technologies AI les plus avancées. Notre approche sur-mesure garantit des solutions parfaitement adaptées à vos besoins métier spécifiques, avec un support local depuis Tanger et une compréhension approfondie du marché marocain et africain.",
  },
  {
    question:
      "Combien de temps faut-il pour intégrer une solution AI dans mon application ?",
    answer:
      "Le délai d'intégration varie selon la complexité de votre projet. Pour une intégration basique (chatbot ou analyse de texte), comptez 2-4 semaines. Pour des solutions plus complexes avec automatisation avancée, prévoyez 6-12 semaines. Nous proposons toujours une phase de démonstration rapide pour valider l'approche avant le déploiement complet.",
  },
  {
    question: "Comment sont sécurisées les données traitées par Devti AI ?",
    answer:
      "La sécurité de vos données est notre priorité absolue. Nous utilisons un chiffrement de bout en bout, des protocoles de sécurité conformes aux standards internationaux (ISO 27001), et pouvons déployer les solutions sur vos propres serveurs si nécessaire. Aucune donnée sensible n'est conservée sans votre autorisation explicite.",
  },
  {
    question:
      "Puis-je personnaliser les fonctionnalités AI selon mon secteur d'activité ?",
    answer:
      "Absolument ! Toutes nos solutions sont développées sur-mesure pour votre secteur d'activité. Que vous soyez dans l'e-commerce, la finance, la santé, ou l'industrie, nous adaptons les modèles AI, les workflows, et les interfaces selon vos processus métier spécifiques et votre vocabulaire technique.",
  },
  {
    question: "Quel support offrez-vous après le déploiement ?",
    answer:
      "Nous proposons un support complet incluant : maintenance technique 24/7, mises à jour régulières des modèles AI, formation de vos équipes, optimisation continue des performances, et évolution des fonctionnalités selon vos nouveaux besoins. Notre équipe basée à Tanger assure un support réactif dans votre fuseau horaire.",
  },
];

const servicesEN = [
  {
    number: "01",
    title: "Business Task Automation",
    description:
      "Integrate intelligent workflows that trigger automatic actions based on data and AI interactions to optimize your operations.",
    icon: Settings,
    color: "from-purple-500 to-purple-600",
    advantages: [
      "Reduced time spent on repetitive tasks",
      "Improved overall productivity",
      "Customized business processes tailored to your needs",
    ],
    impact: [
      "Smoother internal operations",
      "Better responsiveness to customer needs",
      "Optimized costs and resource allocation",
    ],
  },
  {
    number: "02",
    title: "Text Analysis and Categorization",
    description:
      "Analyze sentiment, automatically categorize customer feedback, emails, or content, and gain actionable insights.",
    icon: BarChart3,
    color: "from-blue-500 to-blue-600",
    advantages: [
      "Better understanding of customer needs",
      "Quick detection of trends and issues",
      "Automation of qualitative analysis processes",
    ],
    impact: [
      "Faster, more informed decision-making",
      "Continuous improvement of products and services",
      "Reduced costs from manual surveys",
    ],
  },
  {
    number: "03",
    title: "Document Summarization and Extraction",
    description:
      "Automatically summarize PDFs, invoices, and contracts, and extract key data to simplify your business processes.",
    icon: FileText,
    color: "from-emerald-500 to-emerald-600",
    advantages: [
      "Increased efficiency in document management",
      "Reduced human error in data extraction",
      "Seamless integration with your databases",
    ],
    impact: [
      "Optimized administrative and financial workflows",
      "Faster validation cycles",
      "Improved traceability and compliance",
    ],
  },
  {
    number: "04",
    title: "Automated Content Generation",
    description:
      "Automatically create articles, product descriptions, newsletters, or social posts in just a few clicks using advanced text generation.",
    icon: Sparkles,
    color: "from-pink-500 to-pink-600",
    advantages: [
      "Significant time savings on content production",
      "SEO-optimized and personalized content",
      "Adaptable to different formats and writing styles",
    ],
    impact: [
      "Increased online visibility",
      "Enhanced brand authority and credibility",
      "Better conversion through targeted messaging",
    ],
  },
  {
    number: "05",
    title: "Integrated AI Chatbots",
    description:
      "Automate customer support, FAQ management, and user interaction with chatbots powered by GPT-5, DeepSeek, or Claude.",
    icon: Bot,
    color: "from-indigo-500 to-indigo-600",
    advantages: [
      "24/7 instant response for your clients",
      "Reduced human support costs",
      "Context-aware customization based on your business",
    ],
    impact: [
      "Improved customer satisfaction",
      "Higher conversion rates through better assistance",
      "Freed up resources for other critical tasks",
    ],
  },
];

const philosophyEN = [
  {
    number: "01",
    title: "Needs-Centered Approach",
    description:
      "Our approach is focused on your business needs to ensure a real impact on productivity, customer satisfaction, and digital growth.",
    icon: Target,
    color: "from-cyan-500 to-blue-500",
  },
  {
    number: "02",
    title: "Robust and Scalable Solutions",
    description:
      "We build robust and scalable solutions that evolve with your business growth and technological advancements.",
    icon: Rocket,
    color: "from-violet-500 to-purple-500",
  },
  {
    number: "03",
    title: "Advanced Technologies",
    description:
      "Integration of the most advanced AI technologies including GPT-5, DeepSeek, and Claude to deliver optimal performance.",
    icon: Brain,
    color: "from-emerald-500 to-teal-500",
  },
  {
    number: "04",
    title: "Laravel/Next.js/Node.js Expertise",
    description:
      "At Devti, we combine expertise in Laravel/Next.js/Node.js development with the integration of cutting-edge AI technologies to deliver tailor-made solutions.",
    icon: Code,
    color: "from-orange-500 to-red-500",
  },
];

const faqsEN = [
  {
    question: "What makes Devti AI different from other AI platforms?",
    answer:
      "Devti AI stands out through our unique expertise in Laravel/Next.js development combined with the integration of cutting-edge AI technologies. Our tailor-made approach ensures solutions that are perfectly adapted to your specific business needs, with local support from Tangier and deep knowledge of the Moroccan and African markets.",
  },
  {
    question: "How long does it take to integrate an AI solution into my application?",
    answer:
      "The integration timeline depends on the complexity of your project. For basic features (like a chatbot or text analysis), expect 2–4 weeks. For more advanced solutions with automation, plan for 6–12 weeks. We always offer a quick demo phase to validate the approach before full deployment.",
  },
  {
    question: "How is the data processed by Devti AI secured?",
    answer:
      "Data security is our top priority. We use end-to-end encryption, security protocols aligned with international standards (ISO 27001), and can deploy solutions on your own servers if needed. No sensitive data is stored without your explicit consent.",
  },
  {
    question: "Can AI features be customized to my industry?",
    answer:
      "Absolutely! All our solutions are tailor-made for your industry. Whether you’re in e-commerce, finance, healthcare, or manufacturing, we adapt AI models, workflows, and interfaces to your specific business processes and technical vocabulary.",
  },
  {
    question: "What support do you offer after deployment?",
    answer:
      "We offer full support including: 24/7 technical maintenance, regular updates to AI models, team training, continuous performance optimization, and feature upgrades based on your evolving needs. Our Tangier-based team ensures responsive support in your time zone.",
  },
];

export { servicesFR, philosophyFR, faqsFR, servicesEN, philosophyEN, faqsEN };
