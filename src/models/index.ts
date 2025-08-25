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

export type BrandDetails = {
  name: string;
  phone: string;
  email: string;
  address: Address;
  motto?: string;
  logo: string;
};

export type Address = {
  building: string;
  streetName: string;
  shuburb?: string;
  postcode: number;
  state: string;
  country: string;
};

export type StatKey = "teams" | "countries";

export type Stat = {
  key: StatKey;
  title: string;
  value: number; // numeric part for CountUp
  suffix?: string; // e.g. "+", "k", etc.
  prefix?: string; // e.g. "~", "≈"
  accent?: string;
};

export type FormulaSaeDetails = {
  name: string;
  link: string;
  description: string;
  motto: {
    text: string;
    highlights?: string[];
  };
  image: string;
  stats: Record<StatKey, Stat>;
};

export type InfoItem = {
  title: string;
  description: string;
};

export type PrimaryTile = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export type SecondaryTile = {
  info: InfoItem[];
  image: string;
};

export type QuoteInfo = {
  quote: string;
  author: string;
  position?: string;
};

export type AboutUs = {
  primaryTile: PrimaryTile;
  secondaryTile: SecondaryTile;
  quoteInfo: QuoteInfo;
};
