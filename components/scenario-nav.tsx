"use client"

import { Button } from "@/components/ui/button"

interface ScenarioNavProps {
  currentScenario: "new" | "in-progress" | "complete" | "reroll"
  onScenarioChange: (scenario: "new" | "in-progress" | "complete" | "reroll") => void
}

export function ScenarioNav({ currentScenario, onScenarioChange }: ScenarioNavProps) {
  const scenarios = [
    { id: "new" as const, label: "1. New (Setup + Health Assessment Not Started)" },
    { id: "in-progress" as const, label: "2. In Progress (Setup + Health Assessment In Progress)" },
    { id: "complete" as const, label: "3. Complete (Health Assessment Completed)" },
    { id: "reroll" as const, label: "4. Reroll Experience (Setup Completed + Health Assessment Not Started)" },
  ]

  return (
    <div className="bg-muted/30 border-b">
      <div className="max-w-[1440px] mx-auto px-6 py-3">
        <div className="flex items-center gap-2 overflow-x-auto">
          <span className="text-sm font-medium text-muted-foreground whitespace-nowrap mr-2">Scenarios:</span>
          {scenarios.map((scenario) => (
            <Button
              key={scenario.id}
              variant={currentScenario === scenario.id ? "default" : "outline"}
              size="sm"
              onClick={() => onScenarioChange(scenario.id)}
              className={
                currentScenario === scenario.id
                  ? "bg-[#0066FF] hover:bg-[#0052CC] whitespace-nowrap"
                  : "whitespace-nowrap"
              }
            >
              {scenario.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
