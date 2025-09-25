import Image from "next/image";

const SignupVector = () => {
  return (
    <>
      <div>
        <Image
          width={600}
          height={600}
          alt="sign up"
          src={"/auth/signup.svg"}
          className="md:block hidden"
        />
      </div>

      <div>
        <Image
          width={800}
          height={800}
          alt="sign in"
          src={"/shared/blob.svg"}
          className="block fixed  inset-0 top-1 rotate-12 -left-44  size-[1000px] -z-10"
        />
      </div>
    </>
  );
};

export default SignupVector;
