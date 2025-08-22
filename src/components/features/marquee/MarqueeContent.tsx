"use client";
import { motion } from "motion/react";
import React, { Fragment, ReactNode } from "react";

type MarqueeContentProps<T> = {
  content: T[];
  containerStyles?: string;
  renderItem: (item: T, index: number) => ReactNode;
  from?: string | number;
  to?: string;
  duration?: number;
};

const MarqueeContent = <T,>({
  content,
  containerStyles,
  renderItem,
  from = 0,
  to = "-100%",
  duration = 25,
}: MarqueeContentProps<T>) => {
  return (
    <motion.div
      initial={{ x: `${from}` }}
      animate={{ x: `${to}` }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className={`flex flex-shrink-0 ${containerStyles}`}
    >
      {content.map((item, index) => {
        return <Fragment key={index}>{renderItem(item, index)}</Fragment>;
      })}
    </motion.div>
  );
};

export default MarqueeContent;
