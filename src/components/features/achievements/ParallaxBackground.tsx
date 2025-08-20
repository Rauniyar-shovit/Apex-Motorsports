import { AnyResolvedKeyframe, motion, MotionValue } from "motion/react";
import Image from "next/image";
import React from "react";

type ParallaxBackgroundProps = {
  y: MotionValue<string>;
  image: string;
  imgTitle: string;
};

const ParallaxBackground = ({
  y,
  image,
  imgTitle,
}: ParallaxBackgroundProps) => {
  return (
    <motion.div style={{ y }} className="relative w-full h-full">
      <Image src={image} fill alt={imgTitle} style={{ objectFit: "cover" }} />
      <div className="absolute h-full w-full z-20 bg-overlay opacity-30" />
    </motion.div>
  );
};

export default ParallaxBackground;
