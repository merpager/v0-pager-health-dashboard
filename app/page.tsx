import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WellnessHub } from "@/components/wellness-hub"
import { WellnessJourney } from "@/components/wellness-journey"
import { ActivitiesSection } from "@/components/activities-section"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-[1440px] mx-auto flex gap-6 px-6 py-6">
        <main className="flex-1 space-y-8">
          <HeroSection />

          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-medium">Explore more activities</h2>
              <button className="text-muted-foreground hover:text-foreground">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 4l6 6-6 6" />
                </svg>
              </button>
            </div>
          </section>

          <WellnessHub />
          <WellnessJourney />
          <ActivitiesSection />
        </main>

        <Sidebar />
      </div>
      <Footer />
    </div>
  )
}
