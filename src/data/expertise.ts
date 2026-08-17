import type { Bi } from "@/lib/i18n";

export type Expertise = {
  slug: string;
  number: string;
  title: Bi;
  summary: Bi;
  overview: Bi;
  capabilities: Bi<string[]>;
};

export const expertise: Expertise[] = [
  {
    slug: "strategy-transformation",
    number: "01",
    title: { en: "Strategy & Transformation", fr: "Stratégie & transformation" },
    summary: {
      en: "Helping leadership teams anticipate change, challenge assumptions and position their organisations for what comes next.",
      fr: "Aider les équipes dirigeantes à anticiper le changement, éprouver leurs hypothèses et positionner leur organisation pour la suite.",
    },
    overview: {
      en: "We work with boards and executive teams on the questions that set direction: where to compete, how to enter, what to build, and what to change. Our work combines market evidence with a realistic view of organisational capability, so that strategy converts into execution rather than remaining a document.",
      fr: "Nous accompagnons conseils d'administration et comités de direction sur les questions qui déterminent la trajectoire : où concourir, comment entrer, quoi construire et quoi changer. Nos travaux associent des données de marché à une lecture réaliste des capacités internes, afin que la stratégie se traduise en exécution plutôt qu'en document.",
    },
    capabilities: {
      en: [
        "Corporate and growth strategy",
        "Market-entry and expansion planning",
        "Operating-model design",
        "Performance improvement programmes",
        "Post-merger integration",
      ],
      fr: [
        "Stratégie d'entreprise et de croissance",
        "Planification d'entrée et d'expansion",
        "Conception du modèle opérationnel",
        "Programmes d'amélioration de la performance",
        "Intégration post-acquisition",
      ],
    },
  },
  {
    slug: "transaction-advisory",
    number: "02",
    title: { en: "Transaction Advisory", fr: "Conseil en transactions" },
    summary: {
      en: "Independent analysis supporting complex transactions, investment decisions and due diligence.",
      fr: "Une analyse indépendante au service des transactions complexes, des décisions d'investissement et de la due diligence.",
    },
    overview: {
      en: "Transactions in African markets reward preparation. We support investors, corporates and institutions from opportunity assessment through diligence, structuring and completion, with particular attention to the commercial assumptions that determine whether value is realised.",
      fr: "Les transactions sur les marchés africains récompensent la préparation. Nous accompagnons investisseurs, entreprises et institutions de l'évaluation de l'opportunité à la due diligence, la structuration et la réalisation, avec une attention particulière aux hypothèses commerciales qui déterminent la création de valeur.",
    },
    capabilities: {
      en: [
        "Commercial and financial due diligence",
        "Buy-side and sell-side advisory",
        "Capital raising support",
        "Valuation and pricing analysis",
        "Transaction readiness",
      ],
      fr: [
        "Due diligence commerciale et financière",
        "Conseil à l'achat et à la vente",
        "Accompagnement des levées de capitaux",
        "Évaluation et analyse de prix",
        "Préparation à la transaction",
      ],
    },
  },
  {
    slug: "risk-governance",
    number: "03",
    title: { en: "Risk & Governance", fr: "Risques & gouvernance" },
    summary: {
      en: "Helping organisations strengthen governance, risk management, internal controls and regulatory readiness.",
      fr: "Aider les organisations à renforcer leur gouvernance, leur gestion des risques, leur contrôle interne et leur préparation réglementaire.",
    },
    overview: {
      en: "Good governance is a competitive advantage in markets where capital is selective. We help boards, executives and public institutions clarify accountability, strengthen control environments and build risk frameworks proportionate to their strategy.",
      fr: "Une bonne gouvernance constitue un avantage concurrentiel sur des marchés où le capital est sélectif. Nous aidons conseils, dirigeants et institutions publiques à clarifier les responsabilités, renforcer le contrôle interne et bâtir des dispositifs de risque proportionnés à leur stratégie.",
    },
    capabilities: {
      en: [
        "Board and governance reviews",
        "Enterprise risk frameworks",
        "Internal control assessment",
        "Regulatory and compliance readiness",
        "Institutional strengthening",
      ],
      fr: [
        "Revues de gouvernance et de conseil",
        "Cadres de gestion des risques",
        "Évaluation du contrôle interne",
        "Préparation réglementaire et conformité",
        "Renforcement institutionnel",
      ],
    },
  },
  {
    slug: "business-financial-advisory",
    number: "04",
    title: { en: "Business & Financial Advisory", fr: "Conseil financier & d'entreprise" },
    summary: {
      en: "Supporting valuation, modelling, financial analysis and performance improvement.",
      fr: "Accompagner l'évaluation, la modélisation, l'analyse financière et l'amélioration de la performance.",
    },
    overview: {
      en: "Decisions are only as good as the numbers behind them. Our teams build and review financial models, test assumptions, value assets and businesses, and translate financial analysis into recommendations management can act on.",
      fr: "Une décision ne vaut que par les chiffres qui la fondent. Nos équipes construisent et revoient les modèles financiers, testent les hypothèses, évaluent actifs et entreprises, et traduisent l'analyse financière en recommandations actionnables.",
    },
    capabilities: {
      en: [
        "Business and asset valuation",
        "Financial modelling and model review",
        "Feasibility and bankability studies",
        "Working-capital and cost analysis",
        "Management reporting design",
      ],
      fr: [
        "Évaluation d'entreprises et d'actifs",
        "Modélisation financière et revue de modèles",
        "Études de faisabilité et de bancabilité",
        "Analyse du besoin en fonds de roulement et des coûts",
        "Conception du reporting de gestion",
      ],
    },
  },
  {
    slug: "technology-digital",
    number: "05",
    title: {
      en: "Technology & Digital Transformation",
      fr: "Technologie & transformation numérique",
    },
    summary: {
      en: "Helping organisations adopt technology while managing operational, information, governance and regulatory considerations.",
      fr: "Aider les organisations à adopter la technologie en maîtrisant les enjeux opérationnels, informationnels, de gouvernance et de conformité.",
    },
    overview: {
      en: "Technology programmes succeed when they are led as business change. We help organisations prioritise investment, design target processes and operating models, select platforms objectively and govern delivery to the outcomes that matter.",
      fr: "Les programmes technologiques réussissent lorsqu'ils sont pilotés comme un changement d'entreprise. Nous aidons à prioriser les investissements, concevoir les processus et modèles cibles, sélectionner les plateformes de manière objective et piloter la mise en œuvre.",
    },
    capabilities: {
      en: [
        "Digital strategy and roadmaps",
        "Process and operating-model redesign",
        "Technology selection and vendor assessment",
        "Data and reporting capability",
        "Programme governance and assurance",
      ],
      fr: [
        "Stratégie et feuilles de route numériques",
        "Refonte des processus et du modèle opérationnel",
        "Sélection technologique et évaluation des prestataires",
        "Capacités données et reporting",
        "Gouvernance et assurance de programme",
      ],
    },
  },
  {
    slug: "research-market-intelligence",
    number: "06",
    title: { en: "Research & Market Intelligence", fr: "Études & intelligence de marché" },
    summary: {
      en: "Providing decision-grade research on markets, sectors and opportunities.",
      fr: "Produire des études de qualité décisionnelle sur les marchés, secteurs et opportunités.",
    },
    overview: {
      en: "Reliable market data is scarce in many African markets. We combine primary research, field interviews and structured analysis to produce evidence our clients can defend in an investment committee or a board meeting.",
      fr: "Les données de marché fiables sont rares sur de nombreux marchés africains. Nous combinons recherche primaire, entretiens de terrain et analyse structurée pour produire des éléments défendables devant un comité d'investissement ou un conseil.",
    },
    capabilities: {
      en: [
        "Market sizing and demand analysis",
        "Competitive and pricing intelligence",
        "Customer and stakeholder research",
        "Sector and country studies",
        "Investment landscape mapping",
      ],
      fr: [
        "Dimensionnement de marché et analyse de la demande",
        "Intelligence concurrentielle et tarifaire",
        "Études clients et parties prenantes",
        "Études sectorielles et pays",
        "Cartographie du paysage d'investissement",
      ],
    },
  },
];

export const expertiseBySlug = (slug: string) => expertise.find((e) => e.slug === slug);
