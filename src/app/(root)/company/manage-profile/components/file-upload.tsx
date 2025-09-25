"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ImagePlus, X, } from 'lucide-react'
import Image from "next/image"
import { cn } from "@/lib/utils"

interface FileUploadProps {
  name: string
  value?: File | null
  onChange: (file: File | null) => void
  className?: string
}

export function FileUpload({ name, onChange, className }: FileUploadProps) {
  const [preview, setPreview] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      onChange(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemove = () => {
    onChange(null)
    setPreview(null)
  }

  return (
    <div className={cn("space-y-4", className)}>
      <input
        type="file"
        id={name}
        name={name}
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      {!preview ? (
        <label
          htmlFor={name}
          className="group relative flex h-48 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-muted-foreground/25 px-6 py-4 text-center transition-all hover:border-primary"
        >
          <div className="rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
            <ImagePlus className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">Upload company logo</p>
            <p className="text-xs text-muted-foreground">
              SVG, PNG, JPG or GIF (max. 2MB)
            </p>
          </div>
        </label>
      ) : (
        <div className="relative h-48 w-full overflow-hidden rounded-lg border">
          <Image
            src={preview}
            alt="Preview"
            fill
            className="object-contain"
          />
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute right-2 top-2"
            onClick={handleRemove}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
