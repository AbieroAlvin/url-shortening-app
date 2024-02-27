import illustration from "../assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <div className="">
      <div className="flex md:flex-row flex-col-reverse items-center justify-between max-w-[1120px] font-primary  md:px-0 px-4 md:py-20 py-12">
        {/* details */}
        <div className="md:w-1/2 flex flex-col gap-5 md:items-start items-center justify-center md:justify-center md:pl-4">
          <h1 className="md:text-5xl text-3xl font-bold md:leading-[3.5rem] md:tracking-wider md:text-left text-center text-VeryDarkViolet">
            More than just shorter links
          </h1>
          <p className="md:text-left text-center text-GrayishViolet">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="px-5 py-2 rounded-full bg-Cyan text-white font-medium">
            Get Started
          </button>
        </div>
        {/* image */}
        <div className="relative md:right-[-6rem] my-8 md:my-0">
          <img src={illustration} alt="Illustration Working" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
