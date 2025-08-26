"use client";
import { VALUE_HEADING } from "@/constants";
import ValueShowcase from "./ValueShowcase";
import ValuesList from "./ValuesList";
import { useState } from "react";
import RevealWrapper from "@/components/reusable/RevealWrapper";
import { VALUES } from "@/data";

const Values = () => {
  const [selectedValueIndex, setSelectedValueIndex] = useState(0);

  const value = VALUES[selectedValueIndex];

  return (
    <section id="values">
      <RevealWrapper>
        <div className="wrapper section-padding">
          <div className=" flex flex-col md:flex-row lg:gap-6 md:h-[560px] xl:h-[695px]">
            <ValueShowcase
              valueTitle={value.title}
              icon={value.icon}
              image={value.image}
              description={value.description}
            />
            <ValuesList
              heading={VALUE_HEADING}
              values={VALUES}
              selected={selectedValueIndex}
              setSelected={setSelectedValueIndex}
            />
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
};

export default Values;
