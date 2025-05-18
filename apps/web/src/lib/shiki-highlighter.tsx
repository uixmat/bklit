import type { JSX } from "react";
import * as React from "react"; // Ensure React is in scope for JSX parsing
import type { BundledLanguage } from "shiki/bundle/web"; // Using web bundle
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { codeToHast } from "shiki/bundle/web"; // Using web bundle
import { cn } from "@/lib/utils"; // Import cn for className merging

// Default theme, can be made configurable if needed
const DEFAULT_THEME = "github-dark";

// Custom Pre component
const CustomPreComponent = (props: React.HTMLAttributes<HTMLPreElement>) => {
  const customClassNames =
    "rounded-2xl border border-border p-6 text-sm shadow-sm";
  return <pre {...props} className={cn(props.className, customClassNames)} />;
};

// Custom Code component (example, if needed later)
// const CustomCodeComponent = (props: React.HTMLAttributes<HTMLElement>) => {
//   return <code {...props} className={cn(props.className, "your-code-classes")} />;
// };

export async function highlightCode(
  code: string,
  lang: BundledLanguage,
  theme: string = DEFAULT_THEME
): Promise<JSX.Element> {
  const hast = await codeToHast(code, {
    lang,
    theme,
  });

  return toJsxRuntime(hast, {
    Fragment,
    jsx,
    jsxs,
    components: {
      pre: CustomPreComponent,
      // code: CustomCodeComponent, // Example if you customize <code> too
    },
  }) as JSX.Element;
}
