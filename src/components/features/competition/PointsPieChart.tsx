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

type PointsPieChartProps = {
  chartData: { category: string; points: number; fill: string }[];
  chartConfig: ChartConfig;
};
export function PointsPieChart({
  chartData,
  chartConfig,
}: PointsPieChartProps) {
  return (
    <div className="flex-1">
      <h2 className="text-xl font-barlow font-semibold text-center mb-4">
        Formula SAE Points Distribution
      </h2>

      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square h-[400px]"
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
