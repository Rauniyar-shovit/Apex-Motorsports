import RevealWrapper from "@/components/reusable/RevealWrapper";
import React from "react";

const BuildTheFuture = () => {
  return (
    <section className="section-padding wrapper">
      <p className="mb-10   mt-10 text-2xl font-barlow font-[500] uppercase tracking-wider text-center max-w-2xl mx-auto">
        a student-led engineering organisation that mirrors the processes of
        industry leaders in design, manufacturing, and systems integration.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-3  p-4 items-center justify-center lg:px-20">
        <h1 className="text-8xl lg:text-9xl font-extrabold uppercase text-transparent bg-[url('/bg-parallax.jpg')] bg-cover bg-center bg-clip-text font-sans md:col-span-3 justify-self-center ">
          Build
        </h1>
        <h1 className="text-8xl lg:text-9xl font-extrabold uppercase text-transparent bg-[url('/bg-parallax.jpg')] bg-cover bg-center bg-clip-text font-sans md:col-span-3 md:col-start-2 row-start-2 justify-self-center">
          the
        </h1>
        <h1 className="text-8xl lg:text-9xl font-extrabold uppercase text-transparent bg-[url('/bg-parallax.jpg')] bg-cover bg-center bg-clip-text font-sans md:col-span-3 md:col-start-3 row-start-3 justify-self-center">
          Future
        </h1>
        <RevealWrapper styles="md:col-span-2 md:col-start-4 " direction="right">
          <div className="font-sans  text-sm md:text-base text-center md:text-left mt-6 md:mt-0">
            Our members collaborate across mechanical, electrical, software, and
            business divisions, handling concept generation, CAD modelling,
            testing, data analysis, and project delivery.
          </div>
        </RevealWrapper>
        <RevealWrapper
          styles="md:col-span-2 md:row-start-3 md:col-start-1"
          direction="left"
        >
          <div className="font-sans text-sm lg:text-base text-center md:text-left mt-6 md:mt-0">
            Using tools like PTC Creo, ANSYS, MATLAB, Windchill, Altium, and
            Ubuntu, we integrate real-world engineering workflows that promote
            teamwork, accountability, and innovation across all disciplines.
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};

export default BuildTheFuture;
