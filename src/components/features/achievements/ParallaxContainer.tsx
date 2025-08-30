import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Card from "./Card";

import ParallaxBackground from "./ParallaxBackground";
import { ACHIEVEMENTS } from "@/data";

type ParallaxContainerProps = {
  children?: React.ReactNode;
  bgImagePath: string;
  bgImageTitle: string;
};

const ParallaxContainer = ({
  children,
  bgImagePath,
  bgImageTitle,
}: ParallaxContainerProps) => {
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
        {children}
      </div>
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <ParallaxBackground image={bgImagePath} imgTitle={bgImageTitle} y={y} />
      </div>
    </div>
  );
};

export default ParallaxContainer;
