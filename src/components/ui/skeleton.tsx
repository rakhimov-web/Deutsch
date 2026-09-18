import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("skeleton-text rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
