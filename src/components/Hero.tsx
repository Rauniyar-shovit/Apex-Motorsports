"use client";
import Image from "next/image";
import React from "react";
import Navbar from "./Navigation/Navbar";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileNavbar from "./Navigation/MobileNavbar";
import AnimatedText from "./AnimatedText";
import { HERO_TITLES } from "@/constants";
import { motion } from "motion/react";

const Hero = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <div className="relative w-full h-screen">
        {isMobile ? <MobileNavbar /> : <Navbar />}
        <Image
          src={"/f1_cars.avif"}
          alt="formula one cars"
          className="absolute w-full h-full object-cover"
          width={2880}
          height={1800}
        />
        <div className="absolute h-full w-full z-20 bg-overlay" />
      </div>
      <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 transform z-20 whitespace-pre-line">
        <div>
          <motion.h3
            className="font-barlow text-xl md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            Australia&apos;s Premier FSAE Team
          </motion.h3>

          <h1 className="font-barlow text-5xl md:text-7xl lg:text-8xl 2xl:text-[10rem] min-h-30 ">
            <AnimatedText titles={HERO_TITLES} />
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
