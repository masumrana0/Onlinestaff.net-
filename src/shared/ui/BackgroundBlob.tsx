import Image from "next/image";

const BackgroundBlob = () => {
  return (
    <>
      <div>
        <Image
          width={500}
          height={500}
          alt="sign in"
          src={"/shared/blob.svg"}
          className="block fixed rotate-12  opacity-10 animate-pulse   -right-44 -top-3 size-[1000px] -z-10"
        />
        <Image
          width={500}
          height={500}
          alt="blob"
          src={"/shared/blob.svg"}
          className="block fixed rotate-12 opacity-10 animate-pulse -left-44 -bottom-[500px] size-[1000px] -z-10"
        />
      </div>
    </>
  );
};

export default BackgroundBlob;
