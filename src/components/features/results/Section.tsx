import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import React, { useRef } from "react";
import { IoMapOutline } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import Card from "./Card";
const Section = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  return (
    <div
      ref={container}
      className="relative flex items-center justify-center  overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative z-10 text-white w-full h-full flex flex-col py-10 md:py-18 lg:py-24  xl:py-36 3xl:py-60 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center justify-between gap-5 md:gap-8 xl:gap-5 h-full  wrapper ">
          {[1, 1, 1, 1].map((item, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image
            src={"/results.jpg"}
            fill
            alt="image"
            style={{ objectFit: "cover" }}
          />
          <div className="absolute h-full w-full z-20 bg-overlay opacity-30" />
        </motion.div>
      </div>
    </div>
  );
};

export default Section;
