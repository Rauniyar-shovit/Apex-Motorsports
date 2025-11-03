"use client";
import { FORMULA_SAE_DETAILS } from "@/constants";
import CompetitionInfo from "./CompetitionInfo";
import StatsCard from "./StatsCard";

export default function FormulaSAE() {
  return (
    <section className="relative section-padding">
      <div className="wrapper  max-w-7xl ">
        <CompetitionInfo />

        <div className="grid grid-cols-2 md:grid-cols-4  gap-3 md:gap-6 lg:gap-3 sm:px-10 md:px-0 lg:px-16 mt-6 ">
          <StatsCard
            number={FORMULA_SAE_DETAILS.stats.competition.value}
            title={FORMULA_SAE_DETAILS.stats.competition.title}
          />

          <StatsCard
            number={FORMULA_SAE_DETAILS.stats.countries.value}
            title={FORMULA_SAE_DETAILS.stats.countries.title}
          />
          <StatsCard
            number={FORMULA_SAE_DETAILS.stats.teams.value}
            title={FORMULA_SAE_DETAILS.stats.teams.title}
          />
          <StatsCard
            number={FORMULA_SAE_DETAILS.stats.students.value}
            title={FORMULA_SAE_DETAILS.stats.students.title}
          />
        </div>
        <div>

        </div>
      </div>
    </section>
  );
}
