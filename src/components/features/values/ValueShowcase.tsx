import Image from "next/image";
import React from "react";
import { IconType } from "react-icons";
import { FaArrowRightLong } from "react-icons/fa6";

type ValueShowcaseProps = {
  image: string;
  icon: IconType;
  description: string;
  valueTitle: string;
};
const ValueShowcase = ({
  image,
  icon: Icon,
  description,
  valueTitle,
}: ValueShowcaseProps) => {
  return (
    <div className="flex-1 w-full h-full">
      <div className="flex flex-col md:flex-1 relative w-full h-full">
        {/* Image div */}

        <div className="relative w-full md:w-[75%] h-[620px] md:h-[450px] xl:h-[585px] top-0 left-0">
          <Image
            src={image}
            alt={valueTitle}
            className="absolute w-full h-full "
            width={1000}
            height={1200}
          />
        </div>

        {/* overlay card div */}
        <div className="absolute bottom-0 md:right-0 md:w-[80%] lg:w-[75%] bg-foreground  p-4 md:p-6 text-white shadow-2xl group">
          <div className="p-4 lg:p-6 2xl:p-10 flex flex-col justify-between cursor-pointer">
            <Icon className="h-15 w-15 mb-8 lg:mb-10 xl:mb-14" />
            <p className="font-sans text-muted-secondary  lg:text-lg mb-6 lg:mb-6">
              {description}
            </p>

            <FaArrowRightLong className="h-5 w-5 group-hover:scale-110 transition-all duration-200 mb-4 md:mb-6 lg:mb-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueShowcase;
