"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<ToggleGroup
			type="single"
			value={theme}
			onValueChange={(value) => {
				if (value) setTheme(value);
			}}
			size="sm"
			className="border rounded-lg"
		>
			<ToggleGroupItem
				value="light"
				aria-label="Toggle light mode"
				className="px-3 py-2"
			>
				<Sun className="size-4" />
			</ToggleGroupItem>
			<ToggleGroupItem
				value="dark"
				aria-label="Toggle dark mode"
				className="px-3 py-2"
			>
				<Moon className="size-4" />
			</ToggleGroupItem>
			<ToggleGroupItem
				value="system"
				aria-label="Toggle system mode"
				className="px-3 py-2"
			>
				<Monitor className="size-4" />
			</ToggleGroupItem>
		</ToggleGroup>
	);
}
