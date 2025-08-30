"use client";
import Lenis from "lenis";
import { useEffect } from "react";
import ParallaxContainer from "./ParallaxContainer";
import { ACHIEVEMENTS } from "@/data";
import Card from "./Card";

const Achievements = () => {
  useEffect(() => {
    const lenis = new Lenis();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <section className="pt-12 lg:pt-20">
      <ParallaxContainer
        bgImagePath={"/race-track.jpg"}
        bgImageTitle={"race track"}
      >
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
      </ParallaxContainer>
    </section>
  );
};

export default Achievements;
