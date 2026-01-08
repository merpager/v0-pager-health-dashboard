import { Sparkles, Bell, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="max-w-[1440px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4L20 12L28 16L20 20L16 28L12 20L4 16L12 12L16 4Z" fill="#F97316" />
              </svg>
              <span className="text-sm font-medium text-muted-foreground">LIVINCOREL</span>
            </div>

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
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
                Resources
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M4 6l4 4 4-4" />
                </svg>
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="default" size="sm" className="bg-[#0066FF] hover:bg-[#0052CC] text-white">
              <Sparkles className="w-4 h-4 mr-2" />
              Ask AI
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  )
}
