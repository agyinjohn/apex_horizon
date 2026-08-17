import type { Bi } from "@/lib/i18n";
import port from "@/assets/insight-featured.jpg";
import accra from "@/assets/accra.jpg";
import abidjan from "@/assets/abidjan.jpg";
import boardroom from "@/assets/story-boardroom.jpg";
import evening from "@/assets/cta-evening.jpg";

export type Insight = {
  slug: string;
  category: Bi;
  title: Bi;
  standfirst: Bi;
  body: Bi<string[]>;
  authorSlug: string;
  date: Bi;
  readTime: Bi;
  image: string;
  imageAlt: Bi;
  featured?: boolean;
};

export const insights: Insight[] = [
  {
    slug: "next-chapter-african-enterprise",
    category: { en: "African Markets", fr: "Marchés africains" },
    title: {
      en: "The next chapter of African enterprise: Five forces shaping investment in 2027",
      fr: "Le prochain chapitre de l'entreprise africaine : cinq forces qui façonneront l'investissement en 2027",
    },
    standfirst: {
      en: "Capital is becoming more selective, not more scarce. The organisations that attract it will be those able to evidence governance, resilience and a credible route to scale.",
      fr: "Le capital devient plus sélectif, non plus rare. Les organisations qui l'attireront seront celles capables de démontrer gouvernance, résilience et une trajectoire crédible de croissance.",
    },
    body: {
      en: [
        "Investment conversations across the continent have changed tone. Two years ago the question was where growth would come from; today it is who can demonstrate that they can convert growth into cash and withstand a shock while doing it.",
        "Five forces recur in our client work. First, the cost of capital has reset expectations: business plans built on cheap money now need to justify every unit of working capital. Second, regional integration is finally influencing commercial structure, with distribution and manufacturing decisions increasingly taken at regional rather than national level.",
        "Third, governance has become a pricing factor rather than a compliance exercise. Investors increasingly attach an explicit discount to institutions whose decision rights and reporting they cannot verify. Fourth, talent mobility is reshaping operating models, particularly in professional services and technology.",
        "Fifth, and least discussed, is data. In markets where reliable statistics are thin, organisations that build their own evidence base gain a genuine advantage — in negotiation, in pricing and in the confidence with which they can act.",
        "None of these forces is unique to Africa. What is distinctive is the premium placed on organisations able to evidence their position rather than assert it.",
      ],
      fr: [
        "Le ton des discussions d'investissement sur le continent a changé. Il y a deux ans, la question portait sur l'origine de la croissance ; aujourd'hui, elle porte sur la capacité à convertir cette croissance en trésorerie et à absorber un choc.",
        "Cinq forces reviennent dans nos missions. D'abord, le coût du capital a réinitialisé les attentes : les plans d'affaires bâtis sur de l'argent bon marché doivent désormais justifier chaque unité de besoin en fonds de roulement. Ensuite, l'intégration régionale influence enfin les structures commerciales, les décisions de distribution et de production se prenant à l'échelle régionale.",
        "Troisièmement, la gouvernance est devenue un facteur de valorisation plutôt qu'un exercice de conformité. Les investisseurs appliquent une décote explicite aux institutions dont ils ne peuvent vérifier les délégations et le reporting. Quatrièmement, la mobilité des talents redessine les modèles opérationnels, notamment dans les services professionnels et la technologie.",
        "Cinquièmement, et c'est le point le moins débattu : la donnée. Sur des marchés où les statistiques fiables sont rares, les organisations qui construisent leur propre base de preuves acquièrent un avantage réel — en négociation, en tarification et en capacité d'agir avec confiance.",
        "Aucune de ces forces n'est propre à l'Afrique. Ce qui est spécifique, c'est la prime accordée aux organisations capables de démontrer leur position plutôt que de l'affirmer.",
      ],
    },
    authorSlug: "daniel-mensah",
    date: { en: "12 February 2026", fr: "12 février 2026" },
    readTime: { en: "9 min", fr: "9 min" },
    image: port,
    imageAlt: {
      en: "Aerial view of a container port at sunrise",
      fr: "Vue aérienne d'un port à conteneurs au lever du jour",
    },
    featured: true,
  },
  {
    slug: "francophone-west-africa",
    category: { en: "Markets", fr: "Marchés" },
    title: {
      en: "Why Francophone West Africa is moving higher on investors' agendas",
      fr: "Pourquoi l'Afrique de l'Ouest francophone monte dans l'agenda des investisseurs",
    },
    standfirst: {
      en: "A shared currency, deepening regional trade and a maturing corporate base are changing how international investors read the UEMOA bloc.",
      fr: "Une monnaie commune, un commerce régional renforcé et un tissu d'entreprises plus mature transforment la lecture de la zone UEMOA par les investisseurs internationaux.",
    },
    body: {
      en: [
        "For years, Francophone West Africa was treated by international investors as an adjacency to larger Anglophone markets. That framing is increasingly out of date.",
        "Currency stability within UEMOA removes one of the variables that most complicates cross-border planning. Combined with harmonised commercial law, it makes regional structures materially easier to design and defend to a credit committee.",
        "The practical constraint is rarely strategy. It is execution detail: distributor quality, working-capital terms, customs treatment and the availability of management who can operate bilingually across the bloc.",
        "Clients who succeed here tend to invest early in local commercial intelligence and treat the region as a portfolio of distinct markets sharing a currency, not a single homogeneous territory.",
      ],
      fr: [
        "Pendant des années, l'Afrique de l'Ouest francophone a été perçue par les investisseurs internationaux comme une extension des grands marchés anglophones. Cette lecture est aujourd'hui dépassée.",
        "La stabilité monétaire au sein de l'UEMOA élimine l'une des variables qui compliquent le plus la planification transfrontalière. Associée à un droit des affaires harmonisé, elle facilite nettement la conception de structures régionales défendables devant un comité de crédit.",
        "La contrainte pratique relève rarement de la stratégie. Elle tient au détail d'exécution : qualité des distributeurs, conditions de fonds de roulement, traitement douanier et disponibilité de dirigeants capables d'opérer en deux langues.",
        "Les clients qui réussissent investissent tôt dans l'intelligence commerciale locale et traitent la région comme un portefeuille de marchés distincts partageant une monnaie, non comme un territoire homogène.",
      ],
    },
    authorSlug: "amelie-kouassi",
    date: { en: "28 January 2026", fr: "28 janvier 2026" },
    readTime: { en: "8 min", fr: "8 min" },
    image: abidjan,
    imageAlt: {
      en: "Abidjan business district seen across the lagoon",
      fr: "Quartier d'affaires d'Abidjan vu depuis la lagune",
    },
  },
  {
    slug: "infrastructure-higher-capital-costs",
    category: { en: "Infrastructure", fr: "Infrastructures" },
    title: {
      en: "Infrastructure investing in an era of higher capital costs",
      fr: "Investir dans les infrastructures à l'ère d'un capital plus coûteux",
    },
    standfirst: {
      en: "When discount rates rise, project selection matters more than project promotion. Discipline in early-stage assessment is where returns are now won.",
      fr: "Lorsque les taux d'actualisation montent, la sélection des projets compte plus que leur promotion. C'est en amont que les rendements se gagnent désormais.",
    },
    body: {
      en: [
        "Higher capital costs do not stop infrastructure investment; they change which projects deserve it. Marginal schemes that survived on optimistic terminal values no longer clear the bar.",
        "In our transaction work, three tests separate projects that hold up from those that do not: the credibility of the offtaker, the treatment of currency mismatch, and the realism of construction cost and timing.",
        "Sponsors who front-load this analysis shorten diligence and negotiate from a stronger position. Those who do not tend to discover the same issues later, at greater cost.",
      ],
      fr: [
        "Un capital plus coûteux n'arrête pas l'investissement en infrastructures ; il modifie les projets qui le méritent. Les projets marginaux, portés par des valeurs terminales optimistes, ne passent plus le seuil.",
        "Dans nos missions transactionnelles, trois tests distinguent les projets solides : la crédibilité de l'acheteur, le traitement du décalage de devises, et le réalisme des coûts et délais de construction.",
        "Les promoteurs qui anticipent cette analyse raccourcissent la due diligence et négocient en position de force. Les autres découvrent les mêmes problèmes plus tard, à un coût supérieur.",
      ],
    },
    authorSlug: "kwame-asante",
    date: { en: "9 January 2026", fr: "9 janvier 2026" },
    readTime: { en: "6 min", fr: "6 min" },
    image: evening,
    imageAlt: {
      en: "Illuminated office towers and road light trails at night",
      fr: "Tours de bureaux illuminées et traînées lumineuses nocturnes",
    },
  },
  {
    slug: "beyond-digitisation",
    category: { en: "Transformation", fr: "Transformation" },
    title: {
      en: "Beyond digitisation: What transformation really requires",
      fr: "Au-delà de la digitalisation : ce qu'exige réellement la transformation",
    },
    standfirst: {
      en: "Most stalled transformation programmes are not technology failures. They are unresolved questions about decision rights, incentives and process ownership.",
      fr: "La plupart des programmes de transformation à l'arrêt ne sont pas des échecs technologiques, mais des questions non résolues de responsabilités, d'incitations et de propriété des processus.",
    },
    body: {
      en: [
        "Digitising a process that nobody owns simply produces a faster version of the same confusion. The organisations that get value from technology decide, first, who is accountable for the outcome.",
        "We ask three questions before any platform discussion: which decisions will change, who will make them, and how will we know the change happened?",
        "Answering those honestly usually reveals that the hard work is organisational. The technology is the easier half.",
      ],
      fr: [
        "Digitaliser un processus que personne ne pilote ne produit qu'une version plus rapide de la même confusion. Les organisations qui tirent de la valeur de la technologie décident d'abord qui est responsable du résultat.",
        "Nous posons trois questions avant toute discussion de plateforme : quelles décisions vont changer, qui les prendra, et comment saurons-nous que le changement a eu lieu ?",
        "Y répondre honnêtement révèle en général que l'essentiel du travail est organisationnel. La technologie est la moitié la plus simple.",
      ],
    },
    authorSlug: "amelie-kouassi",
    date: { en: "16 December 2025", fr: "16 décembre 2025" },
    readTime: { en: "7 min", fr: "7 min" },
    image: boardroom,
    imageAlt: {
      en: "Empty boardroom with city view at dusk",
      fr: "Salle de conseil vide avec vue sur la ville au crépuscule",
    },
  },
  {
    slug: "governance-competitive-advantage",
    category: { en: "Governance", fr: "Gouvernance" },
    title: {
      en: "Governance as a competitive advantage",
      fr: "La gouvernance comme avantage concurrentiel",
    },
    standfirst: {
      en: "In markets where capital is selective, verifiable governance lowers the cost of being trusted.",
      fr: "Sur des marchés où le capital est sélectif, une gouvernance vérifiable réduit le coût de la confiance.",
    },
    body: {
      en: [
        "Boards often treat governance as a defensive obligation. Investors read it as information about management quality.",
        "The institutions we see priced most favourably share unremarkable characteristics: clear delegated authorities, minutes that record real debate, risk reporting that management actually uses, and no ambiguity about who decides what.",
        "None of that requires scale. It requires intent.",
      ],
      fr: [
        "Les conseils considèrent souvent la gouvernance comme une obligation défensive. Les investisseurs y lisent une information sur la qualité du management.",
        "Les institutions les mieux valorisées partagent des caractéristiques peu spectaculaires : des délégations claires, des procès-verbaux qui rendent compte de véritables débats, un reporting des risques réellement utilisé, et aucune ambiguïté sur qui décide.",
        "Rien de tout cela n'exige de la taille. Cela exige de l'intention.",
      ],
    },
    authorSlug: "nana-ama-owusu",
    date: { en: "3 December 2025", fr: "3 décembre 2025" },
    readTime: { en: "5 min", fr: "5 min" },
    image: accra,
    imageAlt: {
      en: "Modern commercial avenue in Accra",
      fr: "Avenue commerciale moderne à Accra",
    },
  },
];

export const insightBySlug = (slug: string) => insights.find((i) => i.slug === slug);
export const featuredInsight = insights.find((i) => i.featured)!;
export const otherInsights = insights.filter((i) => !i.featured);
