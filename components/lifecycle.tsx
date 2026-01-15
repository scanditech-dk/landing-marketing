import React from "react";
import { Container } from "@/components/container";
import { ConnectYourTooklsSkeleton } from "@/components/how-it-works/skeletons";
import { Timeline } from "@/components/ui/timeline";
import { InspecLogo, MRMSLogo, ProjectFlowLogo, ServiceLogo, TimesyncLogo } from "@/icons/general";

export function LifecycleTimeline() {
  const data = [
    {
      id: "strategic-acquisitions",
      title: "Strategic Acquisition",
      content: (
        <div>
          <p className="mb-8 text-sm font-semibold text-neutral-900 md:text-base dark:text-neutral-100">
            Opportunity & Precision
          </p>
          <div className="relative mx-auto h-80 w-full overflow-hidden sm:w-160 lg:mx-0 lg:max-h-[370px]">
            <ConnectYourTooklsSkeleton />
          </div>
        </div>
      ),
    },
    {
      id: "intelligent-execution",
      title: "Intelligent Execution",
      content: (
        <div>
          <p className="mb-8 text-sm font-semibold text-neutral-900 md:text-base dark:text-neutral-100">
            Autonomous Field Management
          </p>
          <div className="relative mx-auto w-full overflow-visible sm:w-160 lg:mx-0">
            <ConnectYourTooklsSkeleton
              layout="stacked"
              topCornerLogo={
                <ProjectFlowLogo className="h-8 w-8 text-neutral-900 dark:text-white" />
              }
              leftCornerLogo={
                <TimesyncLogo className="h-8 w-8 text-neutral-900 dark:text-white" />
              }
              rightCornerLogo={
                <InspecLogo className="h-8 w-8 text-neutral-900 dark:text-white" />
              }
              topTitle="Project Flow"
              topText="Manage site execution with digital identities enabling real-time tracking.."
              topStats={[
                { label: "Digital identities" },
                { label: "Real-time progress" },
                { label: "Unified project core" },
              ]}
              leftTitle="TimeSync"
              rightTitle="InspecIQ"
              leftText="Field workforce management turning daily work into payroll-ready data."
              rightText="Real-time inspections with Smart Solve to address compliance issues on spot."
              leftStats={[
                { label: "Smart time tracking" },
                { label: "Payroll-ready data" },
                { label: "Labor cost visibility" },
              ]}
              rightStats={[
                { label: "Real-time inspections" },
                { label: "Smart-Solve compliance" },
                { label: "Automated QA reports" },
              ]}
            />
          </div>
        </div>
      ),
    },
    {
      id: "inventory-service",
      title: "Asset Continuity",
      content: (
        <div>
          <p className="mb-8 text-sm font-semibold text-neutral-900 md:text-base dark:text-neutral-100">
            Resource & Lifecycle Control
          </p>
          <div className="relative mx-auto h-80 w-full overflow-hidden sm:w-160 lg:mx-0 lg:max-h-[370px]">
            <ConnectYourTooklsSkeleton
              
              leftCornerLogo={
                <MRMSLogo className="h-8 w-8 text-neutral-900 dark:text-white" />
              }
              rightCornerLogo={
                <ServiceLogo className="h-8 w-8 text-neutral-900 dark:text-white" />
              }
              
              leftTitle="MRMS"
              rightTitle="Service Management"
              leftText="Centralized tracking of tools and materials in real time.."
              rightText="Predictive maintenance scheduling to reduce downtime and extend asset life."
              leftStats={[
                { label: "Material tracking" },
                { label: "Tool visibility" },
                { label: "Waste reduction" },
              ]}
              rightStats={[
                { label: "Digital handover" },
                { label: "Predictive maintenance" },
                { label: "Service automation" },
              ]}
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <Container className="border-divide border-x">
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </Container>
  );
}
