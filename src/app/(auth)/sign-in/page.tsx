"use client";

import Link from "next/link";
import JPForm from "@/shared/form/JPForm";
import JPInput from "@/shared/form/JPInput";
import { useState } from "react";
import SigninVector from "./_components/SigninVector";
import { Eye, EyeClosed } from "lucide-react";
import Checkbox from "@/shared/form-fields/Checkbox";
import PrimaryButton from "@/shared/ui/PrimaryButton";
import { toast } from "@/hooks/use-toast";
import { useSigninMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hook";
import verifyToken from "@/helper/auth/VerifyToken";
import { setUser } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { UserTypeModal } from "../sign-up/modal/IsCompanyOrJobseekerModal";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [SigninAsUser, { isLoading: isSigninAsUserLoading }] =
    useSigninMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSignSubmit = async (data: any) => {
    if (!termsChecked) {
      toast({
        title: "You must agree to the terms and conditions to sign up.",
        duration: 2000,
      });
      return;
    }

    try {
      const response: any = await SigninAsUser(data);
      console.log(response);
      if (response.data.success) {
        const { accessToken } = response.data.data;
        const decodedUser = verifyToken(accessToken);
        // Set {user:"",token:""} in local state
        dispatch(setUser({ user: decodedUser, token: accessToken }));
        router.push("/");
        toast({ title: "Successfully signed in", duration: 2000 });
      }
    } catch (error: any) {
      toast({
        title: error?.messaage || "Something went wrong",
        duration: 2000,
      });
    }
  };

  // USER TYPE MODAL
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="mt-11 md:mt-0 lg:flex justify-center h-screen items-center gap-6 overflow-hidden">
      <SigninVector />
      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <div className="mb-6 space-y-1">
            <h1 className="text-4xl font-bold text-gray-700 pb-1">
              Welcome back
            </h1>
            <p className="text-gray-500 text-lg">
              Sign in to your account to access job opportunities
            </p>
          </div>
          <div className="w-full">
            <JPForm onSubmit={onSignSubmit}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <JPInput
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <JPInput
                      name="password"
                      label="Password"
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? (
                        <Eye className="text-gray-500" size={18} />
                      ) : (
                        <EyeClosed className="text-gray-500" size={18} />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Link
                    href="/reset-password"
                    className="text-primary hover:underline"
                  >
                    Forgot password
                  </Link>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      name="terms"
                      checked={termsChecked}
                      onChange={(e) => setTermsChecked(e.target.checked)}
                    >
                      I agree to the{" "}
                      <Link className="text-primary" href={"/terms"}>
                        T&C{" "}
                      </Link>{" "}
                      and{" "}
                      <Link className="text-primary" href={"/privacy"}>
                        Privacy Policy
                      </Link>
                    </Checkbox>
                  </div>
                </div>

                <div>
                  <PrimaryButton
                    isLoading={isSigninAsUserLoading}
                    type="submit"
                    text="Sign in"
                    className="rounded-full h-11 mt-4"
                  />
                </div>
              </div>
            </JPForm>
            <button
              className="mt-4 text-center text-sm text-gray-500 w-full"
              onClick={() => setModalOpen(true)}
            >
              Do not have account?{" "}
              <span className="text-blue-600 hover:underline">Sign up now</span>
            </button>
          </div>
        </div>
      </div>

      {/* USER Type modal (jobseeker or company) */}
      <UserTypeModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
};

export default SignIn;
