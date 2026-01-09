import { Clock, DollarSign, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
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
