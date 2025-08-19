"use client";
import { HERO_TITLES } from "@/constants";
import { motion } from "motion/react";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import { IoArrowDown } from "react-icons/io5";
const Hero = () => {
  const handleScroll = () => {
    const section = document.getElementById("values");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="hero">
      <div className="relative w-full h-screen">
        <Image
          src={"/f1_cars.avif"}
          alt="formula one cars"
          className="absolute w-full h-full object-cover"
          width={2880}
          height={1800}
        />
        <div className="absolute h-full w-full z-20 bg-overlay opacity-30" />
      </div>
      <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 z-20 whitespace-pre-line text-white">
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
      <div
        className="absolute bottom-10 right-10 md:bottom-20 md:right-20 z-20 whitespace-pre-line text-white cursor-pointer"
        onClick={handleScroll}
      >
        <div className="flex items-center justify-center gap-1">
          <h1 className="font-barlow text-xs lg:text-lg uppercase">
            Scrolll Down
          </h1>
          <motion.div
            className="mt-2"
            animate={{ y: [0, -8, 0] }} // up, then back down
            transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
          >
            <IoArrowDown className="h-4 w-4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
