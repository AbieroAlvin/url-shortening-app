const Card = ({ image, heading, text }) => {
  return (
    <div className="bg-white shadow-lg rounded-md px-6  font-primary">
      {/* image */}
      <div className="w-[72px] h-[72px] rounded-full relative bg-DarkViolet p-3 flex items-center justify-center top-[-2.5rem] md:right-0 right-[-40%] md:mt-0 mt-5">
        <img src={image} alt={heading} />
      </div>

      <div className="flex flex-col gap-3 pb-4 md:text-left text-center">
        <h3 className="font-semibold text-[18px] text-VeryDarkViolet">
          {heading}
        </h3>
        <p className="text-[14px] text-GrayishViolet">{text}</p>
      </div>
    </div>
  );
};

export default Card;
