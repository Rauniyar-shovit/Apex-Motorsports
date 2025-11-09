"use client";

import {
  easeInOut,
  motion,
  useAnimation,
  useInView,
  Variants,
} from "motion/react";
import { ReactNode, useEffect, useRef } from "react";

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
  isInView?: boolean;
};

const defaultVariants: RequiredVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};

const RevealWrapper = ({
  children,
  styles,
  index,
  duration = 0.6,
  variants = defaultVariants,
  isInView,
}: RevealWrapperProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const selfInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView || selfInView) {
      mainControls.start("visible");
    }
  }, [isInView, selfInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
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
