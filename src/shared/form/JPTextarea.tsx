"use client";

import { Textarea } from "@/components/ui/textarea";
import { Controller } from "react-hook-form";

type TTextAreaProps = {
  name: string;
  placeholder: string;
};

const JPTextArea = ({ name, placeholder }: TTextAreaProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Textarea
          className=" shadow placeholder:text-[#8f8f8f] placeholder:text-sm border-none hover:bg-[#fafafa99] !p-2"
          {...field}
          id={name}
          placeholder={placeholder}
          rows={4}
        />
      )}
    />
  );
};

export default JPTextArea;
