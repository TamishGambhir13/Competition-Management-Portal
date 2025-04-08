import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface CompetitionCardProps {
  title: string
  subtitle: string
  tag?: string
  highlighted?: boolean
  additionalInfo?: string
}

export function CompetitionCard({ title, subtitle, tag, highlighted = false, additionalInfo }: CompetitionCardProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden border-0 bg-[hsl(var(--brand-color-canvas-subtle))] text-white",
        highlighted && "ring-2 ring-amber-500",
      )}
    >
      <CardContent className="p-6">
        {tag && (
          <div className="absolute top-3 right-3">
            <div className="px-2 py-1 text-xs font-medium rounded-full bg-amber-900/50 text-amber-300">{tag}</div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-bold">{title}</h3>
            <p className="mt-1 text-sm text-gray-400">{subtitle}</p>
          </div>
          <button
            className={cn(
              "flex items-center justify-center w-8 h-8 rounded-full border border-gray-700",
              highlighted ? "bg-amber-600 border-amber-600" : "bg-transparent hover:bg-gray-800",
            )}
          >
            <Star className="w-4 h-4" />
          </button>
        </div>

        {additionalInfo && (
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="text-xs text-gray-400">{additionalInfo}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

