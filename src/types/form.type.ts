/* eslint-disable @typescript-eslint/no-explicit-any */
import { SubmitHandler, FieldValues } from "react-hook-form";

export type FormSubmitHandler = SubmitHandler<FieldValues>;

export type TFormSelectProps = {
  label?: string;
  name: string;
  //options will be an array of object
  options: { value: string; label: string }[] | undefined;
  defaultValue?: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
};

export interface TInputProps {
  type?: string;
  name: string;
  label?: string;
  className?: string;
  defaultValue?: any;
  errorObj?: {
    error?: string;
    message?: string;
  };
  onChange?: (p: string) => void;
}
