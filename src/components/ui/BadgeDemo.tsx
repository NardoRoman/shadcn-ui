"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function BadgeDemo() {
  const [count, setCount] = useState(1)

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment Badge
      </Button>
      <Badge variant="secondary">
        Notifications: {count}
      </Badge>
    </div>
  )
}
