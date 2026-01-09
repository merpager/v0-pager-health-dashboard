"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WellnessHub } from "@/components/wellness-hub"
import { WellnessJourney } from "@/components/wellness-journey"
import { ActivitiesSection } from "@/components/activities-section"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { ScenarioNav } from "@/components/scenario-nav"

export default function HomePage() {
  const [scenario, setScenario] = useState<"new" | "in-progress" | "complete" | "reroll">("new")

  return (
    <div className="min-h-screen bg-background">
      <ScenarioNav currentScenario={scenario} onScenarioChange={setScenario} />
      <Header />
      <div className="max-w-[1440px] mx-auto flex gap-6 px-6 py-6">
        <main className="flex-1 space-y-8">
          <HeroSection scenario={scenario} />

          <section>
            
          </section>

          <WellnessHub />
          <WellnessJourney scenario={scenario} />
          <ActivitiesSection />
        </main>

        <Sidebar scenario={scenario} />
      </div>
      <Footer />
    </div>
  )
}
