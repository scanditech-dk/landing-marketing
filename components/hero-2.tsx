"use client";
import React, { useEffect, useState } from "react";
import { CTAOrbit } from "@/components/cta";
import { DottedBackground } from "@/components/common/dottedbg";

export function Hero() {
  const [orbitSize, setOrbitSize] = useState(800);

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setOrbitSize(300);
      } else if (width < 768) {
        setOrbitSize(500);
      } else if (width < 1024) {
        setOrbitSize(600);
      } else {
        setOrbitSize(800);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section className="relative w-full pt-10 md:pt-20 lg:pt-32">
      <DottedBackground className="z-0" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <h1 className="text-center text-2xl font-bold tracking-tight md:text-left md:text-4xl lg:text-6xl">
        One Platform for the Entire <br /> Construction Life cycle
        </h1>

        <h2 className="font-inter max-w-xl py-8 text-center text-base text-neutral-500 md:text-left md:text-lg dark:text-neutral-400">
        From tender discovery to post-handover service — Bylt connects every phase of construction into one intelligent system.
        </h2>
        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <button className="rounded-sm bg-black px-4 py-2 text-white shadow-2xl dark:bg-white dark:text-black">
            Start your free trial
          </button>
          <button className="rounded-sm bg-transparent px-4 py-2 text-black dark:text-white">
            <a href="#">View role based demos</a>
          </button>
        </div>
        <div className="flex justify-center overflow-hidden pt-20">
          <CTAOrbit size={orbitSize} />
        </div>
      </div>
    </section>
  );
}

