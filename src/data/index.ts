import { LINKS } from "@/constants";
import { AboutUs, Link, Social, Value } from "@/models";
import {
  FaDiscord,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import {
  IoBulbOutline,
  IoChatbubblesOutline,
  IoPeopleOutline,
  IoSpeedometerOutline,
  IoTrendingUpOutline,
} from "react-icons/io5";

export const navbarLinks: Link[] = [
  { title: LINKS.HOME, link: `/` },
  { title: LINKS.BLOGS, link: `/${LINKS.BLOGS}` },
  { title: LINKS.OUR_TEAM, link: `/${LINKS.OUR_TEAM}` },
  { title: LINKS.OUR_CARS, link: `/${LINKS.OUR_CARS}` },
  { title: LINKS.SPONSORS, link: `/${LINKS.SPONSORS}` },
  { title: LINKS.ALUMNI, link: `/${LINKS.ALUMNI}` },
  { title: LINKS.CONTACTS, link: `/${LINKS.CONTACTS}` },
];

export const VALUES: Value[] = [
  {
    title: "Communication",
    icon: IoChatbubblesOutline,
    image: "/values/communication.avif",
    description:
      "Open communication builds trust and keeps our team connected. It ensures everyone works together with clarity and purpose.",
  },
  {
    title: "Growth",
    icon: IoTrendingUpOutline,
    image: "/values/growth.jpg",
    description:
      "We embrace growth as a continuous journey of learning and improvement. Every challenge helps us evolve and become stronger.",
  },
  {
    title: "Innovation",
    icon: IoBulbOutline,
    image: "/values/innovation.jpg",
    description:
      "Innovation drives us to think differently and break boundaries. We design solutions that go beyond convention and inspire progress.",
  },
  {
    title: "Collaboration",
    icon: IoPeopleOutline,
    image: "/values/collaboration.jpg",
    description:
      "Collaboration unites diverse skills and ideas to achieve shared success. Working together allows us to reach greater heights.",
  },
  {
    title: "Ambition",
    icon: IoSpeedometerOutline,
    image: "/values/ambition.avif",
    description:
      "Ambition fuels our pursuit of excellence in everything we do. It motivates us to push limits and deliver outstanding results.",
  },
];

export const SOCAILS: Social[] = [
  {
    title: "facebook",
    icon: FaFacebookF,
    link: "https://www.facebook.com/wsformulasae#",
    color: "#3a5694",
  },
  {
    title: "discord",
    icon: FaDiscord,
    link: "https://discord.gg/Jpn7uWwBQ4",
    color: "#5c69f2",
  },
  {
    title: "instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/apxmotorsport?igsh=dWU3eWRkNGk4ejN6 ",
    color: "#fc08af",
  },
  {
    title: "linkedin",
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/company/wsu-apex-motorsport/",
    color: "#249ef0",
  },
];

export const footerLinks: Link[] = [
  { title: LINKS.HOME, link: `/` },
  { title: LINKS.BLOGS, link: `/${LINKS.BLOGS}` },
  { title: LINKS.OUR_TEAM, link: `/${LINKS.OUR_TEAM}` },
  { title: LINKS.OUR_CARS, link: `/${LINKS.OUR_CARS}` },
  { title: LINKS.CONTACTS, link: `/${LINKS.CONTACTS}` },
];

export const ABOUT_US: AboutUs = {
  primaryTile: {
    eyebrow: "Driven by Purpose",
    title: "At Apex Motorsport, we believe in turning ambition into action.",
    description:
      "Our purpose is to empower students to bridge the gap between theory and real-world engineering through hands-on design, collaboration, and problem-solving.We exist to inspire innovation, nurture leadership, and prepare the next generation of engineers to shape the technologies that define tomorrow’s industries.",
    image: "/model.avif",
  },
  secondaryTile: {
    info: [
      {
        title: "How We Build the Future",
        description:
          "Apex Motorsport operates as a student-led engineering organisation that mirrors the processes of industry leaders in design, manufacturing, and systems integration.Our members collaborate across mechanical, electrical, software, and business divisions, managing everything from concept generation and CAD modelling to testing, data analysis, and project delivery.Using tools such as PTC Creo, ANSYS, MATLAB, Windchill, Altium, and Ubuntu, we integrate advanced workflows that reflect real-world engineering environments; fostering teamwork, accountability, and innovation across every discipline.",
      },
      {
        title: "What We Compete In",
        description:
          "Apex Motorsport competes in the Formula SAE-Australasia competition, one of the world’s most recognised university engineering design challenges.Each year, teams from across the Asia-Pacific region design and manufacture a formula-style vehicle that is evaluated across engineering design, business presentation, cost analysis, and dynamic events such as acceleration, skidpad, autocross, and endurance.Our ultimate goal is to make history by becoming the first team to compete in all three categories of the competition;  Internal Combustion, Electric Vehicle, and Autonomous, within the same year.This milestone represents our team’s deep technical capability, innovation culture, and commitment to advancing sustainable and intelligent mobility.",
      },
    ],
    image: "/engineering-kart.avif",
  },

  quoteInfo: {
    quote:
      "students who engineer, collaborate, and compete to define the future of motorsport.",
    author: "Bowen Fucile",
    position: "Team Principal",
  },
};
