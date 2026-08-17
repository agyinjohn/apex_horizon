import type { Bi } from "@/lib/i18n";

export type JobCategory = "experienced" | "graduate" | "internship";

export type Job = {
  slug: string;
  title: Bi;
  location: Bi;
  employmentType: Bi;
  category: JobCategory;
  overview: Bi;
  responsibilities: Bi<string[]>;
  qualifications: Bi<string[]>;
  whatWeLookFor: Bi<string[]>;
};

export const jobs: Job[] = [
  {
    slug: "senior-consultant-strategy-transformation",
    title: {
      en: "Senior Consultant – Strategy & Transformation",
      fr: "Consultant Senior – Stratégie & Transformation",
    },
    location: { en: "Accra, Ghana", fr: "Accra, Ghana" },
    employmentType: { en: "Full Time", fr: "Temps plein" },
    category: "experienced",
    overview: {
      en: "Lead workstreams on corporate strategy, market-entry and operating-model engagements for clients across West and East Africa, working closely with partners and client executive teams.",
      fr: "Piloter des chantiers de stratégie d'entreprise, d'entrée sur le marché et de conception du modèle opérationnel pour des clients en Afrique de l'Ouest et de l'Est, en lien étroit avec les associés et les comités de direction clients.",
    },
    responsibilities: {
      en: [
        "Structure and lead complex analytical workstreams with minimal supervision",
        "Own client relationships at the senior manager and director level",
        "Coach and review the work of consultants and analysts on the engagement team",
        "Shape recommendations that hold up under board-level scrutiny",
        "Contribute to proposal development and business development activity",
      ],
      fr: [
        "Structurer et diriger des chantiers analytiques complexes avec un encadrement minimal",
        "Assurer la relation client au niveau senior manager et directeur",
        "Encadrer et réviser le travail des consultants et analystes de l'équipe",
        "Élaborer des recommandations qui résistent à l'examen d'un conseil d'administration",
        "Contribuer au développement de propositions et à la prospection commerciale",
      ],
    },
    qualifications: {
      en: [
        "6–9 years in strategy consulting or a comparable corporate strategy function",
        "MBA or equivalent postgraduate qualification preferred",
        "Demonstrated experience managing workstreams end-to-end",
        "Fluency in English; working French an advantage",
      ],
      fr: [
        "6 à 9 ans d'expérience en conseil en stratégie ou fonction stratégie d'entreprise équivalente",
        "MBA ou diplôme de troisième cycle équivalent souhaité",
        "Expérience avérée de gestion de chantiers de bout en bout",
        "Maîtrise de l'anglais ; le français professionnel est un atout",
      ],
    },
    whatWeLookFor: {
      en: [
        "Judgement under ambiguity, and the discipline to test it",
        "Comfort holding a difficult conversation with a client sponsor",
        "A genuine interest in African markets and how they work",
        "Willingness to travel regionally for project delivery",
      ],
      fr: [
        "Du jugement dans l'incertitude, et la rigueur pour le mettre à l'épreuve",
        "L'aisance pour mener une conversation difficile avec un sponsor client",
        "Un intérêt sincère pour les marchés africains et leur fonctionnement",
        "La disponibilité pour des déplacements régionaux en mission",
      ],
    },
  },
  {
    slug: "consultant-risk-governance",
    title: { en: "Consultant – Risk & Governance", fr: "Consultant – Risques & Gouvernance" },
    location: { en: "Accra, Ghana", fr: "Accra, Ghana" },
    employmentType: { en: "Full Time", fr: "Temps plein" },
    category: "experienced",
    overview: {
      en: "Support boards, audit committees and executive teams to strengthen risk frameworks, governance structures and internal control environments across regulated and unregulated sectors.",
      fr: "Accompagner conseils d'administration, comités d'audit et directions générales dans le renforcement des dispositifs de risque, des structures de gouvernance et des environnements de contrôle interne, dans des secteurs réglementés et non réglementés.",
    },
    responsibilities: {
      en: [
        "Design and assess enterprise risk management frameworks",
        "Facilitate governance reviews and board effectiveness assessments",
        "Draft policy, procedure and reporting documentation for client sign-off",
        "Support regulatory engagement and remediation programmes",
      ],
      fr: [
        "Concevoir et évaluer des dispositifs de gestion des risques d'entreprise",
        "Animer des revues de gouvernance et des évaluations de l'efficacité des conseils",
        "Rédiger politiques, procédures et documents de reporting pour validation client",
        "Appuyer les échanges réglementaires et les programmes de remédiation",
      ],
    },
    qualifications: {
      en: [
        "3–6 years in risk, governance, audit or regulatory advisory",
        "Professional qualification (e.g. risk, audit or accounting) preferred",
        "Strong written communication in English or French",
      ],
      fr: [
        "3 à 6 ans d'expérience en risque, gouvernance, audit ou conseil réglementaire",
        "Qualification professionnelle (risque, audit ou comptabilité) souhaitée",
        "Excellente expression écrite en anglais ou en français",
      ],
    },
    whatWeLookFor: {
      en: [
        "Precision and an eye for what a document is not saying",
        "Calm, methodical delivery under regulatory timelines",
        "A collaborative approach with client compliance and legal teams",
      ],
      fr: [
        "De la précision et un œil pour ce qu'un document tait",
        "Une exécution calme et méthodique sous contraintes réglementaires",
        "Une approche collaborative avec les équipes conformité et juridique du client",
      ],
    },
  },
  {
    slug: "analyst-transaction-advisory",
    title: { en: "Analyst – Transaction Advisory", fr: "Analyste – Conseil en Transactions" },
    location: { en: "Accra, Ghana", fr: "Accra, Ghana" },
    employmentType: { en: "Full Time", fr: "Temps plein" },
    category: "experienced",
    overview: {
      en: "Build the financial and commercial analysis that underpins due diligence, valuation and transaction structuring work for investors and corporates active in African markets.",
      fr: "Construire les analyses financières et commerciales qui fondent les travaux de due diligence, de valorisation et de structuration de transactions pour des investisseurs et entreprises actifs sur les marchés africains.",
    },
    responsibilities: {
      en: [
        "Build and maintain financial models supporting valuation and diligence",
        "Prepare data packs and analysis for client and investor committee papers",
        "Support fieldwork including management interviews and site visits",
        "Draft sections of due diligence and transaction reports",
      ],
      fr: [
        "Construire et actualiser des modèles financiers de valorisation et de due diligence",
        "Préparer des dossiers de données et analyses pour comités clients et investisseurs",
        "Participer aux travaux de terrain, entretiens de direction et visites de site",
        "Rédiger des sections de rapports de due diligence et de transaction",
      ],
    },
    qualifications: {
      en: [
        "1–3 years in transaction advisory, audit, banking or corporate finance",
        "Strong financial modelling and Excel skills",
        "Degree in finance, economics, accounting or a related discipline",
      ],
      fr: [
        "1 à 3 ans d'expérience en conseil transactionnel, audit, banque ou finance d'entreprise",
        "Solides compétences en modélisation financière et Excel",
        "Diplôme en finance, économie, comptabilité ou discipline connexe",
      ],
    },
    whatWeLookFor: {
      en: [
        "Rigour with numbers and an instinct to sanity-check them",
        "Ability to work to tight transaction timelines without cutting corners",
        "Curiosity about how a business actually makes money",
      ],
      fr: [
        "De la rigueur avec les chiffres et le réflexe de les vérifier",
        "La capacité à tenir des délais transactionnels serrés sans négliger la qualité",
        "De la curiosité pour comprendre comment une entreprise gagne réellement de l'argent",
      ],
    },
  },
  {
    slug: "graduate-analyst-programme-2027",
    title: { en: "Graduate Analyst Programme 2027", fr: "Programme Analystes Diplômés 2027" },
    location: { en: "Accra / Abidjan", fr: "Accra / Abidjan" },
    employmentType: { en: "Graduate Programme", fr: "Programme diplômés" },
    category: "graduate",
    overview: {
      en: "A structured two-year foundation for final-year students and recent graduates: rotation across two advisory practices, formal training through gthink Academy, and early exposure to live client work.",
      fr: "Un socle structuré de deux ans pour étudiants en dernière année et jeunes diplômés : rotation entre deux pratiques de conseil, formation formelle via gthink Academy et exposition précoce à des missions clients réelles.",
    },
    responsibilities: {
      en: [
        "Rotate across two advisory practices over the programme",
        "Support senior team members on live client engagements",
        "Complete structured training modules through gthink Academy",
        "Take on a defined contribution within each engagement, reviewed by a manager",
      ],
      fr: [
        "Effectuer une rotation entre deux pratiques de conseil durant le programme",
        "Appuyer les membres seniors de l'équipe sur des missions clients réelles",
        "Suivre des modules de formation structurés via gthink Academy",
        "Assumer une contribution définie sur chaque mission, revue par un manager",
      ],
    },
    qualifications: {
      en: [
        "Final-year student or graduate within two years of graduation",
        "Strong academic record in any discipline",
        "Fluency in English or French; interest in developing the other",
      ],
      fr: [
        "Étudiant en dernière année ou diplômé depuis moins de deux ans",
        "Bon dossier académique, toutes disciplines confondues",
        "Maîtrise de l'anglais ou du français ; intérêt pour développer l'autre langue",
      ],
    },
    whatWeLookFor: {
      en: [
        "Curiosity that shows up as good questions, not just good grades",
        "A willingness to be corrected and to improve quickly",
        "Genuine interest in African markets and institutions",
      ],
      fr: [
        "De la curiosité qui se traduit par de bonnes questions, pas seulement de bonnes notes",
        "La volonté d'être corrigé et de progresser rapidement",
        "Un intérêt sincère pour les marchés et institutions africains",
      ],
    },
  },
  {
    slug: "consulting-internship-programme",
    title: { en: "Consulting Internship Programme", fr: "Programme de Stage en Conseil" },
    location: { en: "Accra, Ghana", fr: "Accra, Ghana" },
    employmentType: { en: "Internship", fr: "Stage" },
    category: "internship",
    overview: {
      en: "Eight to twelve week placements giving students and recent graduates practical exposure to consulting, research, analysis and client delivery on real engagements.",
      fr: "Stages de huit à douze semaines offrant aux étudiants et jeunes diplômés une exposition pratique au conseil, à la recherche, à l'analyse et à la livraison de missions réelles.",
    },
    responsibilities: {
      en: [
        "Support research and data-gathering for active client engagements",
        "Prepare working papers, summaries and presentation materials",
        "Shadow client meetings and workshops where appropriate",
        "Present a short capstone finding at the end of the placement",
      ],
      fr: [
        "Appuyer la recherche et la collecte de données sur des missions clients actives",
        "Préparer des documents de travail, synthèses et supports de présentation",
        "Observer réunions et ateliers clients lorsque cela est pertinent",
        "Présenter une courte restitution en fin de stage",
      ],
    },
    qualifications: {
      en: [
        "Currently enrolled in an undergraduate or postgraduate programme",
        "Strong written and analytical skills",
        "Available for a minimum eight-week placement",
      ],
      fr: [
        "Inscrit actuellement dans un programme de licence ou de troisième cycle",
        "Bonnes capacités rédactionnelles et analytiques",
        "Disponible pour un stage d'au moins huit semaines",
      ],
    },
    whatWeLookFor: {
      en: [
        "Enthusiasm to learn and take direction well",
        "Attention to detail in written work",
        "Reliability and professionalism from day one",
      ],
      fr: [
        "L'enthousiasme à apprendre et à bien recevoir les consignes",
        "Le souci du détail dans les travaux écrits",
        "Fiabilité et professionnalisme dès le premier jour",
      ],
    },
  },
];
