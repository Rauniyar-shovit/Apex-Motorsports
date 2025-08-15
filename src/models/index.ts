import { NAVBAR_LINKS } from "@/constants";

export type NavbarLink = {
  title: (typeof NAVBAR_LINKS)[keyof typeof NAVBAR_LINKS];
  link: string;
};
