"use client";

import Link from "next/link";
import { useState } from "react";
import JPForm from "@/shared/form/JPForm";
import Checkbox from "@/shared/form-fields/Checkbox";
import SignupVector from "./_components/SignupVector";

import PasswordToggle from "../shared/PasswordToggle";
import JPInput from "@/shared/form/JPInput";
import PrimaryButton from "@/shared/ui/PrimaryButton";
import AuthFormHeader from "../shared/AuthFormHeader";
import AuthRedirect from "../shared/AuthRedirect";
import { toast } from "@/hooks/use-toast";
import { useRouter, useSearchParams } from "next/navigation";
import verifyToken from "@/helper/auth/VerifyToken";
import { useAppDispatch } from "@/redux/hook";
import { setUser } from "@/redux/features/auth/authSlice";
import {
  useSignupAsCompanyMutation,
  useSignupAsJobSeekerMutation,
} from "@/redux/features/auth/authApi";


const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const search = useSearchParams();
  const userType = search.get("userType");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const [signupAsJobseeker, { isLoading: isJobSeekerSignupLoading }] =
    useSignupAsJobSeekerMutation();
  const [signupAsCompany, { isLoading: isCompanySignupLoading }] =
    useSignupAsCompanyMutation();

  const onSignupSubmit = async (data: any) => {
    if (data.password !== data.confirmPassword) {
      toast({ title: "Passwords do not match!", duration: 2000 });
      return;
    }
    if (!termsChecked) {
      toast({
        title: "You must agree to the terms and conditions to sign up.",
        duration: 2000,
      });
      return;
    }
    delete data.confirmPassword;

    try {
      const signup =
        userType === "company" ? signupAsCompany : signupAsJobseeker;
      const response: any = await signup(data);
      if (response.data.success) {
        const { accessToken } = response.data.data;
        const decodedUser = verifyToken(accessToken);
        dispatch(setUser({ user: decodedUser, token: accessToken }));
        router.push("/");
        toast({ title: "Successfully signed in", duration: 2000 });
      }
    } catch (error: any) {
      toast({
        title: error?.message || "Something went wrong",
        duration: 2000,
      });
    }
  };

  return (
    <div className="lg:flex justify-center items-center  relative">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <AuthFormHeader
            title={`Sign Up as ${
              userType === "company" ? "Company" : "Job-seeker"
            }`}
            description={`Create your ${
              userType === "company" ? "Company" : "Job-seeker"
            } account now to  get started.`}
          />

          <div className="w-full">
            <JPForm onSubmit={onSignupSubmit}>
              <div className="space-y-6">
                <JPInput
                  name="name"
                  label="Full Name"
                  placeholder="Enter your name"
                  type="text"
                />
                <JPInput
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                />

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

                <div className="flex items-center space-x-2">
                  <Checkbox
                    name="terms"
                    checked={termsChecked}
                    onChange={(e) => setTermsChecked(e.target.checked)}
                  >
                    I agree to the{" "}
                    <Link className="text-primary" href={"/terms"}>
                      T&C
                    </Link>
                    and
                    <Link className="text-primary" href={"/privacy"}>
                      Privacy Policy
                    </Link>
                  </Checkbox>
                </div>
                <div>
                  <PrimaryButton
                    isLoading={
                      isJobSeekerSignupLoading || isCompanySignupLoading
                    }
                    type="submit"
                    text="Sign up"
                    className="rounded-full h-11 mt-4"
                  />
                </div>
              </div>
            </JPForm>
            <AuthRedirect
              message="Already have an account?"
              linkText="Sign in now"
              href="/sign-in"
            />
          </div>
        </div>
      </div>
      <SignupVector />
    </div>
  );
};

export default SignUp;
