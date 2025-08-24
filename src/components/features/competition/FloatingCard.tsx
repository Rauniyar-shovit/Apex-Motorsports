import CountUp from "@/components/utils/CountUp";
import React from "react";

const FloatingCard = ({
  containerStyle,
  backgroundColor,
  title,
  number,
}: {
  title: string;
  containerStyle: string;
  number: number;
  backgroundColor?: string;
}) => {
  return (
    <div
      className={`absolute ${containerStyle}  px-6 py-6 lg:px-10 lg:py-10 shadow-xl font-barlow  min-w-[160px] lg:min-w-[190px] bg-foreground`}
      style={{ backgroundColor }}
    >
      <p className="uppercase text-lg lg:text-xl tracking-wider">{title}</p>
      <p className="mt-2 text-5xl lg:text-6xl font-extrabold leading-none font-barlow">
        <CountUp from={0} to={number} duration={0.2} />+
      </p>
    </div>
  );
};

export default FloatingCard;
