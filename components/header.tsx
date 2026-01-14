"use client"

import { Sparkles, MailIcon, ChevronDown, Heart, ClipboardList, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="max-w-[1440px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 4L20 12L28 16L20 20L16 28L12 20L4 16L12 12L16 4Z" fill="#F97316" />
            </svg>
            <span className="text-sm font-medium text-muted-foreground">LivingWell</span>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-foreground">
                Home
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Eligible activities
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Health assessment
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Program summary
              </a>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 outline-none">
                    Resources
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="p-6 bg-white w-80">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 cursor-pointer hover:opacity-80 transition-opacity">
                      <Heart className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-base text-foreground mb-1">My health assessment</h3>
                        <p className="text-sm text-muted-foreground">
                          Take your current assessment or review past results
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-border" />

                    <div className="flex items-start gap-4 cursor-pointer hover:opacity-80 transition-opacity">
                      <ClipboardList className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-base text-foreground mb-1">Your wellness report</h3>
                        <p className="text-sm text-muted-foreground">See your health assessment results and progress</p>
                      </div>
                    </div>

                    <div className="border-t border-border" />

                    <div className="flex items-start gap-4 cursor-pointer hover:opacity-80 transition-opacity">
                      <BookOpen className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-base text-foreground mb-1">Health & wellness hub</h3>
                        <p className="text-sm text-muted-foreground">Health resources and wellness content</p>
                      </div>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="default" size="sm" className="bg-[#0066FF] hover:bg-[#0052CC] text-white">
                <Sparkles className="w-4 h-4 mr-2" />
                Ask AI
              </Button>
              <Button variant="ghost" size="icon">
                <MailIcon className="w-5 h-5" />
              </Button>
              <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/images/vector.png" />
                  <AvatarFallback>MP</AvatarFallback>
                </Avatar>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
