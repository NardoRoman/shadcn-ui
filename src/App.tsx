import { Button } from "@/components/ui/button"
import { ToastDemo } from "@/components/ui/ToastDemo"
import { AlertDemo } from "@/components/ui/AlertDemo"

export function App() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <Button >
          Click me
        </Button>
        <ToastDemo />
        <AlertDemo />
      </div>
    </div>
  )
}

export default App
