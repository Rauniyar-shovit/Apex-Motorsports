import React from "react";

const DarkPanel = () => {
  const containerPaddings =
    "px-6 py-12 lg:px-8 sm:py-16 md:py-12 xl:p-16 3xl:px-24 ";
  return (
    <div
      className={`${containerPaddings} space-y-8 md:space-y-12 bg-foreground font-sans text-white h-full flex flex-col  justify-center`}
    >
      <div>
        <h3 className="uppercase font-barlow text-xl xl:text-2xl font-extrabold mb-1 md:mb-3">
          What We Do
        </h3>
        <p className="text-muted-secondary leading-relaxed ">
          We design, build, and race formula-style cars, turning classroom
          learning into real engineering experience.
        </p>
      </div>

      {/* The Opportunities */}
      <div>
        <h3 className="uppercase font-barlow text-xl xl:text-2xl font-extrabold mb-1 md:mb-3">
          The Opportunities
        </h3>
        <p className="text-muted-secondary leading-relaxed ">
          The competition lets us innovate, collaborate, and gain industry-ready
          skills in engineering, leadership, and teamwork.
        </p>
      </div>
    </div>
  );
};

export default DarkPanel;
