"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Open Dialog
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>

        <div className="py-2 text-sm text-muted-foreground">
          This is an interactive Dialog component created with shadcn-ui.
        </div>

        <DialogFooter showCloseButton>
          <DialogClose render={<Button />}>
            Save changes
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
