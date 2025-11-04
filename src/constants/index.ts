import { ChartConfig } from "@/components/ui/chart";
import { BrandDetails, FormulaSaeDetails } from "@/models";

export const BRAND_DETAILS: BrandDetails = {
  name: "Apex Motorsports",
  address: {
    building: "Western Sydney University",
    streetName: "56 Second Avenue",
    shuburb: "Kingswood",
    postcode: 2747,
    state: "NSW",
    country: "Australia",
    lat: -33.768313,
    lng: 150.729995,
  },
  email: "wsformula@student.westernsydney.edu.au",
  phone: "",
  motto: "Made to learn, Built to win",
  logo: "/logo.png",
};

export const POINTS_PIECHART_DATA = [
  { category: "skidpad", points: 275, fill: "#9f8aff" },
  { category: "efficiency", points: 75, fill: "#7f63ff" },
  { category: "autocross", points: 75, fill: "#6f50ff" },
  { category: "endurance", points: 100, fill: "#5f3cff" },
  {
    category: "businessPresentation",
    points: 150,
    fill: "#5636e6",
  },
  { category: "cost", points: 125, fill: "#4c30cc" },
  { category: "design", points: 100, fill: "#432ab3" },
];

export const POINTS_PIECHART_CONFIG = {
  points: {
    label: "Points",
  },
  skidpad: {
    label: "Skidpad",
  },
  acceleration: {
    label: "Acceleration",
  },
  efficiency: {
    label: "Efficiency",
  },
  autocross: {
    label: "Autocross",
  },
  endurance: {
    label: "Endurance",
  },
  businessPresentation: {
    label: "Business Presentation",
  },
  cost: {
    label: "Cost",
  },
  design: {
    label: "Design",
  },
} satisfies ChartConfig;

export const FORMULA_SAE_DETAILS: FormulaSaeDetails = {
  name: "Formula SAE",
  link: "https://www.saea.com.au/formula-sae-a",
  description:
    "Formula SAE is an international competition where students design, build, and race Formula-style cars. Since 2000, it has brought together 35+ teams to showcase technical, leadership, and business skills through Static and Dynamic events in Combustion, Electric, and Driverless classes.",
  motto: {
    text: "Bringing industry into the classroom",
    highlights: ["industry", "classroom"],
  },
  image: "/formula-sae.jpg",
  stats: {
    competition: {
      key: "competition",
      title: "Competitions",
      value: 20,
    },
    countries: {
      key: "countries",
      title: "Countries",
      value: 60,
    },
    teams: {
      key: "teams",
      title: "Teams",
      value: 700,
    },

    students: {
      key: "students",
      title: "Students",
      value: 20000,
    },
  },
  pointsPieChart: {
    chartData: POINTS_PIECHART_DATA,
    chartConfig: POINTS_PIECHART_CONFIG,
  },
  structureDescription:
    "Formula Student is divided into distinct classes; Combustion, Driverless and Electric. At competitions each car competes separately and is judged in two types of events, Dynamic and Static.\n\nStatic events allow the team to demonstrate their knowledge behind the development of the cars and test industry skills such as entrepreneurialism, financial acumen and  engineering design process behind the cars.\n\nDynamic events are the the performance of the cars in a variety events require more than just the reliability, efficiency and driver skill.",
};

export const LINKS = {
  HOME: "home",
  BLOGS: "blogs",
  OUR_TEAM: "our_team",
  OUR_CARS: "our_cars",
  SPONSORS: "sponsors",
  ALUMNI: "alumni",
  CONTACTS: "contacts",
};

export const HERO_TITLES = ["Made to Learn \n Built to Win"];

export const VALUE_HEADING =
  "At Apex Motorsport, our values are the foundation of everything we do. They shape the way we work, collaborate, and push boundaries both on and off the track. Guided by these principles, we transform ambition into action and drive innovation for the future. ";

export const SCROLL_TEXT: string[] = [
  "MADE",
  "TO",
  "LEARN",
  "BUIlT",
  "TO",
  "WIN",
];

export const FORM_FIELDS = {
  name: {
    id: "name",
    label: "Name",
    placeholder: "Name",
  },
  email: {
    id: "email",
    label: "Email",
    placeholder: "Email",
  },
  phone: {
    id: "phone",
    label: "Phone",
    placeholder: "Phone",
  },
  subject: {
    id: "subject",
    label: "Subject",
    placeholder: "Subject",
  },
  message: {
    id: "message",
    label: "Message",
    placeholder: "How can we help you? Feel free to get in touch!",
  },
} as const;

export const BLOG_PAGE_SIZE = 1;
