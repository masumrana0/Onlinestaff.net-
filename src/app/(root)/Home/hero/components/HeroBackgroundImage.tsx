/* eslint-disable @next/next/no-img-element */
const HeroBackgroundImage = () => {
  return (
    <>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/home/heroBg.svg"
          alt="Hero Background"
          className="w-full h-full object-top md:object-cover"
        />
      </div>
    </>
  );
};

export default HeroBackgroundImage;
