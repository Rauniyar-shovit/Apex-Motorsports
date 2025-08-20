"use client";
import { motion } from "motion/react";
import React from "react";

const ScrollContent = ({ content }: { content: string[] }) => {
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="flex gap-3  md:gap-6 xl:gap-9 flex-shrink-0"
    >
      {content.map((item, index) => {
        return (
          <p
            className={`font-barlow text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9rem] 2xl:text-[11rem] 3xl:text-[14rem]  uppercase ${
              index % 2 === 0 ? "text-primary" : "text-secondary"
            }`}
            key={index}
          >
            {item}
          </p>
        );
      })}
    </motion.div>
  );
};

export default ScrollContent;
