"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";

import { getCountryVisitStats } from "@/actions/analytics-actions";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CountryVisitData {
  country: string;
  countryCode: string;
  totalVisits: number;
  mobileVisits: number;
  desktopVisits: number;
  uniqueVisits: number;
  coordinates: [number, number] | null;
}

interface WorldMapProps {
  siteId: string;
  userId: string;
}

export function WorldMap({ siteId, userId }: WorldMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [visitData, setVisitData] = useState<CountryVisitData[]>([]);
  const [tooltipData, setTooltipData] = useState<CountryVisitData | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getCountryVisitStats({ siteId, userId });
        setVisitData(data);
      } catch (error) {
        console.error("Error loading visit data:", error);
      }
    };

    loadData();
  }, [siteId, userId]);

  useEffect(() => {
    if (!svgRef.current || visitData.length === 0) return;

    const svg = d3.select(svgRef.current);
    const width = 960;
    const height = 500;

    // Clear previous content
    svg.selectAll("*").remove();

    // Create main group for zoom/pan
    const g = svg.append("g");

    // Set up projection
    const projection = d3
      .geoNaturalEarth1()
      .scale(350)
      .translate([width / 2, height / 1.1]);

    const path = d3.geoPath().projection(projection);

    // Set up zoom behavior
    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.5, 8])
      .on("zoom", (event) => {
        const { transform } = event;
        g.attr("transform", transform);

        // Scale markers with zoom
        g.selectAll(".marker")
          .attr("r", (d) => {
            const data = d as CountryVisitData;
            return (Math.sqrt(data.totalVisits / 10) + 3) / transform.k;
          })
          .attr("stroke-width", 2 / transform.k);
      });

    svg.call(zoom);

    // Load and render world map
    // @ts-expect-error - D3.js world atlas types are complex
    d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then((world: any) => {
        if (!world) return;

        const countries = topojson.feature(world, world.objects.countries);

        // Draw countries
        // @ts-expect-error - D3.js feature collection types are complex
        g.selectAll(".country")
          .data((countries as any).features)
          .enter()
          .append("path")
          .attr("class", "country")
          .attr("d", (d) => path(d as d3.GeoPermissibleObjects) || "")
          .attr("fill", "#e5e7eb")
          .attr("stroke", "#ffffff")
          .attr("stroke-width", 0.5)
          .on("mouseover", function () {
            d3.select(this).attr("fill", "#d1d5db");
          })
          .on("mouseout", function () {
            d3.select(this).attr("fill", "#e5e7eb");
          });

        // Add circle markers for countries with visits
        const markers = g
          .selectAll(".marker")
          .data(visitData.filter((d) => d.coordinates !== null))
          .enter()
          .append("circle")
          .attr("class", "marker")
          .attr("cx", (d) => projection(d.coordinates!)?.[0] || 0)
          .attr("cy", (d) => projection(d.coordinates!)?.[1] || 0)
          .attr("r", 0)
          .attr("fill", "var(--card-background)")
          .attr("stroke", "var(--card-foreground)")
          .attr("stroke-width", 2)
          .attr("opacity", 0.8)
          .style("cursor", "pointer");

        // Animate markers
        markers
          .transition()
          .duration(1000)
          .delay((d, i) => i * 100)
          .attr("r", (d) => Math.sqrt(d.totalVisits / 10) + 3);

        // Add tooltip interactions
        markers
          .on("mouseover", function (event, d) {
            // Highlight marker
            d3.select(this)
              .transition()
              .duration(200)
              .attr("r", Math.sqrt(d.totalVisits / 10) + 6)
              .attr("opacity", 1);

            // Dim all countries except the one this marker belongs to
            g.selectAll(".country")
              .transition()
              .duration(200)
              .attr("opacity", (countryFeature) => {
                // Check if this country matches the marker's country
                const feature = countryFeature as d3.GeoPermissibleObjects & {
                  properties?: {
                    ISO_A2?: string;
                    ADM0_A3?: string;
                  };
                };
                const countryIso =
                  feature.properties?.ISO_A2 || feature.properties?.ADM0_A3;
                return countryIso === d.countryCode ? 1 : 0.3; // Keep target country at full opacity, dim others
              })
              .attr("fill", "#e5e7eb"); // Keep all countries at their original color

            // Show tooltip
            const svgRect = svgRef.current!.getBoundingClientRect();
            const relativeX = event.clientX - svgRect.left;
            const relativeY = event.clientY - svgRect.top;

            setTooltipData(d);
            setTooltipPosition({ x: relativeX, y: relativeY });
          })
          .on("mousemove", (event) => {
            const svgRect = svgRef.current!.getBoundingClientRect();
            const relativeX = event.clientX - svgRect.left;
            const relativeY = event.clientY - svgRect.top;

            setTooltipPosition({ x: relativeX, y: relativeY });
          })
          .on("mouseout", function (event, d) {
            // Reset marker
            d3.select(this)
              .transition()
              .duration(200)
              .attr("r", Math.sqrt(d.totalVisits / 10) + 3)
              .attr("opacity", 0.8);

            // Restore all countries to normal opacity and color
            g.selectAll(".country")
              .transition()
              .duration(200)
              .attr("opacity", 1)
              .attr("fill", "#e5e7eb");

            // Hide tooltip
            setTooltipData(null);
          });

        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading world map data:", error);
        setIsLoading(false);
      });
  }, [visitData]);

  const getFlagEmoji = (countryCode: string) => {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-card-background"
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-card-background z-20">
          <div className="text-lg">Loading world map...</div>
        </div>
      )}

      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 960 500"
        className="cursor-grab active:cursor-grabbing"
      />

      {tooltipData && (
        <Card
          className="absolute pointer-events-none z-30 bg-card/85 backdrop-blur-sm w-80"
          style={{
            left: tooltipPosition.x + 10,
            top: tooltipPosition.y - 10,
            transform: "translateY(-100%)",
          }}
        >
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <span className="text-2xl">
                {getFlagEmoji(tooltipData.countryCode)}
              </span>
              {tooltipData.country}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-medium">Total Visits:</span>
              <Badge variant="secondary">{tooltipData.totalVisits}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Mobile:</span>
              <span className="text-sm">{tooltipData.mobileVisits}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Desktop:</span>
              <span className="text-sm">{tooltipData.desktopVisits}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Unique Visitors:
              </span>
              <span className="text-sm">{tooltipData.uniqueVisits}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
