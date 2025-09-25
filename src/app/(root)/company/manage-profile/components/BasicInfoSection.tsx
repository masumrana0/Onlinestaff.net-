
import { Label } from "@/components/ui/label"
import { IndustryType } from "@/types/company.type"
import { FileUpload } from "./file-upload"
import JPDatePicker from "@/shared/form/JPDatePicker"
import JPSelect from "@/shared/form/JPSelect"
import JPTextArea from "@/shared/form/JPTextarea"

const companySizeOptions = [
  { value: '1-10', label: '1-10' },
  { value: '11-50', label: '11-50' },
  { value: '51-200', label: '51-200' },
  { value: '201-500', label: '201-500' },
  { value: '501-1000', label: '501-1000' },
  { value: '1000+', label: '1000+' },
]

const industryTypeOptions = Object.entries(IndustryType).map(([key, value]) => ({
  value: key,
  label: value,
}))

export function BasicInfoSection() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-2">
            <Label>Company Logo</Label>
            <FileUpload
              name="logo"
              onChange={(file) => {
                console.log(file)
                // Handle file change
              }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Year of Establishment</Label>
          <JPDatePicker
            name="yearOfEstablishment"
            
          />
        </div>

        <div className="space-y-2">
          <Label>Company Size</Label>
          <JPSelect
            name="companySize"
            options={companySizeOptions}
            placeholder="Select company size"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Industry Type</Label>
        <JPSelect
          name="industryType"
          options={industryTypeOptions}
          placeholder="Select industry type"
        />
      </div>

      <div className="space-y-2">
        <Label>Business Description</Label>
        <JPTextArea
          name="businessDescription"
          placeholder="Provide a detailed description of your business..."
        />
      </div>
    </div>
  )
}

