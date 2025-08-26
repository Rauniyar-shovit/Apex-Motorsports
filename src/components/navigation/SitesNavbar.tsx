"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import React from "react";
import MobileNavbar from "./MobileNavbar";
import AnimatedNavContainer from "./AnimatedNavContainer";

const SitesNavbar = () => {
  const isMobile = useIsMobile();

  if (isMobile) return <MobileNavbar containerStyles="bg-foreground " />;
  return (
    <AnimatedNavContainer
      key="floating"
      navStyles=" top-0 bg-foreground h-30 "
    />
  );
};

export default SitesNavbar;
