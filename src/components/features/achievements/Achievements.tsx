"use client";
import Lenis from "lenis";
import { useEffect } from "react";
import ParallaxContainer from "./ParallaxContainer";

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
      <ParallaxContainer />
    </section>
  );
};

export default Achievements;
