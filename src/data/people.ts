import type { Bi } from "@/lib/i18n";
import daniel from "@/assets/person-daniel.jpg";
import amelie from "@/assets/person-amelie.jpg";
import nana from "@/assets/person-nana.jpg";
import kwame from "@/assets/person-kwame.jpg";

export type Person = {
  slug: string;
  name: string;
  role: Bi;
  focus: Bi<string[]>;
  image: string;
  imageAlt: Bi;
  linkedin: string;
  office: Bi;
  bio: Bi<string[]>;
  expertiseAreas: Bi<string[]>;
  sectors: Bi<string[]>;
  education: Bi<string[]>;
  memberships: Bi<string[]>;
  engagements: Bi<string[]>;
  insightSlugs: string[];
};

export const people: Person[] = [
  {
    slug: "daniel-mensah",
    name: "Daniel Mensah",
    role: { en: "Managing Partner", fr: "Associé gérant" },
    focus: {
      en: ["Strategy", "Transactions", "Financial Services"],
      fr: ["Stratégie", "Transactions", "Services financiers"],
    },
    image: daniel,
    imageAlt: {
      en: "Portrait of Daniel Mensah, Managing Partner",
      fr: "Portrait de Daniel Mensah, associé gérant",
    },
    linkedin: "https://www.linkedin.com/",
    office: { en: "Accra, Ghana", fr: "Accra, Ghana" },
    bio: {
      en: [
        "Daniel leads Apex Advisory Group and advises boards and investors on strategy, transactions and institutional change across West Africa.",
        "He has spent his career at the point where capital meets execution — supporting acquisitions, restructurings and growth programmes in financial services and infrastructure, and advising management teams through periods of significant change.",
        "He is a frequent contributor to discussions on African capital markets and the professional standards required to attract long-term investment.",
      ],
      fr: [
        "Daniel dirige Apex Advisory Group et conseille conseils d'administration et investisseurs sur la stratégie, les transactions et le changement institutionnel en Afrique de l'Ouest.",
        "Sa carrière s'est construite à la jonction du capital et de l'exécution : acquisitions, restructurations et programmes de croissance dans les services financiers et les infrastructures, aux côtés d'équipes de direction en pleine transformation.",
        "Il intervient régulièrement dans les débats sur les marchés de capitaux africains et les standards professionnels nécessaires pour attirer des investissements de long terme.",
      ],
    },
    expertiseAreas: {
      en: ["Corporate strategy", "Mergers and acquisitions", "Capital raising", "Board advisory"],
      fr: [
        "Stratégie d'entreprise",
        "Fusions et acquisitions",
        "Levées de capitaux",
        "Conseil au conseil d'administration",
      ],
    },
    sectors: {
      en: ["Financial Services", "Real Estate & Infrastructure", "Energy"],
      fr: ["Services financiers", "Immobilier & infrastructures", "Énergie"],
    },
    education: {
      en: ["MBA, international business school", "BSc Administration, University of Ghana"],
      fr: [
        "MBA, école de commerce internationale",
        "Licence en administration, Université du Ghana",
      ],
    },
    memberships: {
      en: ["Institute of Directors — Ghana", "Chartered accountancy body (member)"],
      fr: ["Institute of Directors — Ghana", "Ordre des experts-comptables (membre)"],
    },
    engagements: {
      en: [
        "Strategic review and operating-model transformation for a regional financial-services institution",
        "Commercial and financial assessment of a renewable-energy investment opportunity",
      ],
      fr: [
        "Revue stratégique et transformation du modèle opérationnel d'une institution financière régionale",
        "Évaluation commerciale et financière d'une opportunité d'investissement en énergie renouvelable",
      ],
    },
    insightSlugs: ["next-chapter-african-enterprise", "infrastructure-higher-capital-costs"],
  },
  {
    slug: "amelie-kouassi",
    name: "Amélie Kouassi",
    role: { en: "Partner, Francophone West Africa", fr: "Associée, Afrique de l'Ouest francophone" },
    focus: {
      en: ["Strategy", "Market Entry", "Consumer"],
      fr: ["Stratégie", "Entrée sur le marché", "Consommation"],
    },
    image: amelie,
    imageAlt: {
      en: "Portrait of Amélie Kouassi, Partner, Francophone West Africa",
      fr: "Portrait d'Amélie Kouassi, associée, Afrique de l'Ouest francophone",
    },
    linkedin: "https://www.linkedin.com/",
    office: { en: "Abidjan, Côte d'Ivoire", fr: "Abidjan, Côte d'Ivoire" },
    bio: {
      en: [
        "Amélie leads Apex's Francophone West Africa practice from Abidjan and advises international companies entering the region.",
        "Her work focuses on market entry, distribution strategy and commercial diligence for consumer, retail and industrial clients, with a particular emphasis on the regulatory and route-to-market differences between UEMOA countries.",
        "She works fluently in French and English and regularly supports bilingual executive teams and investment committees.",
      ],
      fr: [
        "Amélie dirige la practice Afrique de l'Ouest francophone d'Apex depuis Abidjan et conseille les entreprises internationales s'implantant dans la région.",
        "Ses travaux portent sur l'entrée sur le marché, la stratégie de distribution et la due diligence commerciale pour des clients de la consommation, de la distribution et de l'industrie, avec une attention particulière aux différences réglementaires et de distribution au sein de l'UEMOA.",
        "Elle travaille couramment en français et en anglais et accompagne régulièrement des comités de direction et d'investissement bilingues.",
      ],
    },
    expertiseAreas: {
      en: ["Market-entry strategy", "Commercial due diligence", "Distribution strategy", "Pricing"],
      fr: [
        "Stratégie d'entrée sur le marché",
        "Due diligence commerciale",
        "Stratégie de distribution",
        "Politique tarifaire",
      ],
    },
    sectors: {
      en: ["Consumer & Retail", "Manufacturing & Industrial", "Technology"],
      fr: ["Consommation & distribution", "Industrie & production", "Technologie"],
    },
    education: {
      en: ["MSc Management, Paris", "Licence en économie, Abidjan"],
      fr: ["Master en management, Paris", "Licence en économie, Abidjan"],
    },
    memberships: {
      en: ["Francophone business chamber (member)", "Women in Business network"],
      fr: ["Chambre de commerce francophone (membre)", "Réseau Women in Business"],
    },
    engagements: {
      en: [
        "Market-entry strategy for an international consumer brand expanding into Francophone West Africa",
        "Distribution and pricing review for a regional manufacturer",
      ],
      fr: [
        "Stratégie d'entrée d'une marque internationale en Afrique de l'Ouest francophone",
        "Revue de distribution et de tarification pour un industriel régional",
      ],
    },
    insightSlugs: ["francophone-west-africa", "beyond-digitisation"],
  },
  {
    slug: "nana-ama-owusu",
    name: "Nana Ama Owusu",
    role: { en: "Partner, Advisory", fr: "Associée, conseil" },
    focus: {
      en: ["Governance", "Transformation", "Public Sector"],
      fr: ["Gouvernance", "Transformation", "Secteur public"],
    },
    image: nana,
    imageAlt: {
      en: "Portrait of Nana Ama Owusu, Partner, Advisory",
      fr: "Portrait de Nana Ama Owusu, associée, conseil",
    },
    linkedin: "https://www.linkedin.com/",
    office: { en: "Accra, Ghana", fr: "Accra, Ghana" },
    bio: {
      en: [
        "Nana Ama advises boards, public institutions and development organisations on governance, risk and organisational transformation.",
        "She has led institutional-strengthening programmes, board effectiveness reviews and large change programmes where the challenge was as much political as technical.",
        "Her approach pairs clear frameworks with an understanding of how institutions actually make decisions.",
      ],
      fr: [
        "Nana Ama conseille conseils d'administration, institutions publiques et organisations de développement en matière de gouvernance, de risques et de transformation organisationnelle.",
        "Elle a dirigé des programmes de renforcement institutionnel, des revues d'efficacité des conseils et de vastes programmes de changement où l'enjeu était autant politique que technique.",
        "Son approche associe des cadres clairs à une compréhension du fonctionnement réel des institutions.",
      ],
    },
    expertiseAreas: {
      en: [
        "Governance reviews",
        "Enterprise risk management",
        "Institutional strengthening",
        "Change management",
      ],
      fr: [
        "Revues de gouvernance",
        "Gestion des risques d'entreprise",
        "Renforcement institutionnel",
        "Conduite du changement",
      ],
    },
    sectors: {
      en: ["Public Sector & Development", "Financial Services", "Energy"],
      fr: ["Secteur public & développement", "Services financiers", "Énergie"],
    },
    education: {
      en: ["MPA, public policy school", "LLB, University of Ghana"],
      fr: ["Master en administration publique", "Licence en droit, Université du Ghana"],
    },
    memberships: {
      en: ["Institute of Internal Auditors", "Governance institute (fellow)"],
      fr: ["Institute of Internal Auditors", "Institut de gouvernance (fellow)"],
    },
    engagements: {
      en: [
        "Governance and risk framework review for a development finance institution",
        "Market assessment supporting a national infrastructure investment programme",
      ],
      fr: [
        "Revue du cadre de gouvernance et de risques d'une institution de financement du développement",
        "Évaluation de marché à l'appui d'un programme national d'investissement en infrastructures",
      ],
    },
    insightSlugs: ["governance-competitive-advantage"],
  },
  {
    slug: "kwame-asante",
    name: "Kwame Asante",
    role: { en: "Director, Transactions", fr: "Directeur, transactions" },
    focus: {
      en: ["Valuation", "Financial Modelling", "Infrastructure"],
      fr: ["Évaluation", "Modélisation financière", "Infrastructures"],
    },
    image: kwame,
    imageAlt: {
      en: "Portrait of Kwame Asante, Director, Transactions",
      fr: "Portrait de Kwame Asante, directeur, transactions",
    },
    linkedin: "https://www.linkedin.com/",
    office: { en: "Accra, Ghana", fr: "Accra, Ghana" },
    bio: {
      en: [
        "Kwame leads valuation and financial-modelling work across Apex's transaction engagements.",
        "He has built and reviewed models for property developments, energy assets and operating businesses, and is often engaged where an investment committee needs an independent view of the numbers.",
        "He works closely with clients' finance teams to leave behind models they can maintain and defend.",
      ],
      fr: [
        "Kwame dirige les travaux d'évaluation et de modélisation financière des missions transactionnelles d'Apex.",
        "Il a construit et revu des modèles pour des projets immobiliers, des actifs énergétiques et des entreprises en exploitation, et intervient souvent lorsqu'un comité d'investissement a besoin d'un regard indépendant sur les chiffres.",
        "Il travaille étroitement avec les directions financières afin de laisser des modèles maintenables et défendables.",
      ],
    },
    expertiseAreas: {
      en: [
        "Valuation",
        "Financial modelling and model review",
        "Feasibility studies",
        "Transaction diligence",
      ],
      fr: [
        "Évaluation",
        "Modélisation financière et revue de modèles",
        "Études de faisabilité",
        "Due diligence transactionnelle",
      ],
    },
    sectors: {
      en: ["Real Estate & Infrastructure", "Energy & Natural Resources", "Financial Services"],
      fr: ["Immobilier & infrastructures", "Énergie & ressources naturelles", "Services financiers"],
    },
    education: {
      en: ["MSc Finance", "BSc Economics"],
      fr: ["Master en finance", "Licence en économie"],
    },
    memberships: {
      en: ["CFA charterholder", "Professional valuation body (member)"],
      fr: ["Titulaire du CFA", "Organisme professionnel d'évaluation (membre)"],
    },
    engagements: {
      en: [
        "Commercial due diligence and valuation of a mixed-use development in Accra",
        "Financial-model review for a large commercial property development in Nigeria",
      ],
      fr: [
        "Due diligence commerciale et évaluation d'un projet mixte à Accra",
        "Revue du modèle financier d'un grand projet immobilier commercial au Nigéria",
      ],
    },
    insightSlugs: ["infrastructure-higher-capital-costs"],
  },
];

export const personBySlug = (slug: string) => people.find((p) => p.slug === slug);

export type CharterValue = { title: Bi; body: Bi };

export const charter: CharterValue[] = [
  {
    title: { en: "Integrity", fr: "Intégrité" },
    body: {
      en: "We do what is right, especially when no one is watching.",
      fr: "Nous faisons ce qui est juste, surtout lorsque personne ne regarde.",
    },
  },
  {
    title: { en: "Excellence", fr: "Excellence" },
    body: {
      en: "We hold ourselves to exceptional professional standards.",
      fr: "Nous nous imposons des standards professionnels exigeants.",
    },
  },
  {
    title: { en: "Curiosity", fr: "Curiosité" },
    body: {
      en: "We ask better questions before recommending answers.",
      fr: "Nous posons de meilleures questions avant de recommander des réponses.",
    },
  },
  {
    title: { en: "Collaboration", fr: "Collaboration" },
    body: {
      en: "Our best work comes from diverse perspectives.",
      fr: "Nos meilleurs travaux naissent de la diversité des points de vue.",
    },
  },
  {
    title: { en: "Stewardship", fr: "Responsabilité" },
    body: {
      en: "We build relationships and institutions designed to endure.",
      fr: "Nous bâtissons des relations et des institutions faites pour durer.",
    },
  },
];
