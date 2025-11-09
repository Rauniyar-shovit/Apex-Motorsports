"use client";
import { FORMULA_SAE_DETAILS } from "@/constants";
import CompetitionInfo from "./CompetitionInfo";
import StatsCard from "./StatsCard";
import { PointsPieChart } from "./PointsPieChart";
import Button from "@/components/reusable/Button";

export default function FormulaSAE() {
  return (
    <section className="relative section-padding" id="formula-sae">
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
        <div className=" flex flex-col items-center gap-10 md:gap-4 md:flex-row mt-10">
          <PointsPieChart
            chartConfig={FORMULA_SAE_DETAILS.pointsPieChart.chartConfig}
            chartData={FORMULA_SAE_DETAILS.pointsPieChart.chartData}
          />
          <div className="flex-1 font-sans lg:pr-10 ">
            <p className="uppercase font-barlow font-[600]   text-2xl mb-4 text-center md:text-left">
              Competition Structure
            </p>
            <p className="mb-4 whitespace-pre-wrap text-center md:text-left ">
              {FORMULA_SAE_DETAILS.structureDescription}
            </p>
          </div>
        </div>

        <div className=" flex justify-center mt-8">
          <Button
            handleClick={() => window.open(FORMULA_SAE_DETAILS.link, "_blank")}
            btnStyles={
              "border border-white bg-foreground hover:text-foreground hover:border-primary px-8 py-4 md:mt-10 tracking-widest text-white shadow-none"
            }
            beforeStyles={"before:bg-background "}
            title={"Learn More"}
          />
        </div>
      </div>
    </section>
  );
}
