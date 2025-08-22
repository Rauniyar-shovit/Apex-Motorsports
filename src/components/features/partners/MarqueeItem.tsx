"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PARTNERS = [
  { name: "Mizuno", logo: "/sponsors/1.webp" },
  { name: "Asics", logo: "/sponsors/2.webp" },
  { name: "Adidas", logo: "/sponsors/3.webp" },
  { name: "Puma", logo: "/sponsors/4.webp" },
  { name: "Adidas", logo: "/sponsors/3.webp" },
  { name: "Puma", logo: "/sponsors/4.webp" },
];

const MarqueeItem = ({ from, to }) => {
  return (
    <div className="flex MyGradient">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {PARTNERS.map((image, index) => {
          return (
            <Image src={image.logo} width={120} height={120} key={index} />
          );
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {PARTNERS.map((image, index) => {
          return (
            <Image src={image.logo} width={120} height={120} key={index} />
          );
        })}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
