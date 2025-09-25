"use client";

import { Controller, useFormContext } from "react-hook-form";
import { TFormSelectProps } from "@/types/form.type";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


const JPSelect = ({
  name,
  options,
  defaultValue,
  disabled,
  placeholder,
}: TFormSelectProps): JSX.Element => {
  const {
    formState: { errors },
    control,
  } = useFormContext();

  return (
    <div className="space-y-2">
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Select
            disabled={disabled}
            onValueChange={field.onChange}
            value={field.value}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      {errors[name] && (
        <p className="text-sm text-red-500">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default JPSelect;
