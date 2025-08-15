import { NAVBAR_LINKS } from "@/constants";
import { NavbarLink } from "@/models";

export const navBarLinks: NavbarLink[] = [
  { title: NAVBAR_LINKS.HOME, link: `/` },
  { title: NAVBAR_LINKS.TEAM, link: `/${NAVBAR_LINKS.TEAM}` },
  { title: NAVBAR_LINKS.PUBLICATIONS, link: `/${NAVBAR_LINKS.PUBLICATIONS}` },
  { title: NAVBAR_LINKS.OUR_CARS, link: `/${NAVBAR_LINKS.OUR_CARS}` },
  { title: NAVBAR_LINKS.SPONSORS, link: `/${NAVBAR_LINKS.SPONSORS}` },
  { title: NAVBAR_LINKS.ALUMNI, link: `/${NAVBAR_LINKS.ALUMNI}` },
  { title: NAVBAR_LINKS.CONTACT, link: `/${NAVBAR_LINKS.CONTACT}` },
];
