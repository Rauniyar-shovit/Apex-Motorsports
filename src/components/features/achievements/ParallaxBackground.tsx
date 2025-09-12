import { motion, MotionValue } from "motion/react";
import Image, { StaticImageData } from "next/image";

type ParallaxBackgroundProps = {
  y: MotionValue<string>;
  image: StaticImageData;
  imgTitle: string;
};

const ParallaxBackground = ({
  y,
  image,
  imgTitle,
}: ParallaxBackgroundProps) => {
  return (
    <motion.div style={{ y }} className="relative w-full h-full">
      <Image
        src={image}
        fill
        alt={imgTitle}
        style={{ objectFit: "cover" }}
        placeholder="blur"
      />
      <div className="absolute h-full w-full z-20 bg-overlay opacity-30" />
    </motion.div>
  );
};

export default ParallaxBackground;
