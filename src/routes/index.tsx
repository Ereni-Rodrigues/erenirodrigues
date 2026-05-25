import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { PorqueTerapia } from "@/components/PorqueTerapia";
import { TRG } from "@/components/TRG";
import { Metodos } from "@/components/Metodos";
import { Diferenciais } from "@/components/Diferenciais";
import { Depoimentos } from "@/components/Depoimentos";
import { CTAFinal } from "@/components/CTAFinal";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { FadeIn } from "@/components/FadeIn";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main>
        <Hero />
        <FadeIn as="div"><Sobre /></FadeIn>
        <FadeIn as="div"><PorqueTerapia /></FadeIn>
        <FadeIn as="div"><TRG /></FadeIn>
        <FadeIn as="div"><Metodos /></FadeIn>
        <FadeIn as="div"><Diferenciais /></FadeIn>
        <FadeIn as="div"><Depoimentos /></FadeIn>
        <FadeIn as="div"><CTAFinal /></FadeIn>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
