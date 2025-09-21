import RevealWrapper from "@/components/reusable/RevealWrapper";
import { Achievement } from "@/models";
import { ACHIEVEMENTS_ICONS } from "@/sanity/constants";
import React from "react";

type CardProps = Achievement & {
  index?: number;
};

const Card = ({
  iconName,
  title,
  ranking,

  index,
}: CardProps) => {
  const Icon = iconName && ACHIEVEMENTS_ICONS[iconName];
  return (
    <RevealWrapper styles=" h-full w-full" index={index}>
      <div className="bg-foreground flex flex-col  items-center justify-center gap-2 px-8 py-6 sm:px-12 lg:py-12 xl:px-6 xl:py-16 flex-1 w-full h-full group cursor-pointer">
        {Icon && (
          <Icon className="text-6xl text-primary group-hover:text-background mb-2  transition-all duration-300" />
        )}
        <div className="flex flex-col items-center justify-center">
          <h4 className="font-barlow text-xl xl:text-2xl uppercase text-center xl:mb-2">
            {title}
          </h4>
          {ranking && (
            <p className="text-primary text-3xl font-barlow uppercase">
              {ranking}
            </p>
          )}
        </div>
      </div>
    </RevealWrapper>
  );
};

export default Card;
