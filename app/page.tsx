import { AgenticIntelligence } from "@/components/agentic-intelligence";
import { CTA, CTAOrbit } from "@/components/cta";
import { DivideX } from "@/components/divide";
import { FAQs } from "@/components/faqs";
import { Hero } from "@/components/hero-2";
import { LogoCloud } from "@/components/logo-cloud";
import { LifecycleTimeline } from "@/components/lifecycle";
import { TextAnimationFlippingWords } from "@/components/we-eliminating";
import { SparklesPreview } from "@/components/bylt-sparkle";
import { CTAWithBackgroundNoise } from "@/components/cta-2";
import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags();

export default function Home() {
  return (
    <main>
      <DivideX />
      <Hero />
      <DivideX />
      <LogoCloud />
      <DivideX />
      <AgenticIntelligence />
      <DivideX />
      <TextAnimationFlippingWords />
      <DivideX />
      <LifecycleTimeline />
      <DivideX />
      <SparklesPreview />
      <DivideX />
      <CTAWithBackgroundNoise />
      <DivideX />
      <FAQs />
      <DivideX />
      <CTA />
      <DivideX />
    </main>
  );
}
