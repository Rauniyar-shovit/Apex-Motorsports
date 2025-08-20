"use client";

import { motion, useAnimation, useInView } from "motion/react";
import React, { ReactNode, useEffect, useRef } from "react";
motion;

const RevealWrapper = ({
  children,
  styles,
  index,
}: {
  children: ReactNode;
  styles?: string;
  index?: number;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 0.6,
        delay: index !== undefined ? index * 0.25 : 0.25,
      }}
      className={styles}
    >
      {children}
    </motion.div>
  );
};

export default RevealWrapper;
