"use client";
import { PieChart, Pie, Cell } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const chartConfig = {
  bounced: {
    label: "Bounced",
    color: "#ef4444",
  },
  engaged: {
    label: "Engaged",
    color: "#22c55e",
  },
} satisfies ChartConfig;

interface BounceRateData {
  totalSessions: number;
  bouncedSessions: number;
  bounceRate: number;
}

interface BounceRateCardProps {
  data: BounceRateData | null;
  isLoading?: boolean;
}

export function BounceRateCard({
  data,
  isLoading = false,
}: BounceRateCardProps) {
  if (isLoading || !data) {
    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] flex items-center justify-center">
            <div className="text-muted-foreground">Loading...</div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const nonBouncedSessions = data.totalSessions - data.bouncedSessions;

  const chartData = [
    { name: "bounced", value: data.bouncedSessions },
    { name: "engaged", value: nonBouncedSessions },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{data.bounceRate}%</div>
        <p className="text-xs text-muted-foreground">
          {data.bouncedSessions} of {data.totalSessions} sessions
        </p>
        <div className="mt-4 h-[200px]">
          <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <PieChart accessibilityLayer data={chartData}>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="var(--color-bounced)"
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={`var(--color-${entry.name})`}
                  />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend
                content={<ChartLegendContent payload="horizontal" />}
              />
            </PieChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
