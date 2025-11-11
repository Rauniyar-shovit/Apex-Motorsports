"use client";

import {
  easeInOut,
  motion,
  useAnimation,
  useInView,
  Variants,
} from "motion/react";
import { ReactNode, useEffect, useRef } from "react";

type Direction = "left" | "right" | "up" | "down" | undefined;
type RequiredVariants = {
  hidden: NonNullable<Variants[string]>;
  visible: NonNullable<Variants[string]>;
};

type RevealWrapperProps = {
  children: ReactNode;
  styles?: string;
  index?: number;
  duration?: number;
  variants?: RequiredVariants;
  direction?: Direction;
};

const defaultVariants: RequiredVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};

const getVariants = (direction: Direction): RequiredVariants => {
  const distance = 100; // 🔹 distance to move before sliding in

  switch (direction) {
    case "left":
      return {
        hidden: { opacity: 0, x: -distance },
        visible: { opacity: 1, x: 0 },
      };
    case "right":
      return {
        hidden: { opacity: 0, x: distance },
        visible: { opacity: 1, x: 0 },
      };
    case "up":
      return {
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0 },
      };
    case "down":
      return {
        hidden: { opacity: 0, y: -distance },
        visible: { opacity: 1, y: 0 },
      };
    default:
      return defaultVariants;
  }
};

const RevealWrapper = ({
  children,
  styles,
  index,
  duration = 0.6,
  variants,
  direction,
}: RevealWrapperProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const chosenVariants = getVariants(direction);

  return (
    <motion.div
      ref={ref}
      variants={variants || chosenVariants}
      initial="hidden"
      animate={mainControls}
      transition={{
        ease: easeInOut,
        duration: duration,
        delay: index !== undefined ? index * 0.25 : 0.25,
      }}
      className={styles}
    >
      {children}
    </motion.div>
  );
};

export default RevealWrapper;
