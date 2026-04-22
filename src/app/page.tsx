import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { PainPoints } from "@/components/pain-points";
import { WhatIs } from "@/components/what-is";
import { Curriculum } from "@/components/curriculum";
import { EventDetails } from "@/components/event-details";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <PainPoints />
        <WhatIs />
        <Curriculum />
        <EventDetails />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
