import { ClipboardList, Mail, Smartphone, Watch } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function WellnessJourney() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Complete your health assessment",
      description: "Receive custom activity recommendations tailored to you",
    },
    {
      icon: Mail,
      title: "Verify your email address",
      description: "Get personalized wellness insights and never miss a reward",
    },
    {
      icon: Smartphone,
      title: "Download the mobile app",
      description: "Log activities in seconds and track your progress anytime, anywhere",
    },
    {
      icon: Watch,
      title: "Connect your fitness device",
      description: "Sync workouts automatically and earn rewards effortlessly",
    },
  ]

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Start your wellness journey</h2>
          <p className="text-sm text-muted-foreground">A few quick steps to unlock your full experience</p>
        </div>
        <span className="text-sm font-medium text-muted-foreground">0/4</span>
      </div>

      <div className="space-y-3">
        {steps.map((step, index) => (
          <Card key={index} className="hover:bg-muted/50 transition-colors cursor-pointer">
            <CardContent className="p-4 py-0">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted">
                  <step.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 4l6 6-6 6" />
                </svg>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
