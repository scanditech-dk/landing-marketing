"use client";
import React from "react";
import { Container } from "../container";
import { Badge } from "../badge";
import { SubHeading } from "../subheading";
import { SectionHeading } from "../seciton-heading";
import { Card, CardDescription, CardTitle } from "./card";
import {
  BrainIcon,
  FingerprintIcon,
  MouseBoxIcon,
  NativeIcon,
  RealtimeSyncIcon,
  SDKIcon,
} from "@/icons/bento-icons";
import {
  LLMModelSelectorSkeleton,
  NativeToolsIntegrationSkeleton,
  WorkflowCarousel,
} from "./skeletons";

type Tab = {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  id: string;
};

export const AgenticIntelligence = () => {
  return (
    <Container className="border-divide border-x">
      <div className="flex flex-col items-center py-16">
        
        <SectionHeading className="mt-4">
          One Platform. One Source of Truth.
        </SectionHeading>

        <SubHeading as="p" className="mx-auto mt-6 max-w-lg px-2">
          Bylt isn’t just a tool—it’s your project’s nervous system. Our integrated ecosystem ensures every module, stakeholder, and data point syncs to a single, unified brain..
        </SubHeading>
        <div className="w-full mt-16">
          <Card className="relative w-full max-w-none overflow-hidden">
            <div className="pointer-events-none absolute inset-0 h-full w-full bg-[radial-gradient(var(--color-dots)_1px,transparent_1px)] mask-radial-from-10% [background-size:10px_10px]"></div>
            <div className="flex items-center gap-2">
              <NativeIcon />
              <CardTitle>Unified Activity Stream</CardTitle>
            </div>
            <CardDescription>
              Stay in sync with every move. Bylt automatically captures project actions and outcomes,
              <br />
              giving you a living history of your project without the manual tracking.
            </CardDescription>
            <NativeToolsIntegrationSkeleton />
          </Card>
        </div>
        <div className="border-divide divide-divide mt-16 grid grid-cols-1 divide-y border-y md:grid-cols-2 md:divide-x">
          <Card className="overflow-hidden mask-b-from-80%">
            <div className="flex items-center gap-2">
              <BrainIcon />
              <CardTitle>Adaptive Project Intelligence</CardTitle>
            </div>
            <CardDescription>
              Harness built-in AI, tailored to the complexities of your project. Seamlessly scale your teams capabilities with native intelligence that automates routine tasks and accelerates decision-making.
            </CardDescription>
            <LLMModelSelectorSkeleton />
          </Card>
          <Card className="overflow-hidden mask-b-from-80%">
            <div className="flex items-center gap-2">
              <MouseBoxIcon />
              <CardTitle>Zero-Friction Collaboration</CardTitle>
            </div>
            <CardDescription>
              Bylt eliminates communication silos and prevents project delays, ensuring total alignment from day one.
            </CardDescription>
            <WorkflowCarousel />
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <Card>
            <div className="flex items-center gap-2">
              <FingerprintIcon />
              <CardTitle>Unified Security</CardTitle>
            </div>
            <CardDescription>
              Secure project data and digital assets with centralized encryption and enterprise-grade access control.
            </CardDescription>
          </Card>
          <Card>
            <div className="flex items-center gap-2">
              <RealtimeSyncIcon />
              <CardTitle>Autonomous Sync</CardTitle>
            </div>
            <CardDescription>
              The platform automatically coordinates data across modules, keeping your entire project in sync without manual updates.
            </CardDescription>
          </Card>
          <Card>
            <div className="flex items-center gap-2">
              <SDKIcon />
              <CardTitle>Total Scalability</CardTitle>
            </div>
            <CardDescription>
              Use individual tools independently or connect them to the ecosystem for a fully integrated experience.
            </CardDescription>
          </Card>
        </div>
      </div>
    </Container>
  );
};
