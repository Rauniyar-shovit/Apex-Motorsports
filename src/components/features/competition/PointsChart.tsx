"use client";
import { LabelList, Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { category: "skidpad", points: 275, fill: "#9f8aff" },
  { category: "efficiency", points: 75, fill: "#7f63ff" },
  { category: "autocross", points: 75, fill: "#6f50ff" },
  { category: "endurance", points: 100, fill: "#5f3cff" },
  {
    category: "businessPresentation",
    points: 150,
    fill: "#5636e6",
  },
  { category: "cost", points: 125, fill: "#4c30cc" },
  { category: "design", points: 100, fill: "#432ab3" },
];

// Chart configuration with primary color variants
const chartConfig = {
  points: {
    label: "Points",
  },
  skidpad: {
    label: "Skidpad",
  },
  acceleration: {
    label: "Acceleration",
  },
  efficiency: {
    label: "Efficiency",
  },
  autocross: {
    label: "Autocross",
  },
  endurance: {
    label: "Endurance",
  },
  businessPresentation: {
    label: "Business Presentation",
  },
  cost: {
    label: "Cost",
  },
  design: {
    label: "Design",
  },
} satisfies ChartConfig;

export function PointsChart() {
  return (
    <div className="flex-1">
      <h2 className="text-xl font-barlow font-semibold text-center mb-4">
        Formula SAE Points Distribution
      </h2>

      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[400px]"
      >
        <PieChart>
          <ChartTooltip
            content={
              <ChartTooltipContent hideLabel className="font-sans border-0" />
            }
          />
          <Pie
            data={chartData}
            dataKey="points"
            nameKey="category"
            className="font-sans"
          >
            <LabelList className="font-sans text-xs" />
          </Pie>
          <ChartLegend
            content={<ChartLegendContent nameKey="category" />}
            className="-translate-y-2 flex-wrap gap-2 *:basis-1/5 *:justify-center font-sans"
          />
        </PieChart>
      </ChartContainer>
    </div>
  );
}
