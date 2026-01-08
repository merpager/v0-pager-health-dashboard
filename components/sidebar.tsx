import { DollarSign, TrendingUp, Award, Activity, ChevronRight, HelpCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Sidebar() {
  const rewards = [
    { icon: DollarSign, label: "Earn $100" },
    { icon: TrendingUp, label: "Earn 1000 points" },
    { icon: Award, label: "Earn 40 badges" },
  ]

  const activities = [
    {
      icon: "/walking-shoes-icon.jpg",
      label: "Step up to wellness",
    },
    {
      icon: "/scale-weight-icon.jpg",
      label: "Manage weight",
    },
    {
      icon: "/phone-screen-time-icon.jpg",
      label: "Reduce screen time",
    },
  ]

  return (
    <aside className="w-80 space-y-4 hidden lg:block">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CardTitle className="text-base">Your rewards</CardTitle>
              <HelpCircle className="w-4 h-4 text-muted-foreground" />
            </div>
            <Button size="icon" variant="default" className="bg-[#0066FF] hover:bg-[#0052CC] rounded-full w-8 h-8">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {rewards.map((reward, index) => (
            <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted">
                <reward.icon className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">{reward.label}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4" />
            <CardTitle className="text-base">Explore activities</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <img src={activity.icon || "/placeholder.svg"} alt="" className="w-8 h-8 rounded-lg" />
                <span className="text-sm font-medium">{activity.label}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-5 space-y-3">
          <div className="flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h3 className="font-semibold text-sm">Need help?</h3>
              <p className="text-sm text-muted-foreground">
                Our wellness team is here for you! Call 801-404-2985 M-F 7am to 7pm
              </p>
              <Button variant="link" className="p-0 h-auto text-[#0066FF] hover:text-[#0052CC]">
                Link
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </aside>
  )
}
