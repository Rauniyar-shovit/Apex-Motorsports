import { Value } from "@/models";
import React, { Dispatch } from "react";

type ValuesListProps = {
  heading?: string;
  values: Value[];
  selected: number;
  setSelected: Dispatch<React.SetStateAction<number>>;
};

const ValuesList = ({
  heading,
  values,
  selected,
  setSelected,
}: ValuesListProps) => {
  const handleSelect = (index: number) => {
    setSelected(index);
  };

  return (
    <div className="flex-1 w-full h-full mt-3 md:mt-0 ">
      <div className="md:pl-8 lg:pl-15 flex flex-col  h-full justify-between">
        <p className="hidden md:block text-lg font-sans text-muted-primary">
          {heading}
        </p>

        <div className="my-4 md:my-10 ">
          {values.map((value, index) => (
            <p
              onClick={() => handleSelect(index)}
              key={index}
              className={`font-bold text-2xl md:text-3xl lg:text-4xl xl:text-[2.8rem] font-barlow uppercase mb-1 lg:mb-3 cursor-pointer transition-colors ${
                selected === index ? "text-foreground" : "text-gray-500"
              }`}
            >
              {value.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuesList;
