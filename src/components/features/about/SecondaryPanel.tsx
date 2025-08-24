import { InfoItem } from "@/models";
import React from "react";

const SecondaryPanel = ({ info }: { info: InfoItem[] }) => {
  const containerPaddings =
    "px-6 py-12 lg:px-8 sm:py-16 md:py-12 xl:p-16 3xl:px-24 ";
  return (
    <div
      className={`${containerPaddings} space-y-8 md:space-y-12 bg-foreground font-sans text-white h-full flex flex-col  justify-center`}
    >
      {info.map((item, index) => (
        <div key={index}>
          <h3 className="uppercase font-barlow text-xl xl:text-2xl font-extrabold mb-1 md:mb-3">
            {item.title}
          </h3>
          <p className="text-muted-secondary leading-relaxed ">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SecondaryPanel;
