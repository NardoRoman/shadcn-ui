"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown } from "lucide-react"

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex w-full flex-col gap-2 rounded-lg border p-3"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-medium">@shadcn starred 3 repositories</span>
        <CollapsibleTrigger render={<Button variant="ghost" size="icon-sm" />}>
          <ChevronsUpDown className="size-4" />
          <span className="sr-only">Toggle</span>
        </CollapsibleTrigger>
      </div>

      <div className="rounded-md border px-3 py-2 text-xs">
        @base-ui/react
      </div>

      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border px-3 py-2 text-xs">
          @tailwindcss/vite
        </div>
        <div className="rounded-md border px-3 py-2 text-xs">
          @fontsource-variable/geist
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
