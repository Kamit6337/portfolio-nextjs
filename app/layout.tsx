import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import SmoothScrolling from "@/components/ui/smooth-scrolling";
import AnalyticsProvider from "@/providers/AnalyticsProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Portfolio | Amit Kumar",
  description: "This is Amit Kumar portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AnalyticsProvider props={process.env.GA4_MEASUREMENT_ID as string}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <SmoothScrolling>{children}</SmoothScrolling>
          </ThemeProvider>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
