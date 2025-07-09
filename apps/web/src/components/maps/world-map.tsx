"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";

import { getVisitsByCountry } from "@/actions/analytics-actions";

interface CityData {
  name: string;
  visits: number;
}

interface CountryVisitData {
  country: string;
  countryCode: string;
  totalVisits: number;
  coordinates: [number, number] | null;
  cities: CityData[];
}

interface WorldMapProps {
  siteId: string;
  userId: string;
}

export function WorldMap({ siteId, userId }: WorldMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [visitData, setVisitData] = useState<CountryVisitData[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getVisitsByCountry({ siteId, userId });
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
      .scale(150)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    // Set up zoom behavior
    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.5, 8])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom);

    // Load and render world map
    d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then((world: any) => {
        if (!world) return;

        const countries = topojson.feature(world, world.objects.countries);

        // Draw countries
        g.selectAll(".country")
          .data(countries.features)
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

            // Calculate tooltip position relative to container
            const containerRect = containerRef.current?.getBoundingClientRect();
            if (!containerRect) return;

            const tooltip = d3.select(tooltipRef.current);
            const tooltipNode = tooltipRef.current;
            if (!tooltipNode) return;

            // Get mouse position relative to container
            const mouseX = event.clientX - containerRect.left;
            const mouseY = event.clientY - containerRect.top;

            // Calculate tooltip position
            const tooltipWidth = 250; // Approximate tooltip width
            const padding = 10;

            let left = mouseX + padding;
            let top = mouseY - padding;

            // Adjust if tooltip would go outside container bounds
            if (left + tooltipWidth > containerRect.width) {
              left = mouseX - tooltipWidth - padding;
            }
            if (top < 0) {
              top = mouseY + padding;
            }

            // Create tooltip content with flag and city data
            const citiesList = d.cities
              .slice(0, 5) // Show top 5 cities
              .map(
                (city) =>
                  `<div class="flex justify-between"><span>${city.name}</span><span class="font-medium">${city.visits}</span></div>`
              )
              .join("");

            tooltip
              .style("opacity", 1)
              .html(
                `
              <div class="flex items-center gap-2 mb-3">
                <div class="w-6 h-6 rounded-full overflow-hidden">
                  <img src="https://flagcdn.com/w40/${d.countryCode.toLowerCase()}.png" 
                       alt="${d.country}" 
                       class="w-full h-full object-cover" />
                </div>
                <div class="font-semibold text-lg">${d.country}</div>
              </div>
              <div class="mb-2">
                <span class="font-medium">Total Visits:</span> ${d.totalVisits.toLocaleString()}
              </div>
              <div class="space-y-1 text-sm">
                <div class="font-medium mb-1">Top Cities:</div>
                ${citiesList}
                ${
                  d.cities.length > 5
                    ? `<div class="text-xs text-gray-500 mt-1">+${
                        d.cities.length - 5
                      } more cities</div>`
                    : ""
                }
              </div>
            `
              )
              .style("left", `${left}px`)
              .style("top", `${top}px`);
          })
          .on("mousemove", (event) => {
            const containerRect = containerRef.current?.getBoundingClientRect();
            if (!containerRect) return;

            const mouseX = event.clientX - containerRect.left;
            const mouseY = event.clientY - containerRect.top;

            const tooltipWidth = 250;
            const padding = 10;

            let left = mouseX + padding;
            let top = mouseY - padding;

            if (left + tooltipWidth > containerRect.width) {
              left = mouseX - tooltipWidth - padding;
            }
            if (top < 0) {
              top = mouseY + padding;
            }

            d3.select(tooltipRef.current)
              .style("left", `${left}px`)
              .style("top", `${top}px`);
          })
          .on("mouseout", function (event, d) {
            // Reset marker
            d3.select(this)
              .transition()
              .duration(200)
              .attr("r", Math.sqrt(d.totalVisits / 10) + 3)
              .attr("opacity", 0.8);

            // Hide tooltip
            d3.select(tooltipRef.current).style("opacity", 0);
          });

        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading world map data:", error);
        setIsLoading(false);
      });
  }, [visitData]);

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

      <div
        ref={tooltipRef}
        className="absolute pointer-events-none bg-white border border-gray-200 rounded-lg shadow-lg p-3 text-sm opacity-0 transition-opacity duration-200 z-30 max-w-xs"
        style={{ opacity: 0 }}
      />
    </div>
  );
}
