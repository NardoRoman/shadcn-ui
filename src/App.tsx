import { Button } from "@/components/ui/button"
import { ToastDemo } from "@/components/ui/ToastDemo"

export function App() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <Button >
          Click me
        </Button>
        <ToastDemo />
      </div>
    </div>
  )
}

export default App
