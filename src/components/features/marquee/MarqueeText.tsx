"use client";
import React from "react";
import { SCROLL_TEXT } from "@/constants";
import MarqueeContent from "./MarqueeContent";

const MarqueeText = () => {
  const renderMarqueeItem = (item: string, index: number) => (
    <p
      className={`font-barlow text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9rem] 2xl:text-[11rem] 3xl:text-[14rem] uppercase ${
        index % 2 === 0 ? "text-primary" : "text-secondary"
      }`}
      key={index}
    >
      {item}
    </p>
  );

  return (
    <div className="pt-10 md:pt-16 xl:pt-24">
      <div className="flex gap-3 md:gap-6 xl:gap-9">
        {[0, 0].map((_, index) => (
          <MarqueeContent
            containerStyles="gap-3 md:gap-6 xl:gap-9"
            key={index}
            content={SCROLL_TEXT}
            renderItem={renderMarqueeItem}
          />
        ))}
      </div>
    </div>
  );
};

export default MarqueeText;
