import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { SocialProof } from "@/components/landing/SocialProof";
import { ActiveDashboard } from "@/components/landing/ActiveDashboard";
import { Workflow } from "@/components/landing/Workflow";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Features } from "@/components/landing/Features";
import { Templates } from "@/components/landing/Templates";
import { MobileFirst } from "@/components/landing/MobileFirst";
import { AIGeneration } from "@/components/landing/AIGeneration";
import { Audiences } from "@/components/landing/Audiences";
import { Conversion } from "@/components/landing/Conversion";
import { Trust } from "@/components/landing/Trust";
import { Integrations } from "@/components/landing/Integrations";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { Reveal } from "@/components/landing/Reveal";

import { faqs } from "@/components/landing/FAQ";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QuizFlowKit — AI Quiz Funnels for Paid Social Ads" },
      {
        name: "description",
        content:
          "The fastest way to create AI-powered quiz funnels for TikTok, Instagram, and Facebook Ads. Generate, launch, and convert in minutes.",
      },
      { property: "og:title", content: "QuizFlowKit — AI Quiz Funnels for Paid Social Ads" },
      {
        property: "og:description",
        content:
          "Generate high-converting quiz funnels in minutes. Built for TikTok, Instagram, and Meta Ads.",
      },
      { property: "og:url", content: "https://quizflowkit.com/" },
      { name: "twitter:title", content: "QuizFlowKit — AI Quiz Funnels for Paid Social Ads" },
      {
        name: "twitter:description",
        content:
          "Generate high-converting quiz funnels in minutes. Built for TikTok, Instagram, and Meta Ads.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://quizflowkit.com/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <Reveal><ActiveDashboard /></Reveal>
        <Reveal><Workflow /></Reveal>
        <Reveal><HowItWorks /></Reveal>
        <Reveal><Features /></Reveal>
        <Reveal><Templates /></Reveal>
        <Reveal><MobileFirst /></Reveal>
        <Reveal><AIGeneration /></Reveal>
        <Reveal><Audiences /></Reveal>
        <Trust />
        <Integrations />
        <Reveal><Conversion /></Reveal>
        <Testimonials />
        <Reveal><Pricing /></Reveal>
        <FAQ />
        <Reveal><FinalCTA /></Reveal>
      </main>
      <Footer />
    </div>
  );
}
