import React from "react";

type PrimaryPanelProps = {
  eyebrow: string;
  title: string;
  description: string;
};

const PrimaryPanel = ({ eyebrow, title, description }: PrimaryPanelProps) => {
  const containerPaddings =
    "px-6 lg:px-8 py-14 lg:py-20 xl:py-32 2xl:py-40 xl:pr-20 2xl:pr-48  xl:pl-[10vw] 2xl:pl-[12vw] 3xl:pl-[20vw]";

  return (
    <>
      <div className={`md:col-span-2 font-sans ${containerPaddings} `}>
        <p className="uppercase text-sm  font-[600] tracking-wider xl:mb-4">
          {eyebrow}
        </p>

        <h2 className="mt-2 font-barlow text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight uppercase xl:mr-[20%] 2xl:mr-[30%]">
          {title}
        </h2>

        <p className="mt-3 md:mt-6 text-base lg:text-lg leading-7 md:leading-8 text-muted-primary xl:ml-[35%]">
          {description}
        </p>
      </div>
    </>
  );
};

export default PrimaryPanel;
