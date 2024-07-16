"use client";

import { initGA, logPageView } from "@/lib/analytics";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";

type Children = { children: ReactNode };

const AnalyticsProvider = ({ children }: Children) => {
  const pathname = usePathname();

  useEffect(() => {
    initGA();
    logPageView(pathname);

    // Log each page change as a pageview with Google Analytics 4
    const handleRouteChange = () => {
      logPageView(pathname);
    };

    handleRouteChange(); // Log the initial page load
  }, [pathname]);

  return <>{children}</>;
};

export default AnalyticsProvider;
