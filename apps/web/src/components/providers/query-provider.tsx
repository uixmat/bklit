"use client";

import React from "react";
import {
  QueryClient,
  QueryClientProvider as TanstackQueryClientProvider,
} from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; // Optional: for development

export function QueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Create a client
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <TanstackQueryClientProvider client={queryClient}>
      {children}
      {/* Optional: React Query Devtools for debugging during development */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </TanstackQueryClientProvider>
  );
}
