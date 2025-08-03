import { GeistMono as geistMonoFont } from "geist/font/mono";
import { GeistSans as geistSansFont } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";
import { QueryClientProvider } from "@/components/providers/query-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = geistSansFont;
const geistMono = geistMonoFont;

export const metadata: Metadata = {
  title: "Bklit Analytics",
  description: "Track your website analytics",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryClientProvider>
            {children}
            <Toaster />
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
