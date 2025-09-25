"use client";

import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { TInputProps } from "@/types/form.type";

interface Iprops extends TInputProps {
  placeholder?: string;
}

const JPInput = ({
  type = "text",
  name,
  className,
  defaultValue = "",
  placeholder,
  onChange,
}: Iprops) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <Controller
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Input
            autoComplete="off"
            placeholder={placeholder}
            className={`
              ${className} p-6  pl-5 text-sm   w-full border placeholder:text-gray-400 text-black border-gray-200 bg-white
              
              
            `}
            {...field}
            type={type}
            id={name}
            onChange={(e) => {
              // Call the passed in onChange prop first
              if (onChange) {
                onChange(e.target.value);
              }

              // Also handle the form field update from react-hook-form
              field.onChange(e);
            }}
          />
        )}
      />
      {errors && typeof errors[name]?.message === "string" && (
        <small className="text-red-500">{errors[name]?.message}</small>
      )}
    </div>
  );
};

export default JPInput;
