import { Check, CircleDot } from 'lucide-react'

export interface Step {
  id: string
  title: string
  description: string
}

interface StepperProps {
  steps: Step[]
  currentStep: number
  onStepClick?: (step: number) => void
}

export function Stepper({ steps, currentStep, onStepClick }: StepperProps) {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => {
        const status = index === currentStep ? "current" : index < currentStep ? "completed" : "upcoming"
        
        return (
          <button
            key={step.id}
            className="w-full text-left"
            onClick={() => onStepClick?.(index)}
            disabled={status === "upcoming"}
          >
            <div className="relative flex gap-4">
              {index !== steps.length - 1 && (
                <div
                  className={`absolute left-[15px] top-[30px] h-[calc(100%-20px)] w-[2px] ${
                    status === "completed" ? "bg-primary" : "bg-muted"
                  }`}
                />
              )}
              <div className="relative">
                {status === "completed" ? (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                ) : status === "current" ? (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary">
                    <CircleDot className="h-4 w-4 text-primary" />
                  </div>
                ) : (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-muted">
                    <div className="h-2 w-2 rounded-full bg-muted" />
                  </div>
                )}
              </div>
              <div className="space-y-1 pb-8">
                <p className={`font-medium leading-none ${status === "current" ? "text-primary" : ""}`}>
                  {step.title}
                </p>
                <p className="text-[#959595] text-lg">{step.description}</p>
              </div>
            </div>
          </button>
        )
      })}
    </div>
  )
}

