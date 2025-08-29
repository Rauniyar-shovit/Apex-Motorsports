import { LINKS } from "@/constants";
import { AboutUs, Achievement, Link, Social, Sponsor, Value } from "@/models";
import {
  FaDiscord,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import {
  IoBriefcaseOutline,
  IoBulbOutline,
  IoChatbubblesOutline,
  IoCheckmarkCircleOutline,
  IoConstructOutline,
  IoPeopleOutline,
  IoPersonCircleOutline,
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

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Formula SAE-Australasia Design ",
    icon: IoConstructOutline,
    ranking: "2nd",
    description: "",
  },
  {
    title: "Check-In Champion of the Year 2024",
    icon: IoCheckmarkCircleOutline,
    description: "",
  },
  {
    title: "Club Leader of the Year 2024",
    icon: IoPersonCircleOutline,
    description: "",
  },
  {
    title: "Formula SAE-Australasia Business Presentation ",
    icon: IoBriefcaseOutline,
    ranking: "3rd",
    description: "",
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
    eyebrow: "Beyond Racing",
    title: "From Concept to Competition, We Engineer the Future",
    description:
      "Apex Motorsports turns student ambition into real-world engineering by designing, building, and racing formula-style cars. Through innovation and collaboration, we prepare future engineers to compete today and lead tomorrow.",
    image: "/model.avif",
  },
  secondaryTile: {
    info: [
      {
        title: "What We Do",
        description:
          "We design, build, and race formula-style cars, turning classroom learning into real engineering experience.",
      },
      {
        title: "The Opportunities",
        description:
          "  The competition lets us innovate, collaborate, and gain industry-ready skills in engineering, leadership, and teamwork.",
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

// data/sponsors.ts

export const SPONSORS: Sponsor[] = [
  {
    logoSrc: "/sponsors/wsu.png",
    logoAlt: "Western Sydney University",
    name: "Western Sydney University",
    href: "https://example.com",
    description:
      "Western Sydney University provides support and collaboration opportunities, empowering innovation and student success in engineering projects. Their commitment ensures students gain real-world experience while contributing to groundbreaking initiatives.",
  },
  {
    logoSrc: "/sponsors/ptc.png",
    logoAlt: "PTC",
    name: "PTC (Parametric Technology Corporation)",
    href: "https://example.com",
    description:
      "PTC is a global software company that provides digital transformation solutions for industrial and manufacturing companies, enabling them to design, manufacture, and service physical products. With tools like Creo and Windchill, they accelerate innovation worldwide.",
  },
  {
    logoSrc: "/sponsors/student-community.png",
    logoAlt: "Student Community",
    name: "Student Community",
    href: "https://example.com",
    description:
      "Our student community partners play a vital role in supporting collaboration, creativity, and innovation within the team environment. Their involvement fosters leadership skills, teamwork, and a strong culture of growth.",
  },
  {
    logoSrc: "/sponsors/altium.png",
    logoAlt: "Altium",
    name: "Altium",
    href: "https://example.com",
    description:
      "Altium provides advanced PCB design software solutions, empowering engineers and teams to innovate faster and bring ideas to life. Their technology is shaping the future of electronics development and manufacturing.",
  },
];
