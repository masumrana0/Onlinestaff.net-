import { Label } from "@/components/ui/label"
import JPInput from "@/shared/form/JPInput"

export function ContactLocationSection() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Address</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <JPInput name="address.country" placeholder="Country" />
          <JPInput name="address.state" placeholder="State" />
          <JPInput name="address.zipCode" placeholder="Zip Code" />
          <JPInput name="address.fullAddress" placeholder="Full Address" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label>Timezone</Label>
          <JPInput name="timezone" placeholder="Timezone" />
        </div>
        <div className="space-y-2">
          <Label>Home Currency</Label>
          <JPInput name="homeCurrency" placeholder="Home Currency" />
        </div>
      </div>
      <div className="space-y-2">
        <Label>Phone</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <JPInput name="phone.countryCode" placeholder="Country Code" />
          <JPInput name="phone.number" placeholder="Phone Number" />
        </div>
      </div>
    </div>
  )
}

