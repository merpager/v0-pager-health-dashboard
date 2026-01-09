import { ClipboardList, Mail, Smartphone, Watch, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface WellnessJourneyProps {
  scenario?: "new" | "in-progress" | "complete" | "reroll"
}

export function WellnessJourney({ scenario = "new" }: WellnessJourneyProps) {
  const steps = [
    {
      icon: ClipboardList,
      title: "Complete your health assessment",
      description: "Receive custom activity recommendations tailored to you",
      completed: scenario === "complete" || scenario === "reroll",
    },
    {
      icon: Mail,
      title: "Verify your email address",
      description: "Get personalized wellness insights and never miss a reward",
      completed: scenario === "complete" || scenario === "reroll",
    },
    {
      icon: Smartphone,
      title: "Download the mobile app",
      description: "Log activities in seconds and track your progress anytime, anywhere",
      completed: scenario === "complete",
    },
    {
      icon: Watch,
      title: "Connect your fitness device",
      description: "Sync workouts automatically and earn rewards effortlessly",
      completed: scenario === "complete",
    },
  ]

  const completedCount = scenario === "complete" ? 4 : scenario === "reroll" ? 2 : scenario === "in-progress" ? 1 : 0

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Start your wellness journey</h2>
          <p className="text-sm text-muted-foreground">A few quick steps to unlock your full experience</p>
        </div>
        <span className="text-sm font-medium text-muted-foreground">{completedCount}/4</span>
      </div>

      <div className="space-y-3">
        {steps.map((step, index) => (
          <Card
            key={index}
            className={`hover:bg-muted/50 transition-colors cursor-pointer ${step.completed ? "bg-muted/30" : ""}`}
          >
            <div className="py-4 px-0">
              <CardContent className="p-4 py-0">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                      step.completed ? "bg-green-100" : "bg-muted"
                    }`}
                  >
                    {step.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    ) : (
                      <step.icon className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-medium ${step.completed ? "text-muted-foreground" : ""}`}>{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={step.completed ? "text-muted-foreground" : ""}
                  >
                    <path d="M7 4l6 6-6 6" />
                  </svg>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
