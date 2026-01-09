import { Clock, DollarSign, Activity, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card } from "@/components/ui/card"

interface HeroSectionProps {
  scenario?: "new" | "in-progress" | "complete" | "reroll"
}

export function HeroSection({ scenario = "new" }: HeroSectionProps) {
  if (scenario === "complete") {
    return (
      <div className="px-6 py-6 bg-secondary border rounded-xl">
        <div className="space-y-6">
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Based on your January 10, 2026 health assessment</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Wellness Score Card */}
            <div className="space-y-6">
              <div className="flex items-start gap-8">
                {/* Score Circle */}
                <div className="relative flex-shrink-0">
                  <svg width="180" height="180" viewBox="0 0 180 180" className="transform -rotate-90">
                    <circle
                      cx="90"
                      cy="90"
                      r="70"
                      fill="white"
                      stroke="#e5e7eb"
                      strokeWidth="12"
                      className="drop-shadow-lg"
                    />
                    <circle
                      cx="90"
                      cy="90"
                      r="70"
                      fill="none"
                      stroke="#003d82"
                      strokeWidth="12"
                      strokeDasharray="439.6"
                      strokeDashoffset="43.96"
                      strokeLinecap="round"
                    />
                    <circle cx="160" cy="90" r="8" fill="#60a5fa" className="transform rotate-90" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-bold text-[#003d82]">90</span>
                  </div>
                </div>

                {/* Score Description */}
                <div className="space-y-3 pt-8">
                  <h2 className="text-2xl font-bold">Your wellness score</h2>
                  <p className="text-muted-foreground">Healthier habits = a higher score</p>
                  <div className="inline-flex items-center gap-2 text-sm font-medium">
                    <span>On-track</span>
                  </div>
                </div>
              </div>
            </div>

            {/* My Focus Area Card */}
            <div>
              <h2 className="mb-4 font-semibold text-base">My focus area</h2>
              <Card className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🧠</span>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-base">Mental health</h3>
                      <p className="text-muted-foreground text-base">High priority</p>
                    </div>
                  </div>
                  <Button variant="link" className="text-[#0066FF]">
                    Learn why
                  </Button>
                </div>
              </Card>
              <div className="flex justify-center mt-6">
                <Button variant="ghost" size="sm">
                  <ChevronDown className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-[#0066FF] p-8 text-white">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🧠</span>
                <span className="text-sm font-medium">Mental health</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs border border-white rounded-full px-3 py-1">For you</span>
                <button className="text-white">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="4" r="1.5" fill="currentColor" />
                    <circle cx="10" cy="10" r="1.5" fill="currentColor" />
                    <circle cx="10" cy="16" r="1.5" fill="currentColor" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-[300px_1fr] gap-8 items-center">
              {/* Illustration */}
              <div className="bg-white rounded-2xl p-6 flex items-center justify-center py-0 px-0">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image2-VWfbZlgDVtXBJ675TI6nSZ6IdR5hE3.png"
                  alt="Person walking dog"
                  className="w-[200px] h-[200px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Experiencing the outdoors</h2>
                <p className="text-white/90 text-lg">
                  Getting outdoors is scientifically proven to help with depression, anxiety...{" "}
                  <button className="underline font-medium">see more</button>
                </p>

                <div className="pt-4">
                  <Button size="lg" className="bg-white text-[#0066FF] hover:bg-white/90 font-medium rounded-full px-8">
                    Get started! →
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <button className="flex items-center justify-between w-full py-4 text-left hover:opacity-70 transition-opacity">
            <span className="font-medium text-sm">Explore more activities</span>
            <ChevronDown className="w-6 h-6 rotate-[-90deg]" />
          </button>
        </div>
      </div>
    )
  }

  if (scenario === "in-progress") {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-[#0066FF] p-8 text-white">
        <div className="relative z-10 flex items-center justify-between mx-0 px-0 gap-8 flex-row">
          <div className="flex-1 space-y-4">
            <div className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium">In Progress</div>

            <h1 className="text-2xl font-bold text-balance">Continue your health assessment</h1>

            <p className="text-sm text-white/90">You're making great progress! Just a few more questions to go.</p>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Progress: 4 of 6 sections complete</span>
                <span>67%</span>
              </div>
              <Progress value={67} className="h-2 bg-white/20" />
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>~5 min remaining</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                <span>Earn $25</span>
              </div>
            </div>

            <Button className="w-full bg-white text-[#0066FF] hover:bg-white/90 font-medium" size="lg">
              Continue assessment →
            </Button>
          </div>

          <div className="hidden lg:block">
            <img src="/images/image.png" alt="Healthcare professional" className="h-[200px] w-[200px]" />
          </div>
        </div>
      </div>
    )
  }

  if (scenario === "reroll") {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-[#0066FF] p-8 text-white">
        <div className="relative z-10 flex items-center justify-between mx-0 px-0 gap-8 flex-row">
          <div className="flex-1 space-y-4">
            <div className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium">Available</div>

            <h1 className="text-2xl font-bold text-balance">Ready for your health assessment?</h1>

            <p className="text-sm text-white/90">
              Your setup is complete! Take the health assessment to unlock personalized recommendations and earn
              rewards.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>15 min</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                <span>Earn $25</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4" />
                <span>Track 6 health areas</span>
              </div>
            </div>

            <Button className="w-full bg-white text-[#0066FF] hover:bg-white/90 font-medium" size="lg">
              Start health assessment →
            </Button>
          </div>

          <div className="hidden lg:block">
            <img src="/images/image.png" alt="Healthcare professional" className="h-[200px] w-[200px]" />
          </div>
        </div>
      </div>
    )
  }

  // Default: New user scenario
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#0066FF] p-8 text-white">
      <div className="relative z-10 flex items-center justify-between mx-0 px-0 gap-8 flex-row">
        <div className="flex-1 space-y-4">
          <div className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium">Recommended</div>

          <h1 className="text-2xl font-bold text-balance">Unlock tailored advice made for you</h1>

          <p className="text-sm text-white/90">
            A short health assessment is all it takes to access your personalized action plan.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>15 min</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              <span>Earn $25</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              <span>Track 6 health areas</span>
            </div>
          </div>

          <Button className="w-full bg-white text-[#0066FF] hover:bg-white/90 font-medium" size="lg">
            Start health assessment →
          </Button>
        </div>

        <div className="hidden lg:block">
          <img src="/images/image.png" alt="Healthcare professional" className="h-[200px] w-[200px]" />
        </div>
      </div>
    </div>
  )
}
