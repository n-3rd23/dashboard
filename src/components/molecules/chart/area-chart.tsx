import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { Area, CartesianGrid, XAxis, AreaChart } from "recharts";

type TAreaChartComponent = {
  config: ChartConfig;
  data?: any[];
  chartContainerProps?: Omit<
    React.ComponentProps<typeof ChartContainer>,
    "config"
  >;
  areaChartProps?: Omit<React.ComponentProps<typeof AreaChart>, "data">;
  xAxisProps?: React.ComponentProps<typeof XAxis>;
};

export default function AreaChartComponent({
  config,
  data,
  chartContainerProps,
  areaChartProps = {
    accessibilityLayer: true,
    margin: {
      left: 12,
      right: 12,
    },
  },
  xAxisProps,
}: TAreaChartComponent) {
  return (
    <ChartContainer config={config} {...chartContainerProps}>
      <AreaChart data={data} {...areaChartProps}>
        <CartesianGrid vertical={false} />
        <XAxis
          //   dataKey="month"
          //   tickLine={false}
          //   axisLine={false}
          //   tickMargin={8}
          //   tickFormatter={(value) => value.slice(0, 3)}
          {...xAxisProps}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dot" />}
        />
        <Area
          dataKey="mobile"
          type="natural"
          fill="var(--color-mobile)"
          fillOpacity={0.4}
          stroke="var(--color-mobile)"
          stackId="a"
        />
        <Area
          dataKey="desktop"
          type="natural"
          fill="var(--color-desktop)"
          fillOpacity={0.4}
          stroke="var(--color-desktop)"
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  );
}
