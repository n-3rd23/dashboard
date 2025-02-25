"use client";

import AreaChartComponent from "@/components/molecules/chart/area-chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig } from "@/components/ui/chart";
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function DashboardGraph() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Area Chart</CardTitle>
        <CardDescription className="text-sm">Sample area chart</CardDescription>
      </CardHeader>
      <CardContent>
        <AreaChartComponent
          config={chartConfig}
          data={chartData}
          areas={[
            {
              dataKey: "desktop",
              type: "natural",
              fill: "var(--color-desktop)",
              fillOpacity: 0.4,
              stroke: "var(--color-desktop)",
              stackId: "a",
            },
            {
              dataKey: "mobile",
              type: "natural",
              fill: "var(--color-mobile)",
              fillOpacity: 0.4,
              stroke: "var(--color-mobile)",
              stackId: "a",
            },
          ]}
          xAxisProps={{
            dataKey: "month",
            tickLine: false,
            axisLine: false,
            tickMargin: 8,
            tickFormatter: (value) => value.slice(0, 3),
          }}
        />
      </CardContent>
    </Card>
  );
}
