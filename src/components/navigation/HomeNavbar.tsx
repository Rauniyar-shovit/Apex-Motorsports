"use client";
import { stickyNavAnimation } from "@/animations/navbar";
import { useIsMobile } from "@/hooks/use-mobile";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import AnimatedNavContainer from "./AnimatedNavContainer";
import MobileNavbar from "./MobileNavbar";

type NavbarProps = {
  intersectingSectionId?: string;
};

const HomeNavbar = ({ intersectingSectionId = "" }: NavbarProps) => {
  const [isSticky, setIsSticky] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const section = document.getElementById(intersectingSectionId);
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0.01 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [intersectingSectionId]);

  if (isMobile)
    return (
      <MobileNavbar containerStyles="absolute top-0 left-0 bg-transparent md:mt-4 " />
    );

  return (
    <AnimatePresence>
      {isSticky ? (
        // STICKY VERSION

        <AnimatedNavContainer
          key="sticky"
          navStyles="fixed top-0 bg-foreground backdrop-blur shadow-sm z-50 h-22 shadow-xl"
          motionProps={stickyNavAnimation}
        />
      ) : (
        // FLOATING VERSION

        <AnimatedNavContainer
          key="floating"
          navStyles="absolute top-0 bg-transparent mt-3 h-20"
        />
      )}
    </AnimatePresence>
  );
};

export default HomeNavbar;
