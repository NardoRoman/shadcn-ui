"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        Open Sheet
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Navigation Menu</SheetTitle>
          <SheetDescription>
            This is a side sheet panel drawer from shadcn-ui.
          </SheetDescription>
        </SheetHeader>
        <div className="px-4 py-2 text-sm text-muted-foreground">
          You can place navigation links, filters, or details here.
        </div>
        <SheetFooter>
          <SheetClose render={<Button />}>
            Done
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
