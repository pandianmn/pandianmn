import { cn } from "@/lib/utils"

function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center font-bold text-2xl",
        className
      )}
      role="img"
      aria-label="Logo"
    >
      <span className="text-primary">PM</span>
    </div>
  )
}

export default Logo
