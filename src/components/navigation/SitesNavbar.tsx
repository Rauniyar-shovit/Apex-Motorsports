"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import React from "react";
import MobileNavbar from "./MobileNavbar";
import AnimatedNavContainer from "./AnimatedNavContainer";

const SitesNavbar = () => {
  const isMobile = useIsMobile();

  if (isMobile)
    return (
      <MobileNavbar containerStyles="bg-foreground border-muted-primary border-b" />
    );
  return (
    <AnimatedNavContainer
      key="floating"
      navStyles=" top-0 bg-foreground h-20 lg:h-30 border-muted-primary border-b"
    />
  );
};

export default SitesNavbar;
