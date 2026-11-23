"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

export function SwitchDemo() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex items-center gap-3">
      <Button
        variant="outline"
        onClick={() => setChecked((prev) => !prev)}
      >
        Toggle Switch
      </Button>
      <div className="flex items-center gap-2">
        <Switch
          id="airplane-mode"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <label
          htmlFor="airplane-mode"
          className="text-xs font-medium cursor-pointer select-none"
        >
          {checked ? "Airplane mode on" : "Airplane mode off"}
        </label>
      </div>
    </div>
  )
}
