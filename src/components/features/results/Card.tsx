import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoMapOutline } from "react-icons/io5";

const Card = () => {
  return (
    <div className="bg-foreground flex flex-col  items-center justify-center gap-2 px-8 py-6 sm:px-12 lg:py-12 xl:px-6 xl:py-16 flex-1 w-full">
      <IoMapOutline className="text-6xl text-primary mb-2 " />
      <div className="flex flex-col items-center justify-center">
        <h4 className="font-barlow text-xl xl:text-2xl uppercase text-center xl:mb-2">
          Personal Growth
        </h4>
        <p className="font-sans text-muted-secondary text-center xl:mb-3">
          Sed do eiusm tempor
        </p>
        <HiDotsHorizontal className="text-muted-primary text-4xl" />
      </div>
    </div>
  );
};

export default Card;
