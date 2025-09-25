import { Card, CardContent } from "@/components/ui/card"
import { H3 } from "@/components/ui/typography"
import { CheckCircle2, AlertCircle } from 'lucide-react'

export function IDVerificationGuide() {
  return (
    <Card className="w-full max-w-4xl mx-auto shadow-none">

      <CardContent className="space-y-6 py-6">
        <div className="space-y-4">
          <H3 className="!text-lg font-semibold">Required Information:</H3>
          <ul className="list-disc pl-5 space-y-2 text-[#343434]">
            <li>Your full name</li>
            <li>A clear photo of yourself</li>
            <li>Your signature</li>
          </ul>
        </div>

        <div className="space-y-4">
        <H3 className="!text-lg font-semibold">Required Information:</H3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AcceptedIDType type="Government-issued ID" />
            <AcceptedIDType type="Passport" />
            <AcceptedIDType type="Driver's License" />
            <AcceptedIDType type="National ID Card" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Not Accepted:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RejectedIDType type="Company IDs" />
            <RejectedIDType type="Library cards" />
            <RejectedIDType type="Handwritten IDs" />
            <RejectedIDType type="Temporary IDs" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Important Reminders:</h3>
          <ul className="list-disc pl-5 space-y-2 text-[#343434]">
            <li>Do not crop, rotate, edit, or alter the ID image in any way</li>
            <li>Ensure your ID matches your OnlineJobs profile photo and name</li>
            <li>Your ID will remain private and will not be shared with anyone, including employers</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

function AcceptedIDType({ type }: { type: string }) {
  return (
    <div className="flex items-center space-x-2">
      <CheckCircle2 className="text-green-500 size-5" />
      <span className="text-[#343434]">{type}</span>
    </div>
  )
}

function RejectedIDType({ type }: { type: string }) {
  return (
    <div className="flex items-center space-x-2">
      <AlertCircle className="text-red-500 size-5" />
      <span className="text-[#343434]">{type}</span>
    </div>
  )
}

