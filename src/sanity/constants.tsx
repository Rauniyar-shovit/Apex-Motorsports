import {
  IoBriefcaseOutline,
  IoCheckmarkCircleOutline,
  IoConstructOutline,
  IoFlag,
  IoMedal,
  IoPersonCircleOutline,
  IoStar,
  IoTrophy,
} from "react-icons/io5";
import { SiTarget } from "react-icons/si";

export const ACHIEVEMENTS_ICONS: Record<string, React.ElementType> = {
  IoConstructOutline,
  IoCheckmarkCircleOutline,
  IoPersonCircleOutline,
  IoBriefcaseOutline,
  IoTrophy,
  IoMedal,
  IoStar,
  IoFlag,
  SiTarget,
};

export const DEPARTMENT_CATEGORIES = {
  MANAGEMENT: "management",
  TECHNICAL: "technical",
  OPERATION: "operation",
  ENTERPRISE: "enterprise",
} as const;
