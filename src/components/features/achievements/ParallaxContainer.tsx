import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Card from "./Card";

import { ACHIEVEMENTS } from "@/constants";
import ParallaxBackground from "./ParallaxBackground";

const ParallaxContainer = () => {
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
          {ACHIEVEMENTS.map((item, index) => (
            <Card
              key={index}
              icon={item.icon}
              title={item.title}
              ranking={item.ranking}
              index={index}
            />
          ))}
        </div>
      </div>
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <ParallaxBackground
          image="/race-track.jpg"
          imgTitle="race track"
          y={y}
        />
      </div>
    </div>
  );
};

export default ParallaxContainer;
