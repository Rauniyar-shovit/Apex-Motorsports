import React from "react";

const Story = () => {
  return (
    <section className=" font-sans bg-foreground">
      <div className="section-padding wrapper">
        <div className={` font-sans lg:px-20 py-14 md:py-16   px-5 `}>
          <p className="uppercase text-sm  font-[600] tracking-wider xl:mb-4 text-white">
            My story
          </p>

          <h2 className="mt-2 font-barlow text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight text-primary uppercase ">
            at apex motorsport
          </h2>

          <p className="mt-3 md:mt-6 text-base lg:text-lg leading-7 md:leading-8 text-muted-secondary">
            My journey with Apex has been nothing short of transformative. From
            the very first day, I was surrounded by a team that valued
            innovation, collaboration, and perseverance. Every challenge became
            an opportunity to grow, and every milestone reflected not just my
            effort, but the collective spirit of the team. Being part of Apex
            taught me resilience, creativity, and the importance of pushing
            boundaries to achieve excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;
