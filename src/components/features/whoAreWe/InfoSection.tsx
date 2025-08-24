import React from "react";

const InfoSection = () => {
  const containerPaddings =
    "px-6 lg:px-8 py-14 lg:py-20 xl:py-32 2xl:py-40 xl:pr-20 2xl:pr-48  xl:pl-[10vw] 2xl:pl-[12vw] 3xl:pl-[20vw]";

  return (
    <div className={`md:col-span-2 font-sans ${containerPaddings} `}>
      <p className="uppercase text-sm  font-[600] tracking-wider xl:mb-4">
        Beyond Racing
      </p>

      <h2 className="mt-2 font-barlow text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight uppercase xl:mr-[20%] 2xl:mr-[30%]">
        From Concept to Competition, We Engineer the Future
      </h2>

      <p className="mt-3 md:mt-6 text-base lg:text-lg leading-7 md:leading-8 text-muted-primary xl:ml-[35%]">
        Apex Motorsports turns student ambition into real-world engineering by
        designing, building, and racing formula-style cars. Through innovation
        and collaboration, we prepare future engineers to compete today and lead
        tomorrow.
      </p>
    </div>
  );
};

export default InfoSection;
