"use client"

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import { useFormContext, Controller } from "react-hook-form";


type TDatePickerProps = {
  name: string;
  label?: string;
  defaultValue?: string;
};

const JPDatePicker: React.FC<TDatePickerProps> = ({
  name,
  label,
  defaultValue,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-5">
      {label && <label className="block mb-2">{label}</label>}
      <Controller
        name={name}
        control={control} // Ensure the control is provided
        defaultValue={defaultValue ? dayjs(defaultValue).toISOString() : ""}
        render={({ field: { onChange, value } }) => (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                onClick={() => setOpen(!open)}
                className="w-full justify-start text-left font-normal"
              >
                {value ? dayjs(value).format("YYYY-MM-DD") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={value ? new Date(value) : undefined}
                onSelect={(date) => {
                  if (date) {
                    const isoDate = date.toISOString();
                    onChange(isoDate);
                  }
                }}
                className="rounded-md border"
              />
            </PopoverContent>
          </Popover>
        )}
      />
      <>
        {errors && typeof errors[name]?.message === "string" ? (
          <small className="text-red-500">{errors[name]?.message}</small>
        ) : (
          ""
        )}
      </>
    </div>
  );
};

export default JPDatePicker;
