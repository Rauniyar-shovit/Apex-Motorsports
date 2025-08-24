"use client";
import Image from "next/image";
import CompetitionInfo from "./CompetitionInfo";
import FloatingCard from "./FloatingCard";
import { FORMULA_SAE_DETAILS } from "@/constants";

export default function FormulaSAE() {
  return (
    <section className="relative section-padding">
      <div className="bg-foreground text-white">
        <div className="wrapper  max-w-7xl py-16 lg:py-24 grid lg:grid-cols-2 gap-20 items-center">
          {/* formula sae info */}
          <CompetitionInfo />

          {/*  image and floating stats*/}
          <div className="relative ">
            <div className="relative aspect-[16/11] w-full overflow-hidden ">
              <Image
                src={FORMULA_SAE_DETAILS.image} // put your image here
                alt={FORMULA_SAE_DETAILS.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <FloatingCard
              containerStyle={`-bottom-15 lg:bottom-3 lg:-left-16`}
              number={FORMULA_SAE_DETAILS.stats.teams.value}
              title={FORMULA_SAE_DETAILS.stats.teams.title}
              backgroundColor={FORMULA_SAE_DETAILS.stats.teams.accent}
            />

            <FloatingCard
              containerStyle={`-bottom-15 left-50 lg:bottom-3 lg:left-40 border border-muted-primary lg:border-none`}
              number={FORMULA_SAE_DETAILS.stats.countries.value}
              title={FORMULA_SAE_DETAILS.stats.countries.title}
              backgroundColor={FORMULA_SAE_DETAILS.stats.countries.accent}
            />
          </div>
        </div>
        <div className="pt-16"></div>
      </div>
    </section>
  );
}
