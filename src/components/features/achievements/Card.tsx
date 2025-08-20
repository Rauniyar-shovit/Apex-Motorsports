import RevealWrapper from "@/components/RevealWrapper";
import { Achievement } from "@/models";
import React from "react";

type CardProps = Achievement & {
  index?: number;
};

const Card = ({
  icon: Icon,
  title,
  ranking,
  description,
  index,
}: CardProps) => {
  return (
    <RevealWrapper styles=" h-full w-full" index={index}>
      <div className="bg-foreground flex flex-col  items-center justify-center gap-2 px-8 py-6 sm:px-12 lg:py-12 xl:px-6 xl:py-16 flex-1 w-full h-full group cursor-pointer">
        <Icon className="text-6xl text-primary group-hover:text-background mb-2  transition-all duration-300" />
        <div className="flex flex-col items-center justify-center">
          <h4 className="font-barlow text-xl xl:text-2xl uppercase text-center xl:mb-2">
            {title}
          </h4>
          {ranking && (
            <p className="text-primary text-3xl font-barlow uppercase">
              {ranking}
            </p>
          )}

          <p className="font-sans text-muted-secondary text-center xl:mb-3">
            {description}
          </p>
        </div>
      </div>
    </RevealWrapper>
  );
};

export default Card;
