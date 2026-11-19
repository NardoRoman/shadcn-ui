import { Button } from "@/components/ui/button"
import { ToastDemo } from "@/components/ui/ToastDemo"
import { AlertDemo } from "@/components/ui/AlertDemo"
import { DialogDemo } from "@/components/ui/DialogDemo"
import { PopoverDemo } from "@/components/ui/PopoverDemo"

export function App() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex w-full max-w-md min-w-0 flex-col items-start gap-4 text-sm leading-loose">
        <Button>Click me</Button>
        <ToastDemo />
        <AlertDemo />
        <DialogDemo />
        <PopoverDemo />
      </div>
    </div>
  )
}

export default App
