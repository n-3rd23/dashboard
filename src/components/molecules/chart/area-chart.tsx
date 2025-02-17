import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { Area, CartesianGrid, XAxis, AreaChart, YAxis } from "recharts";

type TAreaChartComponent = {
  config: ChartConfig;
  data?: any[];
  chartContainerProps?: Omit<
    React.ComponentProps<typeof ChartContainer>,
    "config"
  >;
  areaChartProps?: Omit<React.ComponentProps<typeof AreaChart>, "data">;
  xAxisProps?: React.ComponentProps<typeof XAxis>;
  yAxisProps?: React.ComponentProps<typeof YAxis>;
  chartTooltipProps?: React.ComponentProps<typeof ChartTooltip>;
  areas?: React.ComponentProps<typeof Area>[];
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
  chartTooltipProps = {
    cursor: false,
    content: <ChartTooltipContent indicator="dot" />,
  },
  areas,
  yAxisProps,
}: TAreaChartComponent) {
  return (
    <ChartContainer config={config} {...chartContainerProps}>
      <AreaChart data={data} {...areaChartProps}>
        <CartesianGrid vertical={false} />
        {xAxisProps ? <XAxis {...xAxisProps} /> : null}
        {yAxisProps ? <YAxis {...yAxisProps} /> : null}
        <ChartTooltip {...chartTooltipProps} />
        {areas?.length
          ? areas.map((item, index) => {
              // @ts-ignore
              return <Area key={index} {...item} />;
            })
          : null}
      </AreaChart>
    </ChartContainer>
  );
}
