"use client";

import React from "react";
import "./orbiting-icons.css";

type SvgComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export type OrbitingIconsProps = {
  /** Array of icon/logo components to display */
  icons: SvgComponent[];
  /** Size of the orbit container in pixels (default: 800) */
  size?: number;
  /** Additional CSS classes */
  className?: string;
  /** Show background rings (default: true) */
  showRings?: boolean;
  /** Custom rotation durations for each ring in seconds */
  ringDurationsSec?: number[];
  /** Number of concentric rings (default: 3) */
  numRings?: number;
  /** Size of each icon container in pixels (default: 56px / size-14) */
  iconSize?: number;
  /** Custom className for icon containers */
  iconClassName?: string;
};

/**
 * Standalone orbiting icons component
 * 
 * Displays icons in concentric rotating rings. Perfect for showcasing
 * integrations, partners, or technology stacks.
 * 
 * @example
 * ```tsx
 * import { OrbitingIcons } from './components/orbiting-icons';
 * import { Logo1, Logo2, Logo3 } from './icons';
 * 
 * <OrbitingIcons 
 *   icons={[Logo1, Logo2, Logo3, Logo1, Logo2, Logo3]}
 *   size={600}
 *   numRings={2}
 * />
 * ```
 */
export const OrbitingIcons: React.FC<OrbitingIconsProps> = ({
  icons,
  size = 800,
  className,
  showRings = true,
  ringDurationsSec,
  numRings = 3,
  iconSize = 56,
  iconClassName,
}) => {
  const total = icons.length;

  if (total === 0) {
    return null;
  }

  // Compute ring weights (fewer inner, more outer): proportional 1..numRings
  const weights = Array.from({ length: numRings }, (_, i) => i + 1); // [1,2,...]
  const weightSum = weights.reduce((a, b) => a + b, 0);
  const countsBase = weights.map((w) => Math.floor((total * w) / weightSum));
  let remainder = total - countsBase.reduce((a, b) => a + b, 0);
  // Distribute remainder from outermost inward to favor outer rings
  for (let i = numRings - 1; i >= 0 && remainder > 0; i--) {
    countsBase[i] += 1;
    remainder--;
  }
  const counts: number[] = countsBase; // inner→outer

  let cursor = 0;
  const rings: SvgComponent[][] = counts.map((count) => {
    const slice = icons.slice(cursor, cursor + count);
    cursor += count;
    return slice;
  });

  // Dynamic ring scales (inner→outer)
  const innerScale = 0.42;
  const outerScale = 0.94;
  const ringScaleFactors: number[] =
    numRings <= 1
      ? [(innerScale + outerScale) / 2]
      : Array.from(
          { length: numRings },
          (_, i) =>
            innerScale + ((outerScale - innerScale) * i) / (numRings - 1),
        );

  const renderRing = (ringIndex: number) => {
    const ringIcons = rings[ringIndex];
    const count = ringIcons.length;
    if (count === 0) return null;

    const diameter = Math.round(size * ringScaleFactors[ringIndex]);
    const radius = diameter / 2;
    const defaultBase = 18;
    const defaultStep = 8;
    const duration =
      (ringDurationsSec && ringDurationsSec[ringIndex]) ??
      defaultBase + defaultStep * ringIndex;
    const reverse = ringIndex % 2 === 1;

    return (
      <div
        key={`ring-${ringIndex}`}
        className="orbiting-ring"
        style={{
          width: diameter,
          height: diameter,
          animation: reverse
            ? `counter-orbit ${duration}s linear infinite`
            : `orbit ${duration}s linear infinite`,
        }}
      >
        <div className="relative h-full w-full">
          {ringIcons.map((Icon, idx) => {
            const angleDeg = (360 / count) * idx;
            const translate = radius;
            return (
              <div
                key={`ring-${ringIndex}-icon-${idx}`}
                className="orbiting-icon-wrapper"
                style={{
                  transform: `rotate(${angleDeg}deg) translateX(${translate}px)`,
                }}
              >
                <div style={{ transform: `rotate(${-angleDeg}deg)` }}>
                  <div
                    className={iconClassName || "orbiting-icon"}
                    style={{
                      width: iconSize,
                      height: iconSize,
                      animation: reverse
                        ? `orbit ${duration}s linear infinite`
                        : `counter-orbit ${duration}s linear infinite`,
                    }}
                  >
                    <Icon className="orbiting-icon-svg" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`orbiting-icons-container ${className || ""}`}
      style={{ width: size, height: size }}
    >
      {showRings && (
        <div className="orbiting-rings-background">
          {Array.from({ length: numRings }, (_, idx) => numRings - 1 - idx).map(
            (i) => {
              const diameter = Math.round(size * ringScaleFactors[i]);
              return (
                <div
                  key={`bg-ring-${i}`}
                  className={`orbiting-ring-bg ring-${i}`}
                  style={{
                    width: diameter,
                    height: diameter,
                  }}
                />
              );
            },
          )}
        </div>
      )}
      {Array.from({ length: numRings }, (_, idx) => numRings - 1 - idx).map(
        (ringIndex) => renderRing(ringIndex),
      )}
    </div>
  );
};
