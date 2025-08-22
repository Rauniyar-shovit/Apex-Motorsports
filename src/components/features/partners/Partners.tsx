"use client";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
const PARTNERS = [
  { name: "Mizuno", logo: "/sponsors/1.webp" },
  { name: "Asics", logo: "/sponsors/2.webp" },
  { name: "Adidas", logo: "/sponsors/3.webp" },
  { name: "Puma", logo: "/sponsors/4.webp" },
];

const from = 0;
const to = "-100%";

const Partners = () => {
  return (
    <section className="wrapper section-padding">
      {/* Heading */}
      <div className="flex flex-col justify-center lg:flex-row-reverse items-center gap-3 md:gap-5">
        <h2 className=" font-barlow uppercase text-2xl sm:text-3xl leading-snug flex-1/3 text-center">
          Our Top Industry Partners
        </h2>

        {/* Logos Row (responsive) */}
        <div className="flex items-center justify-center overflow-hidden  py-8 lg:mx-10">
          <div className="flex">
            <motion.div
              initial={{ x: `${from}` }}
              animate={{ x: `${to}` }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="flex flex-shrink-0"
            >
              {PARTNERS.map((image, index) => {
                return (
                  <Image
                    className="pr-12 "
                    width={160}
                    height={160}
                    src={`${image.logo}`}
                    key={index}
                    alt="logo"
                  />
                );
              })}
            </motion.div>

            <motion.div
              initial={{ x: `${from}` }}
              animate={{ x: `${to}` }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="flex flex-shrink-0"
            >
              {PARTNERS.map((image, index) => {
                return (
                  <Image
                    className="pr-12 "
                    width={160}
                    height={160}
                    src={`${image.logo}`}
                    key={index}
                    alt="logo"
                  />
                );
              })}
            </motion.div>
            <motion.div
              initial={{ x: `${from}` }}
              animate={{ x: `${to}` }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="flex flex-shrink-0"
            >
              {PARTNERS.map((image, index) => {
                return (
                  <Image
                    className="pr-12 "
                    width={160}
                    height={160}
                    src={`${image.logo}`}
                    key={index}
                    alt="logo"
                  />
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
