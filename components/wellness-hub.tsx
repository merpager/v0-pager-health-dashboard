import { HandHeartIcon, MessageSquareTextIcon, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function WellnessHub() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">Your wellness hub</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-2 border-[#0066FF]/20 bg-[#F0F7FF]">
          <div className="px-0 py-6">
            <CardContent className="p-6 space-y-4 py-0">
              <div className="flex items-start justify-between">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#0066FF]/10">
                  <HandHeartIcon className="w-5 h-5 text-[#0066FF]" />
                </div>
                <Button size="icon" variant="default" className="bg-[#0066FF] hover:bg-[#0052CC] rounded-full w-8 h-8">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Learn more about your program</h3>
                <p className="text-sm text-muted-foreground">
                  Enjoy generous employer coverage for programs supporting physical health, mental wellbeing, and
                  financial wellness.
                </p>
              </div>
            </CardContent>
          </div>
        </Card>

        <Card>
          <div className="px-0 mx-0 py-6">
            <CardContent className="p-6 space-y-4 py-0">
              <div className="flex items-start justify-between">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted">
                  <MessageSquareTextIcon className="w-5 h-5 text-muted-foreground" />
                </div>
                <Button size="icon" variant="ghost" className="rounded-full w-8 h-8">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">A coach in your corner</h3>
                <p className="text-sm text-muted-foreground">
                  Free 1-on-1 coaching to help you master stress, sharpen focus, and maintain energy, all at no cost to
                  you.
                </p>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  )
}
