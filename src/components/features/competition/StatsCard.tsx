import CountUp from "@/components/utils/CountUp";
import React from "react";

const StatsCard = ({ title, number }: { title: string; number: number }) => {
  return (
    <div className={` px-6 py-6 lg:px-10 lg:py-10  font-barlow `}>
      <p className="uppercase text-lg lg:text-xl text-center tracking-wider">
        {title}
      </p>
      <p className="mt-2 text-5xl lg:text-6xl text-center font-extrabold leading-none font-barlow text-primary">
        <CountUp from={0} to={number} duration={0.2} />+
      </p>
    </div>
  );
};

export default StatsCard;
