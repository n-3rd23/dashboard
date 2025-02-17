"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import BarChartComponent from "@/components/molecules/chart/bar-chart";

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

type TDashboardBarChart = {
  title: string;
  description?: string;
};

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

export default function DashboardBarChart({
  title,
  description,
}: TDashboardBarChart) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <BarChartComponent
          config={chartConfig}
          data={chartData}
          barProps={[
            {
              dataKey: "desktop",
              fill: "var(--color-desktop)",
              radius: 4,
            },
            {
              dataKey: "mobile",
              fill: "var(--color-mobile)",
              radius: 4,
            },
          ]}
        />
      </CardContent>
    </Card>
  );
}
