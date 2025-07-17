import { GeistMono as geistMonoFont } from "geist/font/mono";
import { GeistSans as geistSansFont } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";
import { getServerSession } from "next-auth/next";
import { QueryClientProvider } from "@/components/providers/query-provider";
import AuthProvider from "@/components/providers/session-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { authOptions } from "@/lib/auth";

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
  const session = await getServerSession(authOptions);

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
            <AuthProvider session={session}>
              {children}
              <Toaster />
            </AuthProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
