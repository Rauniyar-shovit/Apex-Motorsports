import { LINKS } from "@/constants";
import { IconType } from "react-icons";
import { FORM_FIELDS } from "@/constants";
import {
  ACHIEVEMENTS_QUERYResult,
  BLOG_BY_SLUG_QUERYResult,
  BLOGS_LIST_QUERYResult,
  RECENT_BLOGS_QUERYResult,
  RELATED_BLOGSResult,
  TIER_SPONSORS_QUERYResult,
  CATEGORY_QUERYResult,
  ALUMNI_BY_SLUG_QUERYResult,
  ALL_ALUMNI_QUERYResult,
  SanityImageDimensions,
  TEAM_MEMBERS_QUERYResult,
} from "@/sanity/types";
import { DEPARTMENT_CATEGORIES } from "@/sanity/constants";

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

// export type Achievement = {
//   title: string;
//   ranking?: string;
//   description?: string;
//   icon: IconType;
// };

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
  lat: number;
  lng: number;
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

export type FieldKey = keyof typeof FORM_FIELDS;

export type ContactFormValues = {
  [K in FieldKey]: string;
};

export type FieldId = (typeof FORM_FIELDS)[keyof typeof FORM_FIELDS]["id"];

export type Sponsor = TIER_SPONSORS_QUERYResult[number];
export type Achievement = ACHIEVEMENTS_QUERYResult[number];
export type PreviewBlog = BLOGS_LIST_QUERYResult[number];
export type BlogPost = BLOG_BY_SLUG_QUERYResult;
export type RelatedPost = RELATED_BLOGSResult[number];
export type RecentPost = RECENT_BLOGS_QUERYResult[number];
export type Categories = CATEGORY_QUERYResult[number];
export type Alumni = ALUMNI_BY_SLUG_QUERYResult;
export type AlumniPreview = ALL_ALUMNI_QUERYResult[number];
export type TeamDepartments = TEAM_MEMBERS_QUERYResult;

export type DepartmentKey = keyof TEAM_MEMBERS_QUERYResult;

type TeamMember = {
  _id: string;
  name: string | null;
  bio: string | null;
  email: string | null;
  linkedin: string | null;
  profileImage: {
    asset: {
      url: string | null;
      metadata: {
        dimensions: SanityImageDimensions | null;
      } | null;
    } | null;
    alt: string | null;
  } | null;
};

export type Department = {
  _id: string;
  name: string | null;
  members: TeamMember[];
};

export type MemberProfile = {
  profileImage: {
    asset: {
      url: string | null;
      metadata: {
        dimensions: SanityImageDimensions | null;
      } | null;
    } | null;
    alt: string | null;
  } | null;
  name: string | null;
  slug?: string | null;
  role?: string | null;
  experience?: string | null;
  linkedin?: string | null;
  email?: string | null;
  bio?: string | null;
  enableHoverOverlay?: boolean;
  disableNavigation?: boolean;
  link?: string | null;
};

export type DepartmentCategory =
  (typeof DEPARTMENT_CATEGORIES)[keyof typeof DEPARTMENT_CATEGORIES];
