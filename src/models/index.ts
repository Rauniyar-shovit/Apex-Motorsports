import { NAVBAR_LINKS } from "@/constants";
import { IconType } from "react-icons";

export type NavbarLink = {
  title: (typeof NAVBAR_LINKS)[keyof typeof NAVBAR_LINKS];
  link: string;
};

export type Value = {
  title: string;
  image: string;
  icon: IconType;
  description: string;
};
