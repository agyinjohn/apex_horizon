import type { Bi } from "@/lib/i18n";
import accra from "@/assets/accra.jpg";
import abidjan from "@/assets/abidjan.jpg";

export type MapMarket = {
  key: string;
  country: Bi;
  city: Bi;
  lat: number;
  lon: number;
  type: "office" | "selected";
  detail: Bi;
};

export const mapMarkets: MapMarket[] = [
  {
    key: "ghana",
    country: { en: "Ghana", fr: "Ghana" },
    city: { en: "Accra", fr: "Accra" },
    lat: 5.6,
    lon: -0.19,
    type: "office",
    detail: { en: "Head office", fr: "Siège" },
  },
  {
    key: "civ",
    country: { en: "Côte d'Ivoire", fr: "Côte d'Ivoire" },
    city: { en: "Abidjan", fr: "Abidjan" },
    lat: 5.35,
    lon: -4.02,
    type: "office",
    detail: { en: "Office", fr: "Bureau" },
  },
  {
    key: "nigeria",
    country: { en: "Nigeria", fr: "Nigéria" },
    city: { en: "Lagos", fr: "Lagos" },
    lat: 6.5,
    lon: 3.4,
    type: "selected",
    detail: {
      en: "Transaction and real-estate assignments",
      fr: "Missions transactionnelles et immobilières",
    },
  },
  {
    key: "kenya",
    country: { en: "Kenya", fr: "Kenya" },
    city: { en: "Nairobi", fr: "Nairobi" },
    lat: -1.29,
    lon: 36.82,
    type: "selected",
    detail: {
      en: "Public sector and energy research assignments",
      fr: "Missions secteur public et études énergie",
    },
  },
  {
    key: "tanzania",
    country: { en: "Tanzania", fr: "Tanzanie" },
    city: { en: "Dar es Salaam", fr: "Dar es Salaam" },
    lat: -6.79,
    lon: 39.28,
    type: "selected",
    detail: {
      en: "Technology and transformation assignments",
      fr: "Missions technologie et transformation",
    },
  },
  {
    key: "togo",
    country: { en: "Togo", fr: "Togo" },
    city: { en: "Lomé", fr: "Lomé" },
    lat: 6.17,
    lon: 1.23,
    type: "selected",
    detail: { en: "Regional market studies", fr: "Études de marché régionales" },
  },
  {
    key: "senegal",
    country: { en: "Senegal", fr: "Sénégal" },
    city: { en: "Dakar", fr: "Dakar" },
    lat: 14.72,
    lon: -17.47,
    type: "selected",
    detail: { en: "Consumer and market entry", fr: "Consommation et entrée sur le marché" },
  },
  {
    key: "southafrica",
    country: { en: "South Africa", fr: "Afrique du Sud" },
    city: { en: "Johannesburg", fr: "Johannesburg" },
    lat: -26.2,
    lon: 28.04,
    type: "selected",
    detail: { en: "Governance and risk assignments", fr: "Missions gouvernance et risques" },
  },
];

export type Office = {
  key: string;
  city: Bi;
  country: Bi;
  address: Bi<string[]>;
  phone: string;
  email: string;
  image: string;
  imageAlt: Bi;
};

export const offices: Office[] = [
  {
    key: "accra",
    city: { en: "Accra", fr: "Accra" },
    country: { en: "Ghana", fr: "Ghana" },
    address: {
      en: ["Apex House, 12 Independence Avenue", "Airport Commercial Area", "Accra, Ghana"],
      fr: ["Apex House, 12 Independence Avenue", "Airport Commercial Area", "Accra, Ghana"],
    },
    phone: "+233 (0) 30 000 0000",
    email: "accra@apexadvisory.example",
    image: accra,
    imageAlt: {
      en: "Modern commercial avenue in Accra, Ghana",
      fr: "Avenue commerciale moderne à Accra, Ghana",
    },
  },
  {
    key: "abidjan",
    city: { en: "Abidjan", fr: "Abidjan" },
    country: { en: "Côte d'Ivoire", fr: "Côte d'Ivoire" },
    address: {
      en: ["Immeuble Apex, 8 Boulevard Lagunaire", "Plateau", "Abidjan, Côte d'Ivoire"],
      fr: ["Immeuble Apex, 8 Boulevard Lagunaire", "Plateau", "Abidjan, Côte d'Ivoire"],
    },
    phone: "+225 (0) 27 00 00 00",
    email: "abidjan@apexadvisory.example",
    image: abidjan,
    imageAlt: {
      en: "Abidjan Plateau business district seen across the lagoon",
      fr: "Quartier d'affaires du Plateau à Abidjan vu depuis la lagune",
    },
  },
];
