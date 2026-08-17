import type { Bi } from "@/lib/i18n";

export type CaseStudy = {
  slug: string;
  ref: string;
  industrySlug: string;
  industry: Bi;
  market: Bi;
  marketKey: string;
  client: Bi;
  confidential: boolean;
  headline: Bi;
  services: Bi<string[]>;
  serviceSlugs: string[];
  year: string;
  mandate: Bi;
  challenge: Bi;
  approach: Bi;
  outcome: Bi;
  featured?: boolean;
};

const M = {
  ghana: { en: "Ghana", fr: "Ghana" },
  civ: { en: "Côte d'Ivoire", fr: "Côte d'Ivoire" },
  nigeria: { en: "Nigeria", fr: "Nigéria" },
  kenya: { en: "Kenya", fr: "Kenya" },
  tanzania: { en: "Tanzania", fr: "Tanzanie" },
  other: { en: "Other Africa", fr: "Autre Afrique" },
};

const IND = {
  fs: { en: "Financial Services", fr: "Services financiers" },
  rei: { en: "Real Estate & Infrastructure", fr: "Immobilier & infrastructures" },
  cr: { en: "Consumer & Retail", fr: "Consommation & distribution" },
  enr: { en: "Energy & Natural Resources", fr: "Énergie & ressources naturelles" },
  tt: { en: "Technology & Telecommunications", fr: "Technologie & télécommunications" },
  ps: { en: "Public Sector & Development", fr: "Secteur public & développement" },
  mi: { en: "Manufacturing & Industrial", fr: "Industrie & production" },
};

const CONF = { en: "Confidential Client", fr: "Client confidentiel" };

export const caseStudies: CaseStudy[] = [
  {
    slug: "mixed-use-development-accra",
    ref: "APX-2601",
    industrySlug: "real-estate-infrastructure",
    industry: IND.rei,
    market: M.ghana,
    marketKey: "ghana",
    client: CONF,
    confidential: true,
    headline: {
      en: "Commercial due diligence and valuation of a mixed-use development in Accra.",
      fr: "Due diligence commerciale et évaluation d'un projet à usage mixte à Accra.",
    },
    services: {
      en: ["Market Assessment", "Valuation"],
      fr: ["Étude de marché", "Évaluation"],
    },
    serviceSlugs: ["research-market-intelligence", "business-financial-advisory"],
    year: "2026",
    mandate: {
      en: "gthink was engaged to provide independent commercial due diligence and valuation ahead of the investor's capital-allocation decision.",
      fr: "gthink a été mandaté pour fournir une due diligence commerciale et une évaluation indépendantes en amont de la décision d'allocation de capital de l'investisseur.",
    },
    challenge: {
      en: "An institutional investor was considering a significant stake in a mixed-use scheme combining offices, retail and serviced apartments. Absorption assumptions in the sponsor's business plan appeared optimistic relative to observable leasing activity in the district.",
      fr: "Un investisseur institutionnel envisageait une participation significative dans un projet mixte associant bureaux, commerces et appartements avec services. Les hypothèses d'absorption du plan d'affaires du promoteur paraissaient optimistes au regard de l'activité locative observable dans le quartier.",
    },
    approach: {
      en: "We rebuilt the demand picture from primary sources — leasing agents, comparable transactions, occupier interviews and pipeline supply — then stress-tested rent, absorption and exit assumptions in an independent valuation model.",
      fr: "Nous avons reconstruit la demande à partir de sources primaires — agents locatifs, transactions comparables, entretiens avec les occupants et offre en développement — puis testé les hypothèses de loyer, d'absorption et de sortie dans un modèle d'évaluation indépendant.",
    },
    outcome: {
      en: "The investor entered negotiations with a defensible valuation range, a revised phasing assumption and a clear list of conditions to be reflected in the shareholder agreement.",
      fr: "L'investisseur a engagé les négociations avec une fourchette de valorisation défendable, une hypothèse de phasage révisée et une liste claire de conditions à intégrer au pacte d'actionnaires.",
    },
    featured: true,
  },
  {
    slug: "meridian-financial-group",
    ref: "APX-2502",
    industrySlug: "financial-services",
    industry: IND.fs,
    market: M.ghana,
    marketKey: "ghana",
    client: { en: "Meridian Financial Group", fr: "Meridian Financial Group" },
    confidential: false,
    headline: {
      en: "Strategic review and operating-model transformation for a regional financial-services institution.",
      fr: "Revue stratégique et transformation du modèle opérationnel d'une institution financière régionale.",
    },
    services: { en: ["Strategy", "Transformation"], fr: ["Stratégie", "Transformation"] },
    serviceSlugs: ["strategy-transformation", "technology-digital"],
    year: "2025",
    mandate: {
      en: "gthink was engaged by the executive committee to review the institution's strategy and redesign its operating model for the next phase of growth.",
      fr: "gthink a été mandaté par le comité exécutif pour revoir la stratégie de l'institution et repenser son modèle opérationnel pour sa prochaine phase de croissance.",
    },
    challenge: {
      en: "Growth had outpaced the institution's operating model. Decision rights were unclear, cost-to-serve was rising and the branch network no longer matched where customers were being acquired.",
      fr: "La croissance avait dépassé le modèle opérationnel de l'institution. Les responsabilités décisionnelles étaient floues, le coût de service augmentait et le réseau d'agences ne correspondait plus aux zones d'acquisition des clients.",
    },
    approach: {
      en: "Working with the executive committee, we segmented the portfolio by economics rather than product, redesigned the operating model around three customer journeys, and sequenced a two-year change programme with clear ownership.",
      fr: "Avec le comité exécutif, nous avons segmenté le portefeuille par rentabilité plutôt que par produit, repensé le modèle opérationnel autour de trois parcours clients et séquencé un programme de transformation sur deux ans avec des responsabilités claires.",
    },
    outcome: {
      en: "The institution adopted a simplified structure, a prioritised investment plan and a management dashboard aligning incentives to the new model.",
      fr: "L'institution a adopté une structure simplifiée, un plan d'investissement priorisé et un tableau de bord alignant les incitations sur le nouveau modèle.",
    },
    featured: true,
  },
  {
    slug: "consumer-market-entry-civ",
    ref: "APX-2603",
    industrySlug: "consumer-retail",
    industry: IND.cr,
    market: M.civ,
    marketKey: "civ",
    client: CONF,
    confidential: true,
    headline: {
      en: "Market-entry strategy for an international consumer brand expanding into Francophone West Africa.",
      fr: "Stratégie d'entrée d'une marque de consommation internationale en Afrique de l'Ouest francophone.",
    },
    services: {
      en: ["Market Intelligence", "Strategy"],
      fr: ["Intelligence de marché", "Stratégie"],
    },
    serviceSlugs: ["research-market-intelligence", "strategy-transformation"],
    year: "2026",
    mandate: {
      en: "gthink was engaged to design and stress-test a market-entry strategy for UEMOA markets ahead of investment commitment.",
      fr: "gthink a été mandaté pour concevoir et éprouver une stratégie d'entrée sur les marchés de l'UEMOA avant tout engagement d'investissement.",
    },
    challenge: {
      en: "A European consumer group wanted to enter UEMOA markets but lacked reliable data on channel structure, pricing ladders and the practical realities of distribution outside the main cities.",
      fr: "Un groupe européen souhaitait entrer sur les marchés de l'UEMOA sans disposer de données fiables sur la structure des canaux, les échelles de prix et les réalités de la distribution hors des grandes villes.",
    },
    approach: {
      en: "We conducted field research across Abidjan and two secondary cities, mapped the distributor landscape, tested price points with retailers and modelled three entry options against capital and speed constraints.",
      fr: "Nous avons mené des recherches de terrain à Abidjan et dans deux villes secondaires, cartographié le paysage des distributeurs, testé des niveaux de prix auprès des détaillants et modélisé trois options d'entrée au regard des contraintes de capital et de délai.",
    },
    outcome: {
      en: "The client selected a distributor-led entry with a defined transition to a hybrid model, supported by a channel and pricing playbook adapted to each market.",
      fr: "Le client a retenu une entrée par distributeur avec une transition définie vers un modèle hybride, appuyée par un manuel canaux et prix adapté à chaque marché.",
    },
    featured: true,
  },
  {
    slug: "property-model-review-nigeria",
    ref: "APX-2504",
    industrySlug: "real-estate-infrastructure",
    industry: IND.rei,
    market: M.nigeria,
    marketKey: "nigeria",
    client: CONF,
    confidential: true,
    headline: {
      en: "Financial-model review for a large commercial property development.",
      fr: "Revue du modèle financier d'un grand projet immobilier commercial.",
    },
    services: {
      en: ["Financial Advisory", "Modelling"],
      fr: ["Conseil financier", "Modélisation"],
    },
    serviceSlugs: ["business-financial-advisory"],
    year: "2025",
    mandate: {
      en: "gthink was engaged by the lender to provide independent assurance over the financial model underpinning the facility.",
      fr: "gthink a été mandaté par le prêteur pour fournir une assurance indépendante sur le modèle financier sous-tendant le financement.",
    },
    challenge: {
      en: "A lender required independent assurance over a development model underpinning a substantial facility, in a currency and cost environment that had shifted materially since the model was built.",
      fr: "Un prêteur exigeait une assurance indépendante sur le modèle d'un développement sous-tendant un financement important, dans un environnement de change et de coûts profondément modifié depuis sa conception.",
    },
    approach: {
      en: "We audited model logic and integrity, reconstructed the cost and escalation assumptions, and ran downside scenarios covering delay, currency and leasing risk.",
      fr: "Nous avons audité la logique et l'intégrité du modèle, reconstruit les hypothèses de coûts et d'indexation, et simulé des scénarios défavorables couvrant retards, change et risque locatif.",
    },
    outcome: {
      en: "The lender obtained a documented view of covenant headroom under stress and agreed a revised drawdown schedule with the sponsor.",
      fr: "Le prêteur a obtenu une vision documentée de la marge de manœuvre sur ses covenants en scénario de stress et a convenu d'un calendrier de tirage révisé avec le promoteur.",
    },
  },
  {
    slug: "volta-renewable-assessment",
    ref: "APX-2505",
    industrySlug: "energy-natural-resources",
    industry: IND.enr,
    market: M.ghana,
    marketKey: "ghana",
    client: { en: "Volta Infrastructure Partners", fr: "Volta Infrastructure Partners" },
    confidential: false,
    headline: {
      en: "Commercial and financial assessment of a renewable-energy investment opportunity.",
      fr: "Évaluation commerciale et financière d'une opportunité d'investissement en énergie renouvelable.",
    },
    services: { en: ["Transaction Advisory"], fr: ["Conseil en transactions"] },
    serviceSlugs: ["transaction-advisory", "business-financial-advisory"],
    year: "2025",
    mandate: {
      en: "gthink was engaged to assess the commercial and financial viability of the generation asset ahead of the fund's investment decision.",
      fr: "gthink a été mandaté pour évaluer la viabilité commerciale et financière de l'actif de production avant la décision d'investissement du fonds.",
    },
    challenge: {
      en: "An infrastructure fund was assessing a generation asset whose returns depended on offtake reliability and tariff structure rather than technical performance.",
      fr: "Un fonds d'infrastructure évaluait un actif de production dont la rentabilité dépendait de la fiabilité de l'acheteur et de la structure tarifaire davantage que de la performance technique.",
    },
    approach: {
      en: "We assessed counterparty and payment history, reviewed the tariff and regulatory framework, and built a returns model isolating the variables that actually drove downside.",
      fr: "Nous avons analysé la contrepartie et son historique de paiement, examiné le cadre tarifaire et réglementaire, et construit un modèle de rendement isolant les variables réellement porteuses de risque.",
    },
    outcome: {
      en: "The fund proceeded with a restructured payment-security package and a clearly defined set of pre-completion conditions.",
      fr: "Le fonds a poursuivi l'opération avec un dispositif de sécurisation des paiements restructuré et des conditions préalables clairement définies.",
    },
    featured: true,
  },
  {
    slug: "infrastructure-programme-kenya",
    ref: "APX-2406",
    industrySlug: "public-sector-development",
    industry: IND.ps,
    market: M.kenya,
    marketKey: "kenya",
    client: CONF,
    confidential: true,
    headline: {
      en: "Market assessment supporting development of a national infrastructure investment programme.",
      fr: "Évaluation de marché à l'appui d'un programme national d'investissement en infrastructures.",
    },
    services: { en: ["Research", "Strategy"], fr: ["Études", "Stratégie"] },
    serviceSlugs: ["research-market-intelligence", "strategy-transformation"],
    year: "2024",
    mandate: {
      en: "gthink was engaged to develop a transparent, evidence-based framework for prioritising the institution's infrastructure pipeline.",
      fr: "gthink a été mandaté pour élaborer un cadre transparent et fondé sur des données afin de prioriser le portefeuille d'infrastructures de l'institution.",
    },
    challenge: {
      en: "A public institution needed to prioritise a long pipeline of candidate projects with limited comparable data and competing stakeholder expectations.",
      fr: "Une institution publique devait prioriser un long portefeuille de projets candidats avec peu de données comparables et des attentes divergentes entre parties prenantes.",
    },
    approach: {
      en: "We developed a transparent prioritisation framework combining economic impact, deliverability and financing feasibility, and tested it with investors and implementing agencies.",
      fr: "Nous avons développé un cadre de priorisation transparent combinant impact économique, faisabilité de mise en œuvre et bancabilité, testé auprès d'investisseurs et d'agences d'exécution.",
    },
    outcome: {
      en: "The institution published a sequenced programme with a defensible rationale for each tranche, improving investor engagement.",
      fr: "L'institution a publié un programme séquencé avec une justification défendable pour chaque tranche, améliorant l'engagement des investisseurs.",
    },
  },
  {
    slug: "telecom-operating-model-tanzania",
    ref: "APX-2507",
    industrySlug: "technology-telecommunications",
    industry: IND.tt,
    market: M.tanzania,
    marketKey: "tanzania",
    client: CONF,
    confidential: true,
    headline: {
      en: "Operating-model and digital-channel review for a telecommunications operator.",
      fr: "Revue du modèle opérationnel et des canaux numériques d'un opérateur de télécommunications.",
    },
    services: { en: ["Technology", "Transformation"], fr: ["Technologie", "Transformation"] },
    serviceSlugs: ["technology-digital", "strategy-transformation"],
    year: "2025",
    mandate: {
      en: "gthink was engaged to review the operator's digital-channel architecture and recommend a target operating model.",
      fr: "gthink a été mandaté pour examiner l'architecture des canaux numériques de l'opérateur et recommander un modèle opérationnel cible.",
    },
    challenge: {
      en: "Digital channels had been launched quickly and now duplicated processes handled by retail and call-centre teams, raising cost without improving service.",
      fr: "Les canaux numériques, lancés rapidement, dupliquaient désormais des processus gérés par les équipes en boutique et en centre d'appels, augmentant les coûts sans améliorer le service.",
    },
    approach: {
      en: "We mapped the top twenty customer journeys end to end, quantified the cost and failure points of each, and defined a target channel architecture with clear ownership.",
      fr: "Nous avons cartographié les vingt principaux parcours clients de bout en bout, quantifié leurs coûts et points de rupture, puis défini une architecture de canaux cible avec des responsabilités claires.",
    },
    outcome: {
      en: "The operator consolidated overlapping processes and adopted a phased plan to move priority journeys to self-service.",
      fr: "L'opérateur a consolidé les processus redondants et adopté un plan progressif de bascule des parcours prioritaires en libre-service.",
    },
  },
  {
    slug: "governance-review-dfi",
    ref: "APX-2508",
    industrySlug: "financial-services",
    industry: IND.fs,
    market: M.other,
    marketKey: "other",
    client: CONF,
    confidential: true,
    headline: {
      en: "Governance and enterprise risk framework review for a development finance institution.",
      fr: "Revue de la gouvernance et du cadre de risques d'une institution de financement du développement.",
    },
    services: { en: ["Risk", "Governance"], fr: ["Risques", "Gouvernance"] },
    serviceSlugs: ["risk-governance"],
    year: "2025",
    mandate: {
      en: "gthink was engaged by the board to review governance arrangements and the enterprise risk framework following portfolio growth.",
      fr: "gthink a été mandaté par le conseil pour examiner les dispositifs de gouvernance et le cadre de gestion des risques à la suite de la croissance du portefeuille.",
    },
    challenge: {
      en: "Following portfolio growth, the board sought assurance that delegated authorities, credit governance and risk reporting remained proportionate to the institution's mandate.",
      fr: "Après la croissance de son portefeuille, le conseil souhaitait s'assurer que les délégations, la gouvernance du crédit et le reporting des risques restaient proportionnés au mandat de l'institution.",
    },
    approach: {
      en: "We benchmarked governance arrangements against comparable institutions, reviewed committee effectiveness and tested the risk framework against recent decisions.",
      fr: "Nous avons comparé les dispositifs de gouvernance à ceux d'institutions comparables, évalué l'efficacité des comités et testé le cadre de risques sur des décisions récentes.",
    },
    outcome: {
      en: "The board approved revised delegated authorities, a strengthened risk-appetite statement and a simplified reporting suite.",
      fr: "Le conseil a approuvé des délégations révisées, une déclaration d'appétence au risque renforcée et un reporting simplifié.",
    },
  },
  {
    slug: "industrial-feasibility-civ",
    ref: "APX-2609",
    industrySlug: "manufacturing-industrial",
    industry: IND.mi,
    market: M.civ,
    marketKey: "civ",
    client: CONF,
    confidential: true,
    headline: {
      en: "Feasibility and bankability study for a local manufacturing facility.",
      fr: "Étude de faisabilité et de bancabilité d'une unité de production locale.",
    },
    services: {
      en: ["Financial Advisory", "Market Assessment"],
      fr: ["Conseil financier", "Étude de marché"],
    },
    serviceSlugs: ["business-financial-advisory", "research-market-intelligence"],
    year: "2026",
    mandate: {
      en: "gthink was engaged to test the feasibility and bankability of local production against continued importation.",
      fr: "gthink a été mandaté pour tester la faisabilité et la bancabilité d'une production locale face à la poursuite de l'importation.",
    },
    challenge: {
      en: "An industrial group weighed local production against continued importation, with the decision hinging on input costs, tariff treatment and realistic demand.",
      fr: "Un groupe industriel arbitrait entre production locale et importation, la décision dépendant des coûts d'intrants, du régime tarifaire et d'une demande réaliste.",
    },
    approach: {
      en: "We built a bottom-up cost model, verified input logistics with suppliers and quantified the tariff and duty position under alternative sourcing structures.",
      fr: "Nous avons construit un modèle de coûts détaillé, vérifié la logistique des intrants auprès des fournisseurs et quantifié la position tarifaire et douanière selon différentes structures d'approvisionnement.",
    },
    outcome: {
      en: "The group approved a phased investment, beginning with assembly and moving to full production once volume thresholds were met.",
      fr: "Le groupe a approuvé un investissement par phases, débutant par l'assemblage puis évoluant vers la production complète une fois les seuils de volume atteints.",
    },
  },
  {
    slug: "retail-network-review-ghana",
    ref: "APX-2510",
    industrySlug: "consumer-retail",
    industry: IND.cr,
    market: M.ghana,
    marketKey: "ghana",
    client: CONF,
    confidential: true,
    headline: {
      en: "Network and profitability review for a retail group.",
      fr: "Revue du réseau et de la rentabilité d'un groupe de distribution.",
    },
    services: {
      en: ["Strategy", "Financial Advisory"],
      fr: ["Stratégie", "Conseil financier"],
    },
    serviceSlugs: ["strategy-transformation", "business-financial-advisory"],
    year: "2025",
    mandate: {
      en: "gthink was engaged to assess store-level profitability and recommend an investment and rationalisation plan for the network.",
      fr: "gthink a été mandaté pour évaluer la rentabilité par point de vente et recommander un plan d'investissement et de rationalisation du réseau.",
    },
    challenge: {
      en: "Aggregate performance masked wide variation between stores, and the group lacked a consistent basis for deciding where to invest, refit or exit.",
      fr: "La performance agrégée masquait de fortes disparités entre points de vente, et le groupe n'avait pas de base cohérente pour décider où investir, rénover ou fermer.",
    },
    approach: {
      en: "We built a store-level contribution model, layered catchment and competitor data over it, and defined an investment logic by store archetype.",
      fr: "Nous avons construit un modèle de contribution par point de vente, superposé les données de zone de chalandise et de concurrence, puis défini une logique d'investissement par archétype.",
    },
    outcome: {
      en: "The group redirected capital to its strongest formats and agreed an exit plan for persistently loss-making sites.",
      fr: "Le groupe a réorienté son capital vers ses formats les plus performants et arrêté un plan de sortie des sites durablement déficitaires.",
    },
  },
  {
    slug: "port-logistics-diligence-nigeria",
    ref: "APX-2611",
    industrySlug: "real-estate-infrastructure",
    industry: IND.rei,
    market: M.nigeria,
    marketKey: "nigeria",
    client: CONF,
    confidential: true,
    headline: {
      en: "Commercial diligence on a logistics and warehousing platform.",
      fr: "Due diligence commerciale sur une plateforme logistique et d'entreposage.",
    },
    services: {
      en: ["Transaction Advisory", "Market Assessment"],
      fr: ["Conseil en transactions", "Étude de marché"],
    },
    serviceSlugs: ["transaction-advisory", "research-market-intelligence"],
    year: "2026",
    mandate: {
      en: "gthink was engaged to provide commercial diligence on the logistics platform ahead of the investor's transaction decision.",
      fr: "gthink a été mandaté pour fournir une due diligence commerciale sur la plateforme logistique avant la décision de transaction de l'investisseur.",
    },
    challenge: {
      en: "A regional investor needed to understand whether contracted warehousing demand would persist beyond the current tenant cohort.",
      fr: "Un investisseur régional devait déterminer si la demande d'entreposage contractualisée se maintiendrait au-delà de la cohorte actuelle de locataires.",
    },
    approach: {
      en: "We interviewed occupiers and freight forwarders, analysed lease expiry profiles and benchmarked rates against comparable facilities.",
      fr: "Nous avons interrogé occupants et transitaires, analysé le profil d'échéance des baux et comparé les tarifs à ceux d'installations similaires.",
    },
    outcome: {
      en: "The investor adjusted its renewal assumptions and negotiated a price reflecting concentration risk.",
      fr: "L'investisseur a ajusté ses hypothèses de renouvellement et négocié un prix reflétant le risque de concentration.",
    },
  },
  {
    slug: "energy-transition-study-kenya",
    ref: "APX-2512",
    industrySlug: "energy-natural-resources",
    industry: IND.enr,
    market: M.kenya,
    marketKey: "kenya",
    client: CONF,
    confidential: true,
    headline: {
      en: "Sector study on commercial and industrial energy procurement.",
      fr: "Étude sectorielle sur l'approvisionnement énergétique commercial et industriel.",
    },
    services: {
      en: ["Research", "Market Intelligence"],
      fr: ["Études", "Intelligence de marché"],
    },
    serviceSlugs: ["research-market-intelligence"],
    year: "2025",
    mandate: {
      en: "gthink was engaged to assess commercial and industrial willingness to pay ahead of the developer's pipeline commitment.",
      fr: "gthink a été mandaté pour évaluer la disposition à payer des utilisateurs commerciaux et industriels avant l'engagement du développeur sur son portefeuille de projets.",
    },
    challenge: {
      en: "A developer needed a defensible view of willingness to pay among commercial and industrial energy users before committing to a pipeline.",
      fr: "Un développeur avait besoin d'une vision défendable de la disposition à payer des utilisateurs commerciaux et industriels avant d'engager un portefeuille de projets.",
    },
    approach: {
      en: "We surveyed and interviewed energy users across four segments, analysed tariff exposure and modelled adoption under different contract structures.",
      fr: "Nous avons enquêté et interrogé des utilisateurs dans quatre segments, analysé l'exposition tarifaire et modélisé l'adoption selon différentes structures contractuelles.",
    },
    outcome: {
      en: "The developer focused origination on two segments with the clearest economics and revised its contracting approach.",
      fr: "Le développeur a concentré son origination sur les deux segments les plus rentables et révisé son approche contractuelle.",
    },
  },
];

export const caseBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);

export const featuredCases = caseStudies.filter((c) => c.featured);

export const markets: { key: string; label: Bi }[] = [
  { key: "ghana", label: M.ghana },
  { key: "civ", label: M.civ },
  { key: "nigeria", label: M.nigeria },
  { key: "kenya", label: M.kenya },
  { key: "tanzania", label: M.tanzania },
  { key: "other", label: M.other },
];
