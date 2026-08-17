import type { Bi } from "@/lib/i18n";
import heroDistrict from "@/assets/hero-district.jpg";
import boardroom from "@/assets/story-boardroom.jpg";
import port from "@/assets/insight-featured.jpg";
import accra from "@/assets/accra.jpg";
import abidjan from "@/assets/abidjan.jpg";
import evening from "@/assets/cta-evening.jpg";

export type Industry = {
  slug: string;
  number: string;
  name: Bi;
  overview: Bi;
  image: string;
  imageAlt: Bi;
  expertiseSlugs: string[];
  issues: Bi<string[]>;
  howWeHelp: Bi<string[]>;
};

export const industries: Industry[] = [
  {
    slug: "financial-services",
    number: "01",
    name: { en: "Financial Services", fr: "Services financiers" },
    overview: {
      en: "Banks, insurers, asset managers and financial-technology providers operating in markets where regulation, capital and customer expectations are all shifting quickly.",
      fr: "Banques, assureurs, gestionnaires d'actifs et acteurs de la technologie financière opérant sur des marchés où réglementation, capital et attentes clients évoluent rapidement.",
    },
    image: boardroom,
    imageAlt: {
      en: "Corporate boardroom overlooking a city skyline at dusk",
      fr: "Salle de conseil surplombant une skyline urbaine au crépuscule",
    },
    expertiseSlugs: ["strategy-transformation", "risk-governance", "technology-digital"],
    issues: {
      en: ['Tightening capital requirements and regulatory scrutiny', 'Digital-channel competition from fintech entrants', 'Rising expectations around governance and disclosure'],
      fr: ['Durcissement des exigences en capital et de la supervision réglementaire', 'Concurrence des acteurs fintech sur les canaux numériques', 'Attentes croissantes en matière de gouvernance et de transparence'],
    },
    howWeHelp: {
      en: ['Strategic and operating-model reviews for banks and insurers', 'Regulatory and governance readiness assessments', 'Digital-channel and technology transformation support'],
      fr: ['Revues stratégiques et du modèle opérationnel pour banques et assureurs', 'Évaluations de préparation réglementaire et de gouvernance', 'Accompagnement de la transformation numérique et technologique'],
    },
  },
  {
    slug: "real-estate-infrastructure",
    number: "02",
    name: { en: "Real Estate & Infrastructure", fr: "Immobilier & infrastructures" },
    overview: {
      en: "Developers, investors and public bodies delivering commercial property, mixed-use schemes and economic infrastructure across the region.",
      fr: "Promoteurs, investisseurs et institutions publiques réalisant des actifs commerciaux, des projets mixtes et des infrastructures économiques dans la région.",
    },
    image: heroDistrict,
    imageAlt: {
      en: "Aerial view of a modern commercial district with a high-rise office tower",
      fr: "Vue aérienne d'un quartier d'affaires moderne avec une tour de bureaux",
    },
    expertiseSlugs: [
      "transaction-advisory",
      "business-financial-advisory",
      "research-market-intelligence",
    ],
    issues: {
      en: ['Financing costs and currency risk on long-dated assets', 'Uncertain demand and absorption assumptions', 'Delivery risk across construction and permitting'],
      fr: ['Coûts de financement et risque de change sur des actifs de long terme', "Incertitude des hypothèses de demande et d'absorption", "Risques d'exécution liés à la construction et aux autorisations"],
    },
    howWeHelp: {
      en: ['Independent commercial and financial due diligence', 'Development and valuation model review', 'Market assessment for financing and investment decisions'],
      fr: ['Due diligence commerciale et financière indépendante', "Revue des modèles de développement et d'évaluation", "Études de marché à l'appui des décisions de financement et d'investissement"],
    },
  },
  {
    slug: "consumer-retail",
    number: "03",
    name: { en: "Consumer & Retail", fr: "Consommation & distribution" },
    overview: {
      en: "Consumer brands, distributors and retail operators building presence across Anglophone and Francophone markets with very different route-to-market realities.",
      fr: "Marques de consommation, distributeurs et enseignes construisant leur présence sur des marchés anglophones et francophones aux réalités de distribution très différentes.",
    },
    image: accra,
    imageAlt: {
      en: "Commercial street in Accra with modern buildings",
      fr: "Artère commerciale d'Accra avec des immeubles modernes",
    },
    expertiseSlugs: ["research-market-intelligence", "strategy-transformation"],
    issues: {
      en: ['Fragmented distribution and route-to-market complexity', 'Divergent consumer behaviour across Anglophone and Francophone markets', 'Margin pressure from rising input and logistics costs'],
      fr: ['Fragmentation de la distribution et complexité du routage vers le marché', 'Comportements des consommateurs divergents entre marchés anglophones et francophones', "Pression sur les marges liée à la hausse des coûts d'intrants et de logistique"],
    },
    howWeHelp: {
      en: ['Market-entry and distribution strategy', 'Store and channel profitability reviews', 'Pricing and demand research'],
      fr: ["Stratégie d'entrée sur le marché et de distribution", 'Revues de rentabilité par point de vente et par canal', 'Études de tarification et de demande'],
    },
  },
  {
    slug: "energy-natural-resources",
    number: "04",
    name: { en: "Energy & Natural Resources", fr: "Énergie & ressources naturelles" },
    overview: {
      en: "Power, renewables, oil and gas, and mining participants weighing capital allocation against long asset lives and evolving policy frameworks.",
      fr: "Acteurs de l'électricité, des renouvelables, du pétrole et gaz et des mines arbitrant leurs allocations de capital face à des actifs de long terme et des politiques évolutives.",
    },
    image: port,
    imageAlt: {
      en: "Aerial view of a port and industrial terminal at sunrise",
      fr: "Vue aérienne d'un port et d'un terminal industriel au lever du jour",
    },
    expertiseSlugs: ["transaction-advisory", "business-financial-advisory"],
    issues: {
      en: ['Long asset lives set against shifting policy and tariff frameworks', 'Offtake and counterparty reliability', 'Capital discipline in a higher cost-of-capital environment'],
      fr: ['Durée de vie longue des actifs face à des cadres tarifaires et politiques évolutifs', 'Fiabilité des acheteurs et des contreparties', 'Discipline de capital dans un contexte de coût du capital plus élevé'],
    },
    howWeHelp: {
      en: ['Commercial and financial assessment of investment opportunities', 'Counterparty and tariff-framework analysis', 'Returns modelling under stress scenarios'],
      fr: ["Évaluation commerciale et financière des opportunités d'investissement", 'Analyse des contreparties et des cadres tarifaires', 'Modélisation des rendements en scénarios de stress'],
    },
  },
  {
    slug: "technology-telecommunications",
    number: "05",
    name: { en: "Technology & Telecommunications", fr: "Technologie & télécommunications" },
    overview: {
      en: "Operators, platforms and technology providers scaling in markets where infrastructure, payments and regulation shape what is commercially possible.",
      fr: "Opérateurs, plateformes et fournisseurs technologiques se développant sur des marchés où infrastructures, paiements et réglementation déterminent le possible.",
    },
    image: evening,
    imageAlt: {
      en: "Illuminated office towers in a city business district at night",
      fr: "Tours de bureaux illuminées dans un quartier d'affaires la nuit",
    },
    expertiseSlugs: ["technology-digital", "strategy-transformation"],
    issues: {
      en: ['Infrastructure and payments constraints shaping what is commercially possible', 'Overlapping digital and traditional channels raising cost to serve', 'Rapid platform and vendor change'],
      fr: ["Contraintes d'infrastructures et de paiements qui déterminent le possible commercial", 'Chevauchement des canaux numériques et traditionnels augmentant le coût de service', 'Évolution rapide des plateformes et des prestataires'],
    },
    howWeHelp: {
      en: ['Digital strategy and channel architecture review', 'Technology selection and vendor assessment', 'Operating-model redesign around customer journeys'],
      fr: ["Revue de la stratégie numérique et de l'architecture des canaux", 'Sélection technologique et évaluation des prestataires', 'Refonte du modèle opérationnel autour des parcours clients'],
    },
  },
  {
    slug: "public-sector-development",
    number: "06",
    name: { en: "Public Sector & Development", fr: "Secteur public & développement" },
    overview: {
      en: "Ministries, agencies, development finance institutions and programme implementers who need evidence, governance and delivery discipline.",
      fr: "Ministères, agences, institutions de financement du développement et opérateurs de programmes ayant besoin de données, de gouvernance et de discipline d'exécution.",
    },
    image: abidjan,
    imageAlt: {
      en: "Abidjan skyline seen across the lagoon",
      fr: "Skyline d'Abidjan vue depuis la lagune",
    },
    expertiseSlugs: ["research-market-intelligence", "risk-governance"],
    issues: {
      en: ['Limited comparable data to support prioritisation', 'Competing stakeholder expectations across a long project pipeline', 'Governance and delivery discipline required by financiers'],
      fr: ['Données comparables limitées pour appuyer la priorisation', 'Attentes divergentes des parties prenantes sur un portefeuille de projets étendu', "Discipline de gouvernance et d'exécution exigée par les bailleurs"],
    },
    howWeHelp: {
      en: ['Evidence-based prioritisation frameworks', 'Governance and institutional-strengthening programmes', 'Market and sector research to support financing decisions'],
      fr: ['Cadres de priorisation fondés sur des données', 'Programmes de gouvernance et de renforcement institutionnel', "Études de marché et sectorielles à l'appui des décisions de financement"],
    },
  },
  {
    slug: "manufacturing-industrial",
    number: "07",
    name: { en: "Manufacturing & Industrial", fr: "Industrie & production" },
    overview: {
      en: "Industrial groups and manufacturers pursuing local production, supply-chain resilience and export competitiveness.",
      fr: "Groupes industriels et fabricants poursuivant production locale, résilience des chaînes d'approvisionnement et compétitivité à l'export.",
    },
    image: port,
    imageAlt: {
      en: "Container terminal with cranes and stacked containers",
      fr: "Terminal à conteneurs avec grues et conteneurs empilés",
    },
    expertiseSlugs: ["business-financial-advisory", "strategy-transformation"],
    issues: {
      en: ['Input costs and tariff treatment shaping local-production decisions', 'Supply-chain resilience across borders', 'Export competitiveness against regional and global peers'],
      fr: ["Coûts d'intrants et régime tarifaire déterminant les décisions de production locale", "Résilience des chaînes d'approvisionnement transfrontalières", "Compétitivité à l'export face aux pairs régionaux et mondiaux"],
    },
    howWeHelp: {
      en: ['Feasibility and bankability studies', 'Cost and supply-chain modelling', 'Strategy and financial advisory for expansion decisions'],
      fr: ['Études de faisabilité et de bancabilité', "Modélisation des coûts et de la chaîne d'approvisionnement", "Conseil stratégique et financier pour les décisions d'expansion"],
    },
  },
];

export const industryBySlug = (slug: string) => industries.find((i) => i.slug === slug);
