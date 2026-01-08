import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function ActivitiesSection() {
  const activities = [
    {
      title: "Step up for wellness",
      description: "Challenge yourself and your team to take more steps within 30 days....",
      image: "/person-walking-on-path-outdoors-fitness-shoes.jpg",
      badge: "Earn 20 badges",
      duration: "30 days",
      type: "Team",
    },
    {
      title: "Mastering mindfulness",
      description: "Take three minutes to de-stress with mindfulness meditation.",
      image: "/person-with-headphones-meditating-indoors-kitchen.jpg",
      badge: "Earn $10",
      duration: "14 days",
      type: "Activity",
    },
    {
      title: "Improve dietary habits",
      description: "Build better eating habits.",
      image: "/happy-couple-carrying-grocery-bags-outdoors.jpg",
      type: "Coaching",
    },
  ]

  return (
    <section className="space-y-4 pb-12">
      <div>
        <h2 className="text-xl font-bold">Activities at a glance</h2>
        <p className="text-sm text-muted-foreground">Explore content and earn rewards</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {activities.map((activity, index) => (
          <Card key={index} className="overflow-hidden border border-gray-200">
            <img
              src={activity.image || "/placeholder.svg"}
              alt={activity.title}
              className="w-full h-[280px] object-cover"
            />
            <div className="p-6 space-y-6 py-0">
              <div className="space-y-3">
                <h3 className="text-xl font-bold">{activity.title}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">{activity.description}</p>
              </div>

              <div className="border-t border-gray-200" />

              <div className="flex items-center gap-3 text-sm flex-wrap">
                {activity.badge && (
                  <span className="rounded-full bg-[#0066FF] px-4 py-1.5 text-white font-medium">{activity.badge}</span>
                )}
                {activity.duration && <span className="text-gray-700">{activity.duration}</span>}
                {activity.type && <span className="text-gray-700">{activity.type}</span>}
              </div>

              <Button className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-full h-12 text-base font-medium">
                Learn more
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
