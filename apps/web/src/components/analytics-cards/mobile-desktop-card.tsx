"use client";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { Cell, Pie, PieChart } from "recharts";
import { getMobileDesktopStats } from "@/actions/analytics-actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Skeleton } from "@/components/ui/skeleton";
import { useProject } from "@/contexts/project-context";
import type { PieChartData } from "@/types/analytics-cards";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--color-chart-desktop)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--color-chart-mobile)",
  },
} satisfies ChartConfig;

export function MobileDesktopCard() {
  const { currentSiteId } = useProject();
  const { data: session } = useSession();

  const { data: stats, isLoading } = useQuery({
    queryKey: ["mobile-desktop-stats", currentSiteId],
    queryFn: () =>
      getMobileDesktopStats({
        siteId: currentSiteId || "",
        userId: session?.user?.id || "",
      }),
    enabled: !!currentSiteId && !!session?.user?.id,
  });

  if (isLoading || !stats) {
    return <MobileDesktopCardSkeleton />;
  }

  const chartData: PieChartData[] = [
    { name: "desktop", value: stats.desktop },
    { name: "mobile", value: stats.mobile },
  ];

  const totalVisits = stats.desktop + stats.mobile;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Mobile/Desktop</CardTitle>
        <CardDescription>
          Unique page visits by device type ({totalVisits} total unique
          visitors).
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <PieChart accessibilityLayer data={chartData}>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="var(--color-desktop)"
            >
              {chartData.map((entry) => (
                <Cell
                  key={`cell-${entry.name}`}
                  fill={`var(--color-${entry.name})`}
                />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend
              content={<ChartLegendContent verticalAlign="horizontal" />}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export function MobileDesktopCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mobile/Desktop</CardTitle>
        <CardDescription>Unique page visits by device type.</CardDescription>
      </CardHeader>
      <CardContent>
        <Skeleton className="min-h-[200px] w-full" />
      </CardContent>
    </Card>
  );
}
