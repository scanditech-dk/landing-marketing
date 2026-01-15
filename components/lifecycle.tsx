import React from "react";
import { Container } from "@/components/container";
import { ConnectYourTooklsSkeleton } from "@/components/how-it-works/skeletons";
import { Timeline } from "@/components/ui/timeline";
import { InspecLogo, ProjectFlowLogo, TimesyncLogo } from "@/icons/general";

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
              topCornerLogo={<ProjectFlowLogo className="h-8 w-8 text-white" />}
              leftCornerLogo={<TimesyncLogo className="h-8 w-8 text-white" />}
              rightCornerLogo={<InspecLogo className="h-8 w-8 text-white" />}
              topTitle="Project Flow"
              topText="A central place to find projects and connect with verified contractors"
              topStats={[
                { number: "160", label: "Planning Phase" },
                { number: "240", label: "Projects Award" },
                { number: "900", label: "Approved Contractors" },
              ]}
              leftTitle="TenderHub"
              rightTitle="IntelliBid"
              leftText="A central place to find projects and connect with verified contractors"
              rightText="The automation engine. Auto-calculate bids and generate professional proposals instantly."
              leftStats={[
                { number: "160", label: "Planning Phase" },
                { number: "240", label: "Projects Award" },
                { number: "900", label: "Approved Contractors" },
              ]}
              rightStats={[
                { number: "160", label: "Drawing Processed" },
                { number: "59", label: "Proposal Prepared" },
                { number: "26", label: "Bidding Completed" },
              ]}
            />
          </div>
        </div>
      ),
    },
    {
      id: "inventory-service",
      title: "Inventory & Service",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Continuity & Asset Intelligence
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Card grid component
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Startup template Aceternity
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Random file upload lol
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
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
