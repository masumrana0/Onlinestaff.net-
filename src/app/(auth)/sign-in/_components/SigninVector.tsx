import Image from "next/image";

const SigninVector = () => {
  return (
    <>
      <div>
        <Image
          width={500}
          height={500}
          alt="sign in"
          src={"/auth/signin.svg"}
          className="hidden lg:block"
        />
      </div>
      <div>
        <Image
          width={500}
          height={500}
          alt="sign in"
          src={"/shared/blob.svg"}
          className="block fixed  rotate-12 -right-44 -top-3 size-[1000px] -z-10"
        />
      </div>
    </>
  );
};

export default SigninVector;
