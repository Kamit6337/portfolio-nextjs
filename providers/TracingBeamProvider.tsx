"use client";
import { TracingBeam } from "@/components/ui/tracing-beam";
import React from "react";

const TracingBeamProvider = ({ children }: { children: React.ReactNode }) => {
  return <TracingBeam className="px-6">{children}</TracingBeam>;
};

export default TracingBeamProvider;
