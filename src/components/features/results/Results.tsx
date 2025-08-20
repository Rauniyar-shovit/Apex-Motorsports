"use client";
import Lenis from "lenis";
import { useEffect } from "react";
import Section from "./Section";

const Results = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    // <section className="pt-12 lg:pt-20">
    //   <motion.div className="relative w-full h-screen" style={{ y }}>
    //     <Image
    //       ref={container}
    //       src={"/results.jpg"}
    //       alt="formula one cars"
    //       className="absolute w-full h-full object-cover"
    //       width={2880}
    //       height={1800}
    //     />
    //     <div className="absolute h-full w-full z-20 bg-overlay opacity-30" />
    //   </motion.div>
    // </section>
    <section className="pt-12 lg:pt-20">
      <Section />
    </section>
  );
};

export default Results;
