// components/ui/ReusableOTP.tsx
import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

interface ReusableOTPProps {
  length: number;
  onComplete: (otp: string) => void;
  className?: string;
}

const ReusableOTP: React.FC<ReusableOTPProps> = ({
  length,
  onComplete,
  className,
}) => {
  const handleOtpChange = (value: string) => {
    if (onComplete && value.length === length) {
      onComplete(value);
    }
  };

  return (
    <InputOTP
      className={`flex justify-center ${className}`}
      maxLength={length}
      onChange={handleOtpChange}
    >
      <InputOTPGroup>
        {Array.from({ length }).map((_, index) => (
          <InputOTPSlot className="ml-4" index={index} key={index} />
        ))}
      </InputOTPGroup>
    </InputOTP>
  );
};

export default ReusableOTP;
