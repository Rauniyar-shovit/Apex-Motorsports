"use client";
import React from "react";
import ScrollContent from "./ScrollContent";
import { SCROLL_TEXT } from "@/constants";

const InfiniteScrollText = () => {
  return (
    <div className="pt-10 md:pt-16 xl:pt-24">
      <div className="flex gap-3 md:gap-6 xl:gap-9">
        <ScrollContent content={SCROLL_TEXT} />
        <ScrollContent content={SCROLL_TEXT} />
      </div>
    </div>
  );
};

export default InfiniteScrollText;
