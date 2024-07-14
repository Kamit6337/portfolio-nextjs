"use client";
import { TracingBeam } from "@/components/ui/tracing-beam";

const TracingBeamProvider = ({ children }) => {
  return <TracingBeam className="px-6">{children}</TracingBeam>;
};

export default TracingBeamProvider;
