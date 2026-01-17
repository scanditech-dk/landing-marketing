"use client";
import {
  ProjectFlowLogo,
  TimesyncLogo,
  InspecLogo,
  ServiceLogo,
  AnthropicLogo,
  ForkIcon,
  MetaLogo,
  OpenAILogo,
  SlackLogo,
  TenderHubLogo,
  IntelliBidLogo,
} from "@/icons/general";
import { cn } from "@/lib/utils";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { DivideX } from "../divide";
import { motion, useMotionValue, useTransform } from "motion/react";
import { Card } from "../tech-card";
import { Scale } from "../scale";
import { LogoSVG } from "../logo";
import { IntegrationsLogo } from "@/icons/bento-icons";

type WorkflowCardConfig = {
  title: string;
  subtitle: string;
  logo: React.ReactNode;
  cta: string;
  tone: "default" | "danger" | "success";
  delay?: number;
};

export const DesignYourWorkflowSkeleton = ({
  primaryCard,
  secondaryCards,
  className,
}: {
  primaryCard?: WorkflowCardConfig;
  secondaryCards?: WorkflowCardConfig[];
  className?: string;
}) => {
  const defaultPrimaryCard: WorkflowCardConfig = {
    title: "ProjectFlow",
    subtitle: "#Albertslund",
    logo: <ProjectFlowLogo />,
    cta: "Connected",
    tone: "default",
  };

  const defaultSecondaryCards: WorkflowCardConfig[] = [
    {
      title: "Timesync",
      subtitle: "Attendance",
      logo: <TimesyncLogo />,
      cta: "Time Tracker",
      tone: "danger",
      delay: 0.2,
    },
    {
      title: "InspecIQ",
      subtitle: "Zone 2",
      logo: <InspecLogo />,
      cta: "Quality Assurance",
      tone: "default",
      delay: 0.4,
    },
    {
      title: "WarrantyBot",
      subtitle: "Bylt AI",
      logo: <ServiceLogo />,
      cta: "Due Date",
      tone: "success",
      delay: 0.6,
    },
  ];

  const resolvedPrimary = primaryCard ?? defaultPrimaryCard;
  const resolvedSecondary = secondaryCards ?? defaultSecondaryCards;
  const isTwoUp = resolvedSecondary.length === 2;

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="relative">
        <Card
          title={resolvedPrimary.title}
          subtitle={resolvedPrimary.subtitle}
          logo={resolvedPrimary.logo}
          cta={resolvedPrimary.cta}
          tone={resolvedPrimary.tone}
        />
        <LeftSVG className={cn("absolute top-12", isTwoUp ? "-left-16" : "-left-32")} />
        <RightSVG className={cn("absolute top-12", isTwoUp ? "-right-16" : "-right-32")} />
        <CenterSVG
          className={cn(
            "absolute top-24",
            isTwoUp ? "left-1/2 -translate-x-1/2" : "right-[107px]",
          )}
        />
      </div>

      <div
        className={cn(
          "mt-12 flex flex-row",
          isTwoUp ? "w-full max-w-[520px] justify-between" : "gap-4.5",
        )}
      >
        {resolvedSecondary.map((card, index) => (
          <Card
            key={`${card.title}-${index}`}
            title={card.title}
            subtitle={card.subtitle}
            logo={card.logo}
            cta={card.cta}
            tone={card.tone}
            delay={card.delay ?? (index + 1) * 0.2}
          />
        ))}
      </div>
    </div>
  );
};

type StatItem = {
  number?: string;
  label: string;
};

type IntegrationCardProps = {
  title: string;
  textValue: string;
  stats: StatItem[];
  cornerLogo?: React.ReactNode;
  headerLogo?: React.ReactNode;
  delay?: number;
  logoPosition?: "top-left" | "top-right";
  defaultCornerLogo?: React.ReactNode;
  animateText?: boolean;
  className?: string;
};

const IntegrationCard = ({
  title,
  textValue,
  stats,
  cornerLogo,
  headerLogo,
  delay = 0,
  logoPosition = "top-right",
  defaultCornerLogo,
  animateText = false,
  className,
}: IntegrationCardProps) => {
  const logoPositionClasses = {
    "top-left": "-top-4 -left-4",
    "top-right": "-top-4 -right-4",
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "relative w-full max-w-[240px] overflow-visible rounded-2xl border-t border-gray-300 bg-white p-4 shadow-2xl dark:border-neutral-700 dark:bg-neutral-900",
        "sm:max-w-[260px]",
        className,
      )}
    >
      {/* Corner Logo */}
      <div
        className={cn(
          "absolute flex h-14 w-14 items-center justify-center rounded-lg bg-white shadow-xl dark:bg-neutral-800",
          logoPositionClasses[logoPosition],
        )}
      >
        <Scale />
        <div className="relative z-20">
          {cornerLogo ?? defaultCornerLogo ?? <TenderHubLogo className="h-8 w-8" />}
        </div>
      </div>

      {/* Header */}
      <div className="mt-12 flex items-center gap-2">
        {headerLogo ?? <IntegrationsLogo className="dark:text-neutral-200" />}
        <span className="text-charcoal-700 text-xs font-medium sm:text-sm dark:text-neutral-200">
          {title}
        </span>
      </div>
      <DivideX className="mt-2" />

      {/* Description Text */}
      <div className="mt-4">
        {animateText ? (
          <span className="text-charcoal-700 text-[10px] leading-loose font-normal sm:text-xs dark:text-neutral-200">
            {textValue.split(/(\s+)/).map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.02,
                  ease: "linear",
                }}
                className="inline-block"
              >
                {word === " " ? "\u00A0" : word}
              </motion.span>
            ))}
          </span>
        ) : (
          <span className="text-charcoal-700 text-[10px] leading-loose font-normal sm:text-xs dark:text-neutral-200">
            {textValue}
          </span>
        )}
      </div>

      {/* Stats List */}
      <div className="mt-2 flex flex-col">
        {stats.map((item, index) => (
          <div key={`${item.number}-${item.label}-${index}`} className="mt-2 flex items-center gap-2">
            <div className="h-2 w-2 shrink-0 rounded-full bg-blue-500" />
            <span className="text-[10px] text-neutral-500 dark:text-neutral-400">
              {item.number && <span className="font-medium">{item.number}</span>}
              {item.number ? " " : null}
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-4 flex justify-end">
        <span className="text-[10px] text-neutral-400 dark:text-neutral-500 cursor-pointer hover:text-neutral-600 dark:hover:text-neutral-400">
          Explore →
        </span>
      </div>
    </motion.div>
  );
};

export const ConnectYourTooklsSkeleton = ({
  compact = false,
  className,
  layout = "side-by-side",
  leftCornerLogo,
  rightCornerLogo,
  leftHeaderLogo,
  rightHeaderLogo,
  topCornerLogo,
  topHeaderLogo,
  leftTitle = "TenderHub",
  rightTitle = "IntelliBid",
  topTitle,
  leftText = "A central place to find projects and connect with verified contractors",
  rightText = "An automation engine to calculate bids and generate proposals.",
  topText,
  leftStats = [
    { label: "Project discovery" },
    { label: "Verified contractors" },
    { label: "Private tenders" },
  ],
  rightStats = [
    { label: "Automated take-offs" },
    { label: "Instant bid scenarios" },
    { label: "Proposal generation" },
  ],
  topStats,
}: {
  compact?: boolean;
  className?: string;
  layout?: "side-by-side" | "stacked";
  leftCornerLogo?: React.ReactNode;
  rightCornerLogo?: React.ReactNode;
  leftHeaderLogo?: React.ReactNode;
  rightHeaderLogo?: React.ReactNode;
  topCornerLogo?: React.ReactNode;
  topHeaderLogo?: React.ReactNode;
  leftTitle?: string;
  rightTitle?: string;
  topTitle?: string;
  leftText?: string;
  rightText?: string;
  topText?: string;
  leftStats?: StatItem[];
  rightStats?: StatItem[];
  topStats?: StatItem[];
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Resolve top card props (only used in stacked layout)
  // Top card is shown when layout is "stacked" - it's optional based on whether topTitle is provided
  const showTopCard = layout === "stacked" && (topTitle || topText || topStats || topCornerLogo || topHeaderLogo);
  const resolvedTopTitle = topTitle ?? leftTitle;
  const resolvedTopText = topText ?? leftText;
  const resolvedTopStats = topStats ?? leftStats;
  const resolvedTopCornerLogo = topCornerLogo ?? leftCornerLogo;
  const resolvedTopHeaderLogo = topHeaderLogo ?? leftHeaderLogo;

  // Stacked layout with optional top card
  if (layout === "stacked") {
    return (
      <div className={cn("relative flex w-full flex-col items-center gap-6 sm:gap-8", className)}>
        {/* Optional Top Card - shown if any top-specific props are provided */}
        {showTopCard && (
          <IntegrationCard
            title={resolvedTopTitle}
            textValue={resolvedTopText}
            stats={resolvedTopStats}
            cornerLogo={resolvedTopCornerLogo}
            headerLogo={resolvedTopHeaderLogo}
            delay={0}
            logoPosition="top-right"
            animateText={false}
          />
        )}

        {/* Bottom Two Cards */}
        <div className="flex w-full flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-6 md:gap-8">
          <IntegrationCard
            title={leftTitle}
            textValue={leftText}
            stats={leftStats}
            cornerLogo={leftCornerLogo}
            headerLogo={leftHeaderLogo}
            delay={showTopCard ? 0.2 : 0}
            logoPosition="top-left"
            defaultCornerLogo={<TenderHubLogo className="h-8 w-8" />}
            animateText={false}
          />
          <IntegrationCard
            title={rightTitle}
            textValue={rightText}
            stats={rightStats}
            cornerLogo={rightCornerLogo}
            headerLogo={rightHeaderLogo}
            delay={showTopCard ? 0.4 : 0.2}
            logoPosition="top-right"
            defaultCornerLogo={<IntelliBidLogo className="h-8 w-8" />}
            animateText={false}
          />
        </div>
      </div>
    );
  }

  // Side-by-side layout (two cards)
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6 md:gap-8 lg:gap-10",
        compact && "w-fit",
        className,
      )}
    >
      <IntegrationCard
        title={leftTitle}
        textValue={leftText}
        stats={leftStats}
        cornerLogo={leftCornerLogo}
        headerLogo={leftHeaderLogo}
        delay={0}
        logoPosition="top-left"
        defaultCornerLogo={<TenderHubLogo className="h-8 w-8" />}
        animateText={true}
      />

      <IntegrationCard
        title={rightTitle}
        textValue={rightText}
        stats={rightStats}
        cornerLogo={rightCornerLogo}
        headerLogo={rightHeaderLogo}
        delay={0.2}
        logoPosition="top-right"
        defaultCornerLogo={<IntelliBidLogo className="h-8 w-8" />}
        animateText={false}
      />
    </div>
  );
};

export const DeployAndScaleSkeleton = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  // Define deploy cards data for reusability
  const deployCards = [
    { title: "deploy-team-for-service", subtitle: "2h ago", branch: "master" },
    {
      title: "zone-2-missing-tests",
      subtitle: "10m ago",
      branch: "fix/tests",
      variant: "success" as const,
    },
    { title: "1th-missing-brandluking", subtitle: "45m ago", branch: "mangler/list" },
    {
      title: "Skakt1-zone1-completed",
      subtitle: "1h ago",
      branch: "skakts",
      variant: "success" as const,
    },
    {
      title: "ventilation-fix-zone3-byg1",
      subtitle: "2h ago",
      branch: "fix/ventilation",
      variant: "warning" as const,
    },
    {
      title: "ground-work-inspection",
      subtitle: "3h ago",
      branch: "inspections",
      variant: "success" as const,
    },
    {
      title: "broken-foundation-repair",
      subtitle: "4h ago",
      branch: "foundation/repair",
      variant: "danger" as const,
    },
    {
      title: "broken-pipeline-fix",
      subtitle: "5h ago",
      branch: "plumbing/fix",
      variant: "default" as const,
    },
    {
      title: "rooms-ready-for-paint-zone4",
      subtitle: "6h ago",
      branch: "painter",
      variant: "success" as const,
    },
    {
      title: "windows-installation-delay",
      subtitle: "7h ago",
      branch: "fix/perf",
      variant: "warning" as const,
    },
    {
      title: "no access-to-byg3-site",
      subtitle: "8h ago",
      branch: "main",
      variant: "success" as const,
    },
    {
      title: "construction-analytics-report",
      subtitle: "9h ago",
      branch: "feat/analytics",
      variant: "default" as const,
    },
  ];

  const extendedCards = [...deployCards, ...deployCards, ...deployCards];

  const cardHeight = 64;
  const gap = 4;
  const itemHeight = cardHeight + gap;
  const offset = (containerHeight - cardHeight) / 2;

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const height = entries[0]?.contentRect.height ?? 0;
      setContainerHeight(height);
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const y = useMotionValue(0);
  const totalHeight = extendedCards.length * itemHeight;

  useEffect(() => {
    let animationFrame: number;
    let lastTime = performance.now();
    const speed = 30;

    function animateScroll(now: number) {
      const elapsed = (now - lastTime) / 1000;
      lastTime = now;
      let current = y.get();
      current -= speed * elapsed;

      if (Math.abs(current) >= totalHeight / 3) {
        current += totalHeight / 3;
      }
      y.set(current);
      animationFrame = requestAnimationFrame(animateScroll);
    }
    animationFrame = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [y, totalHeight]);

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      ref={containerRef}
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
      }}
    >
      <motion.div
        className="absolute left-1/2 flex w-full -translate-x-1/2 flex-col items-center"
        style={{ y }}
      >
        {extendedCards.map((card, index) => (
          <motion.div
            key={`${index}-${card.title}`}
            className="mx-auto mt-4 w-full max-w-sm shrink-0 rounded-2xl shadow-xl"
            style={{
              scale: useTransform(
                y,
                [
                  offset + (index - 2) * -itemHeight,
                  offset + (index - 1) * -itemHeight,
                  offset + index * -itemHeight,
                  offset + (index + 1) * -itemHeight,
                  offset + (index + 2) * -itemHeight,
                ],
                [0.85, 0.95, 1.1, 0.95, 0.85],
              ),

              background: useTransform(
                y,
                [
                  offset + (index - 1) * -itemHeight,
                  offset + index * -itemHeight,
                  offset + (index + 1) * -itemHeight,
                ],
                ["#FFFFFF", "#f17463", "#FFFFFF"],
              ),
              borderColor: useTransform(
                y,
                [
                  offset + (index - 1) * -itemHeight,
                  offset + index * -itemHeight,
                  offset + (index + 1) * -itemHeight,
                ],
                ["#FFFFFF", "#f17463", "#FFFFFF"],
              ),
            }}
          >
            <DeployCard
              variant={card.variant}
              title={card.title}
              subtitle={card.subtitle}
              branch={card.branch}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const DeployCard = ({
  variant = "default",
  title,
  subtitle,
  branch,
}: {
  variant?: "default" | "danger" | "success" | "warning";
  title: string;
  subtitle: string;
  branch: string;
}) => {
  return (
    <div className="mx-auto flex w-full max-w-sm items-center justify-between rounded-lg p-3">
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "flex h-6 w-6 items-center justify-center rounded-md",
            variant === "default" && "bg-gray-200",
            variant === "danger" && "bg-red-200",
            variant === "success" && "bg-green-200",
            variant === "warning" && "bg-yellow-200",
          )}
        >
          <ForkIcon
            className={cn(
              "h-4 w-4",
              variant === "default" && "text-gray-500",
              variant === "danger" && "text-red-500",
              variant === "success" && "text-green-500",
              variant === "warning" && "text-yellow-500",
            )}
          />
        </div>
        <span className="text-charcoal-700 text-xs font-medium sm:text-sm">
          {title}
        </span>
      </div>
      <div className="ml-2 flex flex-row items-center gap-2">
        <span className="text-charcoal-700 text-xs font-normal">
          {subtitle}
        </span>
        <div className="size-1 rounded-full bg-gray-400"></div>
        <span className="text-charcoal-700 text-xs font-normal">{branch}</span>
      </div>
    </div>
  );
};

const LeftSVG = (props: React.SVGProps<SVGSVGElement>) => {
  const path = `M127.457 0.0891113L127.576 95.9138L127.457 0.0891113ZM-0.0609919 96.0731L-0.160632 16.2484C-0.172351 6.85959 7.4293 -0.761068 16.8181 -0.772787L16.8206 1.22721C8.53637 1.23755 1.82903 7.96166 1.83937 16.2459L1.93901 96.0706L-0.0609919 96.0731ZM-0.160632 16.2484C-0.172351 6.85959 7.4293 -0.761068 16.8181 -0.772787L127.455 -0.910888L127.458 1.08911L16.8206 1.22721C8.53637 1.23755 1.82903 7.96166 1.83937 16.2459L-0.160632 16.2484ZM127.576 95.9138L0.939007 96.0718L127.576 95.9138Z`;
  return (
    <motion.svg
      width="128"
      height="97"
      viewBox="0 0 128 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className={props.className}
    >
      <mask id="path-1-inside-1_557_1106" fill="var(--color-line)">
        <path d="M127.457 0.0891113L127.576 95.9138L0.939007 96.0718L0.839368 16.2472C0.828338 7.41063 7.98283 0.238242 16.8194 0.227212L127.457 0.0891113Z" />
      </mask>
      <path
        d="M127.457 0.0891113L127.576 95.9138L127.457 0.0891113ZM-0.0609919 96.0731L-0.160632 16.2484C-0.172351 6.85959 7.4293 -0.761068 16.8181 -0.772787L16.8206 1.22721C8.53637 1.23755 1.82903 7.96166 1.83937 16.2459L1.93901 96.0706L-0.0609919 96.0731ZM-0.160632 16.2484C-0.172351 6.85959 7.4293 -0.761068 16.8181 -0.772787L127.455 -0.910888L127.458 1.08911L16.8206 1.22721C8.53637 1.23755 1.82903 7.96166 1.83937 16.2459L-0.160632 16.2484ZM127.576 95.9138L0.939007 96.0718L127.576 95.9138Z"
        fill="#EAEDF1"
        mask="url(#path-1-inside-1_557_1106)"
      />
      <path
        d="M127.457 0.0891113L127.576 95.9138L127.457 0.0891113ZM-0.0609919 96.0731L-0.160632 16.2484C-0.172351 6.85959 7.4293 -0.761068 16.8181 -0.772787L16.8206 1.22721C8.53637 1.23755 1.82903 7.96166 1.83937 16.2459L1.93901 96.0706L-0.0609919 96.0731ZM-0.160632 16.2484C-0.172351 6.85959 7.4293 -0.761068 16.8181 -0.772787L127.455 -0.910888L127.458 1.08911L16.8206 1.22721C8.53637 1.23755 1.82903 7.96166 1.83937 16.2459L-0.160632 16.2484ZM127.576 95.9138L0.939007 96.0718L127.576 95.9138Z"
        fill="url(#gradient-one)"
        mask="url(#path-1-inside-1_557_1106)"
      />
      {/* <rect d={path} width="128" height="97" fill="url(#gradient-one)" /> */}
      <defs>
        <motion.linearGradient
          id="gradient-one"
          initial={{
            x1: "100%",
            x2: "90%",
            y1: "90%",
            y2: "80%",
          }}
          animate={{
            x1: "20%",
            x2: "0%",
            y1: "90%",
            y2: "220%",
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--color-line)" stopOpacity="0.5" offset="0" />
          <stop stopColor="#5787FF" stopOpacity="1" offset="0.5" />
          <stop stopColor="var(--color-line)" stopOpacity="0" offset="1" />
        </motion.linearGradient>
      </defs>
    </motion.svg>
  );
};

const RightSVG = (props: React.SVGProps<SVGSVGElement>) => {
  const PATH = `M0.619629 0L0.500018 95.8247L0.619629 0ZM128.137 95.984L128.237 16.1593C128.249 6.77047 120.647 -0.850179 111.258 -0.861898L111.256 1.1381C119.54 1.14844 126.247 7.87255 126.237 16.1568L126.137 95.9815L128.137 95.984ZM128.237 16.1593C128.249 6.77047 120.647 -0.850179 111.258 -0.861898L0.620877 -0.999999L0.618381 0.999999L111.256 1.1381C119.54 1.14844 126.247 7.87255 126.237 16.1568L128.237 16.1593ZM0.500018 95.8247L127.137 95.9827L0.500018 95.8247Z`;
  return (
    <motion.svg
      width="128"
      height="96"
      viewBox="0 0 128 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className={props.className}
    >
      <mask id="path-1-inside-1_557_1107" fill="var(--color-line)">
        <path d="M0.619629 0L0.500018 95.8247L127.137 95.9827L127.237 16.1581C127.248 7.32152 120.093 0.149131 111.257 0.138101L0.619629 0Z" />
      </mask>
      <path
        d="M0.619629 0L0.500018 95.8247L0.619629 0ZM128.137 95.984L128.237 16.1593C128.249 6.77047 120.647 -0.850179 111.258 -0.861898L111.256 1.1381C119.54 1.14844 126.247 7.87255 126.237 16.1568L126.137 95.9815L128.137 95.984ZM128.237 16.1593C128.249 6.77047 120.647 -0.850179 111.258 -0.861898L0.620877 -0.999999L0.618381 0.999999L111.256 1.1381C119.54 1.14844 126.247 7.87255 126.237 16.1568L128.237 16.1593ZM0.500018 95.8247L127.137 95.9827L0.500018 95.8247Z"
        fill="#EAEDF1"
        mask="url(#path-1-inside-1_557_1107)"
      />
      <path
        d="M0.619629 0L0.500018 95.8247L0.619629 0ZM128.137 95.984L128.237 16.1593C128.249 6.77047 120.647 -0.850179 111.258 -0.861898L111.256 1.1381C119.54 1.14844 126.247 7.87255 126.237 16.1568L126.137 95.9815L128.137 95.984ZM128.237 16.1593C128.249 6.77047 120.647 -0.850179 111.258 -0.861898L0.620877 -0.999999L0.618381 0.999999L111.256 1.1381C119.54 1.14844 126.247 7.87255 126.237 16.1568L128.237 16.1593ZM0.500018 95.8247L127.137 95.9827L0.500018 95.8247Z"
        fill="url(#gradient-two)"
        mask="url(#path-1-inside-1_557_1107)"
      />
      {/* <rect d={PATH} width="128" height="97" fill="url(#gradient-two)" /> */}

      <defs>
        <motion.linearGradient
          id="gradient-two"
          initial={{
            x1: "-10%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          animate={{
            x1: "100%",
            x2: "110%",
            y1: "110%",
            y2: "140%",
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.5" offset="0" />
          <stop stopColor="#F17463" stopOpacity="1" offset="0.5" />
          <stop stopColor="white" stopOpacity="0" offset="1" />
        </motion.linearGradient>
      </defs>
    </motion.svg>
  );
};

const CenterSVG = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <motion.svg
      width="2"
      height="56"
      viewBox="0 0 2 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className={props.className}
    >
      <line x1="1" y1="56" x2="1" stroke="var(--color-line)" strokeWidth="2" />
      <line
        x1="1"
        y1="56"
        x2="1"
        stroke="url(#gradient-three)"
        strokeWidth="1"
      />
      <defs>
        <motion.linearGradient
          id="gradient-three"
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "-100%",
            y2: "-90%",
          }}
          animate={{
            x1: "0%",
            x2: "0%",
            y1: "90%",
            y2: "100%",
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--color-line)" stopOpacity="1" offset="0" />
          <stop stopColor="#F17463" stopOpacity="0.5" offset="0.5" />
          <stop stopColor="#F17463" stopOpacity="0" offset="1" />
        </motion.linearGradient>
      </defs>
    </motion.svg>
  );
};
