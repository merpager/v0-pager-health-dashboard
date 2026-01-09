import { DollarSign, TrendingUp, Award, Activity, ArrowRightIcon, ChevronRight, HelpCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface SidebarProps {
  scenario?: "new" | "in-progress" | "complete" | "reroll"
}

export function Sidebar({ scenario = "new" }: SidebarProps) {
  const rewards = [
    { icon: DollarSign, label: "Earn $100" },
    { icon: TrendingUp, label: "Earn 1000 points" },
    { icon: Award, label: "Earn 40 badges" },
  ]

  const activities = [
    {
      icon: "/images/step-20up-20to-20wellness.png",
      label: "Step up to wellness",
    },
    {
      icon: "/images/manage-20weight.png",
      label: "Manage weight",
    },
    {
      icon: "/images/reduce-20screen-20time.png",
      label: "Reduce screen time",
    },
  ]

  const hasStartedActivities = scenario === "in-progress" || scenario === "complete"
  const activitiesTitle = hasStartedActivities ? "In progress" : "Explore activities"

  return (
    <aside className="w-80 space-y-4 hidden lg:block">
      <Card>
        <div className="py-6 px-6">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CardTitle className="text-base">Your rewards</CardTitle>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="w-4 h-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="w-[340px] p-6 bg-white text-black border-gray-200">
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-black">Dollars</h3>
                          <p className="text-sm text-gray-600">$100 each quarter; $400 per year</p>
                          <p className="text-sm text-gray-600">01/01/2026 - 03/31/2026</p>
                        </div>

                        <div className="border-t border-gray-200 pt-6">
                          <h3 className="font-semibold text-lg mb-2 text-black">Points</h3>
                          <p className="text-sm text-gray-600">100 points each quarter; 400 per year</p>
                          <p className="text-sm text-gray-600">01/01/2026 - 03/31/2026</p>
                        </div>

                        <div className="border-t border-gray-200 pt-6">
                          <h3 className="font-semibold text-lg mb-2 text-black">Badges</h3>
                          <p className="text-sm text-gray-600">100 badges each quarter; 400 per year</p>
                          <p className="text-sm text-gray-600">01/01/2026 - 03/31/2026</p>
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Button size="icon" variant="default" className="bg-[#0066FF] hover:bg-[#0052CC] rounded-full w-8 h-8">
                <ArrowRightIcon className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {rewards.map((reward, index) => (
              <div
                key={index}
                className="flex p-3 rounded-lg hover:bg-muted/50 transition-colors px-0 my-0 gap-4 items-center py-3"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted">
                  <reward.icon className="w-4 h-4" />
                </div>
                <span className="text-sm font-normal">{reward.label}</span>
              </div>
            ))}
          </CardContent>
        </div>
      </Card>

      <Card className="bg-transparent border shadow-none">
        <div className="px-0 mx-6 my-6 py-0">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              <CardTitle className="text-base">{activitiesTitle}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer bg-card py-4 px-4 border gap-0"
              >
                <div className="flex items-center gap-4">
                  <img src={activity.icon || "/placeholder.svg"} alt="" className="w-8 h-8 rounded-lg" />
                  <span className="text-sm font-normal">{activity.label}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </div>
            ))}
          </CardContent>
        </div>
      </Card>

      <Card className="bg-transparent border shadow-none">
        <div className="px-0 py-0">
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
        </div>
      </Card>
    </aside>
  )
}
