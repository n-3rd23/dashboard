"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type TBarChartComponent = {
  data?: any[];
  config: ChartConfig;
  chartContainerProps?: React.ComponentProps<typeof ChartContainer>;
  barChartProps?: React.ComponentProps<typeof BarChart>;
  cartesianGridProps?: React.ComponentProps<typeof CartesianGrid>;
  xAxisProps?: React.ComponentProps<typeof XAxis>;
  chartTooltipProps?: React.ComponentProps<typeof ChartTooltip>;
  barProps?: React.ComponentProps<typeof Bar>[];
};

export default function BarChartComponent({
  data,
  config,
  chartContainerProps,
  barChartProps,
  barProps,
  cartesianGridProps,
  chartTooltipProps,
  xAxisProps,
}: TBarChartComponent) {
  return (
    <ChartContainer config={config} {...chartContainerProps}>
      <BarChart accessibilityLayer data={data} {...barChartProps}>
        <CartesianGrid vertical={false} {...cartesianGridProps} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
          {...xAxisProps}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dot" />}
          {...chartTooltipProps}
        />
        {barProps && barProps.length
          ? barProps.map((item, index) => {
              // @ts-ignore
              return <Bar key={index} {...item} />;
            })
          : null}
      </BarChart>
    </ChartContainer>
  );
}
