import { LINKS } from "@/constants";
import { IconType } from "react-icons";

export type Link = {
  title: (typeof LINKS)[keyof typeof LINKS];
  link: string;
};

export type Value = {
  title: string;
  image: string;
  icon: IconType;
  description: string;
};

export type Achievement = {
  title: string;
  ranking?: string;
  description?: string;
  icon: IconType;
};

export type Social = {
  title: string;
  icon: IconType;
  link: string;
  color: string;
};
