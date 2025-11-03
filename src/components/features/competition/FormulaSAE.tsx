"use client";
import { FORMULA_SAE_DETAILS } from "@/constants";
import CompetitionInfo from "./CompetitionInfo";
import StatsCard from "./StatsCard";
import { PointsChart } from "./PointsChart";

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
        <div className=" flex flex-col items-center gap-4 md:flex-row mt-10 ">
          <PointsChart />
          <div className="flex-1 font-sans">
            <p className="uppercase font-barlow font-[600]   text-2xl mb-4">
              Competition Structure
            </p>
            <p className="mb-4">
              Formula Student is divided into distinct classes; Combustion,
              Driverless and Electric. At competitions each car competes
              separately and is judged in two types of events, Dynamic and
              Static.
            </p>
            <p className="mb-4">
              Static events allow the team to demonstrate their knowledge behind
              the development of the cars and test industry skills such as
              entrepreneurialism, financial acumen and the holistic engineering
              design process behind the cars.
            </p>
            <p className="mb-4">
              Dynamic events are the culmination of the design process, testing
              the performance of the cars in a variety of scenarios. These
              events require more than just the quickest car; they are a test of
              reliability, efficiency and driver skill.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
