import { BrandDetails, FormulaSaeDetails } from "@/models";

export const BRAND_DETAILS: BrandDetails = {
  name: "Apex Motorsports",
  address: {
    buildingNumber: "Office 458",
    streetName: "785 15h Street",
    shuburb: "Paramatta",
    postcode: 2000,
    state: "NSW",
    country: "Australia",
  },
  email: "info@email.com",
  phone: "+61 80055525 69",
  motto: "Made to learn, Built to win",
  logo: "/logo.png",
};

export const FORMULA_SAE_DETAILS: FormulaSaeDetails = {
  name: "Formula SAE",
  link: "https://www.fsaeonline.com/",
  description:
    "Formula SAE is an international competition where students design, build, and race Formula-style cars. Since 2000 it has brought together 35+ teams each December, helping students gain technical, leadership, and business skills valued by industry. With Combustion, Electric, and Driverless classes tested in Static and Dynamic events, it is the ultimate showcase of engineering education and innovation.",
  motto: {
    text: "Bringing industry \n into the classroom",
    highlights: ["industry", "classroom"],
  },
  image: "/formula-sae.jpg",
  stats: {
    teams: {
      key: "teams",
      title: "Teams",
      value: 700,
      suffix: "+",
      accent: "#5f3cff",
    },
    countries: {
      key: "countries",
      title: "Countries",
      value: 60,
      suffix: "+",
      accent: "#171717",
    },
  },
};

export const LINKS = {
  HOME: "home",
  BLOGS: "blogs",
  TEAM: "team",
  OUR_CARS: "our_cars",
  SPONSORS: "sponsors",
  ALUMNI: "alumni",
  CONTACTS: "contacts",
};

export const HERO_TITLES = [
  "Driven by Passion \n Fueled by Innovation",
  "Engineering Speed \n Inspiring Excellence",
  "Where Innovation \n Meets the Track",
  "Design. Drive. Dominate.",
  "Turning Ideas into Velocity",
  "Beyond Limits \n Into Victory",
];

export const VALUE_HEADING =
  "At Apex Motorsport, our values are the foundation of everything we do. They shape the way we work, collaborate, and push boundaries both on and off the track. Guided by these principles, we transform ambition into action and drive innovation for the future.";

export const SCROLL_TEXT: string[] = [
  "MADE",
  "TO",
  "LEARN",
  "BUIlT",
  "TO",
  "WIN",
];
