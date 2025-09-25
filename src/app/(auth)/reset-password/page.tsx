"use client";

import { useState } from "react";
import JPForm from "@/shared/form/JPForm";
import JPInput from "@/shared/form/JPInput";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PrimaryButton from "@/shared/ui/PrimaryButton";
import PasswordToggle from "../shared/PasswordToggle";
import { toast } from "@/hooks/use-toast";
import {
  useForgotPasswordMutation,
  useResetPasswordMutation,
} from "@/redux/features/auth/authApi";
import { useRouter } from "next/navigation";
import ReusableOTP from "@/shared/auth/ReusableOTP";

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const ResetPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  // const [otpValue, setOtpValue] = useState("");
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
 
  // API call
  const [forgotPassword] = useForgotPasswordMutation();
  const [resetPassword,{isLoading:isResetPasswordLoading}] = useResetPasswordMutation();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const onSubmitEmail = async (data: any) => {
    setEmail(data.email);
    setStep(2);
    try {
      const response: any = await forgotPassword({ email: data.email });
      console.log({ response });
      if (response.success) {
        toast({ title: "Email sent successfully!", duration: 2000 });
      }
    } catch (error: any) {
      toast({
        title: error?.message || "Something went wrong",
        duration: 2000,
      });
    }
  };


  const onSubmitNewPassword = async (data: any) => {
    if (data.password !== data.confirmPassword) {
      toast({ title: "Passwords do not match!", duration: 2000 });
      return;
    }

    console.log("New password submitted:", {
      email,
      otp,
      newPassword: data.password,
    });

    try {
      const response: any = await resetPassword({
        email,
        otp,
        newPassword: data.password,
      });

      
      if (response?.data?.success) {
        router.push("/sign-in");
        toast({
          title: "Password reset successfull",
          duration: 2000,
        });
      }
    } catch (error: any) {
      setStep(1)
      toast({
        title: error?.message || "Something went wrong",
      });
    }
  };



  const handleOtpComplete = (otp: string) => {
    setOtp(otp)
    setStep(3); 
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl text-left font-bold tracking-tight">
              {step === 1 && "Reset your password"}
              {step === 2 && "Enter verification code"}
              {step === 3 && "Create new password"}
            </h1>
            <p className="text-gray-500 text-left">
              {step === 1 && "Enter your email to receive a verification code"}
              {step === 2 && `Enter the 6-digit code sent to ${email}`}
              {step === 3 && "Choose a strong password for your account"}
            </p>
          </div>

          {step === 1 && (
            <JPForm
              onSubmit={onSubmitEmail}
              resolver={zodResolver(emailSchema)}
              className="space-y-6"
            >
              <JPInput
                name="email"
                type="email"
                placeholder="Enter your email"
                onChange={setEmail}
              />
              <div>
                <PrimaryButton
                  type="submit"
                  text="Send verification code"
                  className="h-11 mt-2"
                />
              </div>
            </JPForm>
          )}

          {step === 2 && (
            <ReusableOTP length={6}  onComplete={handleOtpComplete} />
          )}

          {step === 3 && (
            <JPForm onSubmit={onSubmitNewPassword} className="space-y-6">
              <div className="relative">
                <JPInput
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                />
                <PasswordToggle
                  showPassword={showPassword}
                  togglePassword={togglePasswordVisibility}
                />
              </div>

              <div className="relative">
                <JPInput
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="Confirm your password"
                  type={showConfirmPassword ? "text" : "password"}
                />
                <PasswordToggle
                  showPassword={showConfirmPassword}
                  togglePassword={toggleConfirmPasswordVisibility}
                />
              </div>

              <div>
                <PrimaryButton
                  isLoading={isResetPasswordLoading}
                  type="submit"
                  text="reset password"
                  className="h-11 mt-2"
                />
              </div>
            </JPForm>
          )}
        </div>
      </div>

      <div className="hidden lg:flex flex-1 items-center justify-center bg-gray-50">
        {" "}
      </div>
    </div>
  );
};

export default ResetPassword;
