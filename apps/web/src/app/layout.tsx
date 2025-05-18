import type { Metadata } from "next";
import { GeistSans as geistSansFont } from "geist/font/sans";
import { GeistMono as geistMonoFont } from "geist/font/mono";
import "./globals.css";
import AuthProvider from "@/components/providers/session-provider";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
const geistSans = geistSansFont;
const geistMono = geistMonoFont;

export const metadata: Metadata = {
  title: "Bklit Analytics",
  description: "Track your website analytics",
};

export default function RootLayout({
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
          <AuthProvider>
            {children}
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
