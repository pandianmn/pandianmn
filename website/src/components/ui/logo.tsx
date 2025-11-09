import { cn } from "@/lib/utils"

function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "w-full h-auto text-neutral-900 dark:text-neutral-100 transition-colors duration-300",
        className
      )}
      role="img"
      aria-label="Logo"
      aria-hidden="true"
      focusable="false"
    >
      {/* Empty SVG placeholder - to be replaced later */}
    </svg>
  )
}

export default Logo
