import { Check, CircleDot } from "lucide-react"

interface Step {
  title: string
  description: string
  status: 'completed' | 'current' | 'upcoming'
}

interface ProfileStepperProps {
  steps: Step[]
  currentStep: number
}

export function ProfileStepper({ steps }: ProfileStepperProps) {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div key={step.title} className="relative flex gap-4">
          {index !== steps.length - 1 && (
            <div
              className={`absolute left-[15px] top-[30px] h-[calc(100%-20px)] w-[2px] ${
                step.status === 'completed' ? 'bg-primary' : 'bg-muted'
              }`}
            />
          )}
          <div className="relative">
            {step.status === 'completed' ? (
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <Check className="h-4 w-4 text-primary-foreground" />
              </div>
            ) : step.status === 'current' ? (
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
            <p className="font-heading text-sm font-medium leading-none">
              {step.title}
            </p>
            <p className="text-sm text-muted-foreground">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

