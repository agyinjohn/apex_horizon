import type { Bi } from "@/lib/i18n";

export type Programme = {
  slug: string;
  number: string;
  title: Bi;
  topic: Bi;
  topicKey: string;
  location: Bi;
  locationKey: string;
  market: Bi;
  dates: Bi;
  language: Bi;
  languageKey: string;
  format: Bi;
  formatKey: string;
  duration: Bi;
  price: Bi;
  availability: Bi;
  summary: Bi;
  overview: Bi;
  audience: Bi<string[]>;
  outcomes: Bi<string[]>;
  structure: Bi<{ label: string; detail: string }[]>;
  faculty: Bi<string[]>;
};

export const programmeTopics = [
  { key: "governance", label: { en: "Governance & Risk", fr: "Gouvernance et risques" } },
  { key: "leadership", label: { en: "Leadership & Strategy", fr: "Leadership et stratégie" } },
  { key: "financial", label: { en: "Financial Analysis", fr: "Analyse financière" } },
  { key: "technology", label: { en: "Technology & Digital", fr: "Technologie et numérique" } },
  { key: "transformation", label: { en: "Business Transformation", fr: "Transformation d'entreprise" } },
] satisfies { key: string; label: Bi }[];

export const programmeFormats = [
  { key: "in-person", label: { en: "In Person", fr: "En présentiel" } },
  { key: "online", label: { en: "Online", fr: "En ligne" } },
  { key: "hybrid", label: { en: "Hybrid", fr: "Hybride" } },
] satisfies { key: string; label: Bi }[];

export const programmeLanguages = [
  { key: "en", label: { en: "English", fr: "Anglais" } },
  { key: "fr", label: { en: "French", fr: "Français" } },
  { key: "both", label: { en: "French / English", fr: "Français / Anglais" } },
] satisfies { key: string; label: Bi }[];

export const programmeLocations = [
  { key: "accra", label: { en: "Accra, Ghana", fr: "Accra, Ghana" } },
  { key: "abidjan", label: { en: "Abidjan, Côte d'Ivoire", fr: "Abidjan, Côte d'Ivoire" } },
  { key: "lagos", label: { en: "Lagos, Nigeria", fr: "Lagos, Nigéria" } },
  { key: "virtual", label: { en: "Virtual", fr: "Virtuel" } },
] satisfies { key: string; label: Bi }[];

const enrolling: Bi = { en: "Places available", fr: "Places disponibles" };
const limited: Bi = { en: "Limited places", fr: "Places limitées" };
const waitlist: Bi = { en: "Waiting list", fr: "Liste d'attente" };

export const programmes: Programme[] = [
  {
    slug: "board-governance-director-effectiveness",
    number: "01",
    title: {
      en: "Board Governance & Director Effectiveness",
      fr: "Gouvernance du conseil et efficacité des administrateurs",
    },
    topic: { en: "Governance & Risk", fr: "Gouvernance et risques" },
    topicKey: "governance",
    location: { en: "Accra, Ghana", fr: "Accra, Ghana" },
    locationKey: "accra",
    market: { en: "Ghana", fr: "Ghana" },
    dates: { en: "17–18 November 2026", fr: "17–18 novembre 2026" },
    language: { en: "English", fr: "Anglais" },
    languageKey: "en",
    format: { en: "In Person", fr: "En présentiel" },
    formatKey: "in-person",
    duration: { en: "2 Days", fr: "2 jours" },
    price: { en: "GHS 4,500 per participant", fr: "4 500 GHS par participant" },
    availability: enrolling,
    summary: {
      en: "An intensive programme for directors and senior executives covering board effectiveness, governance responsibilities, risk oversight and decision-making.",
      fr: "Un programme intensif pour administrateurs et dirigeants seniors, consacré à l'efficacité du conseil, aux responsabilités de gouvernance, à la supervision des risques et à la prise de décision.",
    },
    overview: {
      en: "Boards are judged less on the policies they adopt than on the decisions they make under pressure. This programme works through the practical mechanics of board effectiveness — composition, information flow, committee structure and challenge — so that directors leave able to govern with rigour rather than ritual. Case material is drawn from listed and regulated entities across our markets.",
      fr: "Un conseil d'administration se juge moins à ses politiques qu'aux décisions qu'il prend sous pression. Ce programme traite la mécanique pratique de l'efficacité du conseil — composition, circulation de l'information, structure des comités et remise en question — afin que les administrateurs repartent capables de gouverner avec rigueur plutôt que par habitude. Les cas sont issus d'entités cotées et régulées de nos marchés.",
    },
    audience: {
      en: [
        "Non-executive and executive directors",
        "Board and committee chairs",
        "Company secretaries and governance officers",
        "Executives preparing for board appointments",
      ],
      fr: [
        "Administrateurs exécutifs et non exécutifs",
        "Présidents de conseil et de comités",
        "Secrétaires généraux et responsables de la gouvernance",
        "Cadres se préparant à des mandats d'administrateur",
      ],
    },
    outcomes: {
      en: [
        "Assess and strengthen board composition and dynamics",
        "Exercise informed oversight of strategy and risk",
        "Structure committee work to withstand regulatory scrutiny",
        "Challenge management constructively and effectively",
      ],
      fr: [
        "Évaluer et renforcer la composition et la dynamique du conseil",
        "Exercer une supervision éclairée de la stratégie et des risques",
        "Structurer les travaux des comités pour résister au contrôle réglementaire",
        "Challenger la direction de manière constructive et efficace",
      ],
    },
    structure: {
      en: [
        { label: "Module 1", detail: "The board's role: oversight versus management" },
        { label: "Module 2", detail: "Composition, independence and board dynamics" },
        { label: "Module 3", detail: "Risk oversight and committee effectiveness" },
        { label: "Module 4", detail: "Decision-making simulation and boardroom clinic" },
      ],
      fr: [
        { label: "Module 1", detail: "Le rôle du conseil : supervision et non gestion" },
        { label: "Module 2", detail: "Composition, indépendance et dynamique du conseil" },
        { label: "Module 3", detail: "Supervision des risques et efficacité des comités" },
        { label: "Module 4", detail: "Simulation de décision et clinique de conseil" },
      ],
    },
    faculty: {
      en: ["gthink Risk & Governance partners", "Guest board chairs"],
      fr: ["Associés Risques et gouvernance de gthink", "Présidents de conseil invités"],
    },
  },
  {
    slug: "cyber-risk-for-executives",
    number: "02",
    title: {
      en: "Cyber Risk for Executives",
      fr: "Cyber-risque pour dirigeants",
    },
    topic: { en: "Technology & Digital", fr: "Technologie et numérique" },
    topicKey: "technology",
    location: { en: "Virtual", fr: "Virtuel" },
    locationKey: "virtual",
    market: { en: "Multi-market", fr: "Multi-marchés" },
    dates: { en: "3 December 2026", fr: "3 décembre 2026" },
    language: { en: "English", fr: "Anglais" },
    languageKey: "en",
    format: { en: "Online", fr: "En ligne" },
    formatKey: "online",
    duration: { en: "Half Day", fr: "Demi-journée" },
    price: { en: "GHS 1,800 per participant", fr: "1 800 GHS par participant" },
    availability: limited,
    summary: {
      en: "Understand cyber risk from a leadership and governance perspective without requiring a technical background.",
      fr: "Comprendre le cyber-risque sous l'angle du leadership et de la gouvernance, sans prérequis technique.",
    },
    overview: {
      en: "Executives are increasingly accountable for cyber risk without being expected to understand the technology in detail. This half-day session gives non-technical leaders a working vocabulary, a way to question their technology teams intelligently, and a framework for deciding where cyber risk belongs on the board agenda.",
      fr: "Les dirigeants sont de plus en plus responsables du cyber-risque sans pour autant devoir en maîtriser la technique. Cette demi-journée donne aux responsables non techniques un vocabulaire opérationnel, une méthode pour interroger utilement leurs équipes technologiques et un cadre pour situer le cyber-risque à l'agenda du conseil.",
    },
    audience: {
      en: [
        "Board members and non-executive directors",
        "Chief executives and executive management",
        "Heads of function without a technology background",
      ],
      fr: [
        "Administrateurs et membres non exécutifs du conseil",
        "Directeurs généraux et direction générale",
        "Responsables fonctionnels sans formation technologique",
      ],
    },
    outcomes: {
      en: [
        "Ask sharper questions of technology and security teams",
        "Understand the board's role in cyber risk oversight",
        "Recognise the warning signs of inadequate preparedness",
        "Position cyber risk within the wider risk appetite",
      ],
      fr: [
        "Poser des questions plus pertinentes aux équipes technologiques et sécurité",
        "Comprendre le rôle du conseil dans la supervision du cyber-risque",
        "Repérer les signaux d'une préparation insuffisante",
        "Situer le cyber-risque dans l'appétence au risque globale",
      ],
    },
    structure: {
      en: [
        { label: "Session 1", detail: "Cyber risk in plain language" },
        { label: "Session 2", detail: "Governance, accountability and reporting" },
        { label: "Session 3", detail: "Incident scenario walkthrough" },
      ],
      fr: [
        { label: "Séance 1", detail: "Le cyber-risque en langage clair" },
        { label: "Séance 2", detail: "Gouvernance, responsabilité et reporting" },
        { label: "Séance 3", detail: "Étude de cas d'un incident" },
      ],
    },
    faculty: {
      en: ["gthink Technology Advisory practice", "Guest cyber-security practitioner"],
      fr: ["Pratique Conseil technologique de gthink", "Praticien en cybersécurité invité"],
    },
  },
  {
    slug: "financial-modelling-business-valuation",
    number: "03",
    title: {
      en: "Financial Modelling & Business Valuation",
      fr: "Modélisation financière et valorisation d'entreprise",
    },
    topic: { en: "Financial Analysis", fr: "Analyse financière" },
    topicKey: "financial",
    location: { en: "Accra, Ghana", fr: "Accra, Ghana" },
    locationKey: "accra",
    market: { en: "Ghana", fr: "Ghana" },
    dates: { en: "19–20 January 2027", fr: "19–20 janvier 2027" },
    language: { en: "English", fr: "Anglais" },
    languageKey: "en",
    format: { en: "In Person", fr: "En présentiel" },
    formatKey: "in-person",
    duration: { en: "2 Days", fr: "2 jours" },
    price: { en: "GHS 5,250 per participant", fr: "5 250 GHS par participant" },
    availability: enrolling,
    summary: {
      en: "Practical modelling and valuation techniques for finance, investment and corporate-development professionals.",
      fr: "Techniques pratiques de modélisation et de valorisation pour les professionnels de la finance, de l'investissement et du développement corporate.",
    },
    overview: {
      en: "Two days of hands-on model building and valuation practice, moving from a blank spreadsheet to a defensible valuation range. Participants build a working three-statement model, stress it against operating assumptions, and apply discounted cash flow and comparable-company methods to a live-style case.",
      fr: "Deux journées de construction de modèles et de pratique de la valorisation, d'une feuille de calcul vierge à une fourchette de valorisation défendable. Les participants construisent un modèle à trois états financiers, le mettent à l'épreuve d'hypothèses opérationnelles et appliquent les méthodes des flux de trésorerie actualisés et des comparables à un cas réaliste.",
    },
    audience: {
      en: [
        "Finance, investment and corporate-development professionals",
        "Credit and investment committee participants",
        "Analysts preparing for transaction-facing roles",
      ],
      fr: [
        "Professionnels de la finance, de l'investissement et du développement corporate",
        "Membres de comités de crédit et d'investissement",
        "Analystes se préparant à des fonctions transactionnelles",
      ],
    },
    outcomes: {
      en: [
        "Build an integrated three-statement financial model",
        "Apply discounted cash flow and multiples-based valuation",
        "Stress-test assumptions and identify key value drivers",
        "Present a valuation range with a defensible narrative",
      ],
      fr: [
        "Construire un modèle financier intégré à trois états",
        "Appliquer la valorisation par flux actualisés et par comparables",
        "Tester les hypothèses et identifier les principaux leviers de valeur",
        "Présenter une fourchette de valorisation argumentée",
      ],
    },
    structure: {
      en: [
        { label: "Module 1", detail: "Model architecture and the three statements" },
        { label: "Module 2", detail: "Operating assumptions and sensitivity" },
        { label: "Module 3", detail: "Discounted cash flow valuation" },
        { label: "Module 4", detail: "Comparable companies and transaction multiples" },
      ],
      fr: [
        { label: "Module 1", detail: "Architecture du modèle et les trois états financiers" },
        { label: "Module 2", detail: "Hypothèses opérationnelles et sensibilité" },
        { label: "Module 3", detail: "Valorisation par flux de trésorerie actualisés" },
        { label: "Module 4", detail: "Sociétés comparables et multiples de transaction" },
      ],
    },
    faculty: {
      en: ["gthink Transaction Advisory directors", "gthink Financial Advisory partners"],
      fr: ["Directeurs Conseil en transactions de gthink", "Associés Conseil financier de gthink"],
    },
  },
  {
    slug: "enterprise-risk-management",
    number: "04",
    title: {
      en: "Enterprise Risk Management",
      fr: "Gestion des risques d'entreprise",
    },
    topic: { en: "Governance & Risk", fr: "Gouvernance et risques" },
    topicKey: "governance",
    location: { en: "Abidjan, Côte d'Ivoire", fr: "Abidjan, Côte d'Ivoire" },
    locationKey: "abidjan",
    market: { en: "Côte d'Ivoire", fr: "Côte d'Ivoire" },
    dates: { en: "February 2027", fr: "Février 2027" },
    language: { en: "French / English", fr: "Français / Anglais" },
    languageKey: "both",
    format: { en: "In Person", fr: "En présentiel" },
    formatKey: "in-person",
    duration: { en: "2 Days", fr: "2 jours" },
    price: { en: "Contact for pricing", fr: "Nous consulter pour les tarifs" },
    availability: enrolling,
    summary: {
      en: "Practical frameworks for identifying, assessing and managing strategic and operational risk.",
      fr: "Des cadres pratiques pour identifier, évaluer et gérer les risques stratégiques et opérationnels.",
    },
    overview: {
      en: "Delivered bilingually in Abidjan for francophone and anglophone West African markets, this programme equips risk owners and senior managers with a coherent enterprise risk management framework — from risk identification through to appetite, escalation and board reporting — grounded in the regulatory realities of the region.",
      fr: "Animé de manière bilingue à Abidjan pour les marchés d'Afrique de l'Ouest francophone et anglophone, ce programme dote les responsables des risques et les cadres dirigeants d'un cadre cohérent de gestion des risques d'entreprise — de l'identification des risques jusqu'à l'appétence, l'escalade et le reporting au conseil — ancré dans les réalités réglementaires de la région.",
    },
    audience: {
      en: [
        "Chief risk officers and risk managers",
        "Internal audit and compliance leaders",
        "Senior managers with enterprise-wide accountability",
      ],
      fr: [
        "Directeurs des risques et responsables des risques",
        "Responsables de l'audit interne et de la conformité",
        "Cadres dirigeants ayant une responsabilité transversale",
      ],
    },
    outcomes: {
      en: [
        "Design an enterprise risk management framework fit for the organisation",
        "Set a risk appetite that is usable in daily decisions",
        "Structure risk reporting for executive and board audiences",
        "Embed risk ownership across business units",
      ],
      fr: [
        "Concevoir un cadre de gestion des risques adapté à l'organisation",
        "Fixer une appétence au risque utilisable au quotidien",
        "Structurer le reporting des risques pour la direction et le conseil",
        "Ancrer la responsabilité des risques dans les unités opérationnelles",
      ],
    },
    structure: {
      en: [
        { label: "Module 1", detail: "Enterprise risk management foundations" },
        { label: "Module 2", detail: "Risk identification and assessment" },
        { label: "Module 3", detail: "Risk appetite, escalation and reporting" },
        { label: "Module 4", detail: "Embedding ownership across the organisation" },
      ],
      fr: [
        { label: "Module 1", detail: "Fondamentaux de la gestion des risques d'entreprise" },
        { label: "Module 2", detail: "Identification et évaluation des risques" },
        { label: "Module 3", detail: "Appétence au risque, escalade et reporting" },
        { label: "Module 4", detail: "Ancrer la responsabilité dans l'organisation" },
      ],
    },
    faculty: {
      en: ["gthink Risk & Governance practice, Abidjan"],
      fr: ["Pratique Risques et gouvernance de gthink, Abidjan"],
    },
  },
  {
    slug: "leading-organisational-transformation",
    number: "05",
    title: {
      en: "Leading Organisational Transformation",
      fr: "Piloter la transformation organisationnelle",
    },
    topic: { en: "Business Transformation", fr: "Transformation d'entreprise" },
    topicKey: "transformation",
    location: { en: "Accra, Ghana", fr: "Accra, Ghana" },
    locationKey: "accra",
    market: { en: "Ghana", fr: "Ghana" },
    dates: { en: "11–12 February 2027", fr: "11–12 février 2027" },
    language: { en: "English", fr: "Anglais" },
    languageKey: "en",
    format: { en: "In Person", fr: "En présentiel" },
    formatKey: "in-person",
    duration: { en: "2 Days", fr: "2 jours" },
    price: { en: "GHS 5,200 per participant", fr: "5 200 GHS par participant" },
    availability: waitlist,
    summary: {
      en: "How senior teams design, sequence and sustain change that holds after the programme office closes.",
      fr: "Comment les équipes dirigeantes conçoivent, séquencent et pérennisent un changement qui tient après la fin du programme.",
    },
    overview: {
      en: "Transformation is decided in the operating detail: accountability, incentives, capability and pace. Over two days participants build a change architecture for their own organisation and pressure-test it with faculty and peers.",
      fr: "La transformation se joue dans le détail opérationnel : responsabilités, incitations, compétences et rythme. En deux jours, les participants construisent une architecture de changement pour leur organisation et la mettent à l'épreuve avec les intervenants et leurs pairs.",
    },
    audience: {
      en: [
        "Executive sponsors of change programmes",
        "Senior management and functional heads",
        "Programme and transformation directors",
      ],
      fr: [
        "Sponsors exécutifs de programmes de changement",
        "Direction générale et responsables fonctionnels",
        "Directeurs de programmes et de transformation",
      ],
    },
    outcomes: {
      en: [
        "Design a change architecture with clear accountability",
        "Sequence initiatives against capacity, not ambition",
        "Anticipate resistance and organisational fatigue",
        "Embed capability so gains outlast the programme",
      ],
      fr: [
        "Concevoir une architecture de changement aux responsabilités claires",
        "Séquencer les initiatives selon la capacité, non l'ambition",
        "Anticiper les résistances et la fatigue organisationnelle",
        "Ancrer les compétences pour que les gains durent",
      ],
    },
    structure: {
      en: [
        { label: "Module 1", detail: "Diagnosis and the case for change" },
        { label: "Module 2", detail: "Architecture, accountability and incentives" },
        { label: "Module 3", detail: "Capability, pace and communication" },
        { label: "Module 4", detail: "Peer review of participant plans" },
      ],
      fr: [
        { label: "Module 1", detail: "Diagnostic et argumentaire du changement" },
        { label: "Module 2", detail: "Architecture, responsabilités et incitations" },
        { label: "Module 3", detail: "Compétences, rythme et communication" },
        { label: "Module 4", detail: "Revue par les pairs des plans des participants" },
      ],
    },
    faculty: {
      en: ["gthink Strategy & Transformation partners"],
      fr: ["Associés Stratégie et transformation de gthink"],
    },
  },
  {
    slug: "strategic-decision-making-executives",
    number: "06",
    title: {
      en: "Strategic Decision-Making for Executives",
      fr: "Décision stratégique pour dirigeants",
    },
    topic: { en: "Leadership & Strategy", fr: "Leadership et stratégie" },
    topicKey: "leadership",
    location: { en: "Lagos, Nigeria", fr: "Lagos, Nigéria" },
    locationKey: "lagos",
    market: { en: "Nigeria", fr: "Nigéria" },
    dates: { en: "10–11 March 2027", fr: "10–11 mars 2027" },
    language: { en: "English", fr: "Anglais" },
    languageKey: "en",
    format: { en: "In Person", fr: "En présentiel" },
    formatKey: "in-person",
    duration: { en: "2 Days", fr: "2 jours" },
    price: { en: "USD 700 per participant", fr: "700 USD par participant" },
    availability: limited,
    summary: {
      en: "Two days on making consequential decisions earlier, with better evidence and clearer accountability.",
      fr: "Deux jours pour décider plus tôt, sur des bases plus solides et avec une responsabilité plus claire.",
    },
    overview: {
      en: "This programme examines how executive teams frame choices, test assumptions and decide under uncertainty. Participants work on structuring options, stress-testing evidence and building the internal discipline that allows an organisation to act before a situation becomes urgent.",
      fr: "Ce programme examine comment les équipes dirigeantes cadrent leurs choix, testent leurs hypothèses et décident en environnement incertain. Les participants travaillent la structuration des options, la mise à l'épreuve des données et la discipline interne qui permet d'agir avant l'urgence.",
    },
    audience: {
      en: [
        "Chief executives and general managers",
        "Executive committee members",
        "Senior managers preparing for executive roles",
      ],
      fr: [
        "Directeurs généraux et directeurs d'exploitation",
        "Membres de comités de direction",
        "Cadres supérieurs se préparant à des fonctions exécutives",
      ],
    },
    outcomes: {
      en: [
        "Frame decisions around the question that actually matters",
        "Separate evidence from assumption under time pressure",
        "Build option sets rather than binary choices",
        "Establish decision records that support accountability",
      ],
      fr: [
        "Cadrer les décisions autour de la question réellement déterminante",
        "Distinguer les faits des hypothèses sous contrainte de temps",
        "Construire des jeux d'options plutôt que des choix binaires",
        "Établir des traces de décision au service de la responsabilité",
      ],
    },
    structure: {
      en: [
        { label: "Module 1", detail: "Framing: the question behind the question" },
        { label: "Module 2", detail: "Evidence, assumption and market signal" },
        { label: "Module 3", detail: "Option design and trade-off analysis" },
        { label: "Module 4", detail: "Executive simulation" },
      ],
      fr: [
        { label: "Module 1", detail: "Cadrage : la question derrière la question" },
        { label: "Module 2", detail: "Données, hypothèses et signaux de marché" },
        { label: "Module 3", detail: "Conception d'options et analyse des compromis" },
        { label: "Module 4", detail: "Simulation exécutive" },
      ],
    },
    faculty: {
      en: ["gthink Strategy & Transformation partners", "Lagos market leadership"],
      fr: ["Associés Stratégie et transformation de gthink", "Direction du marché de Lagos"],
    },
  },
];

/** Ordered list of the next upcoming programmes, for use on landing/homepage sections. */
export const upcomingProgrammes = programmes.slice(0, 4);
