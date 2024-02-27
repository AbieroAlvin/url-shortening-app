import AdvancedData from "../data/data";
import Card from "./Card";

const AdvancedStats = () => {
  return (
    <div className="md:mt-24 flex items-center justify-center flex-col font-primary md:py-24 py-12 w-full bg-Gray">
      {/* details intro */}
      <div className="text-center p-8 flex flex-col items-center justify-center">
        <h1 className="md:text-4xl text-2xl font-bold mb-2 text-VeryDarkViolet">
          Advanced Statistics
        </h1>
        <p className="md:w-3/4 text-GrayishViolet">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      {/* cards */}
      <div className="flex md:flex-row flex-col gap-8 max-w-[1120px] md:my-24 my-12 md:px-8 px-8 z-20">
        <div>
          <Card
            heading={AdvancedData[0].heading}
            text={AdvancedData[0].text}
            image={AdvancedData[0].image}
          />
        </div>
        <div className="relative top-[2rem]">
          <Card
            heading={AdvancedData[1].heading}
            text={AdvancedData[1].text}
            image={AdvancedData[1].image}
          />
        </div>
        <div className="relative top-[4rem]">
          <Card
            heading={AdvancedData[2].heading}
            text={AdvancedData[2].text}
            image={AdvancedData[2].image}
          />
        </div>
      </div>
      {/* The line */}
      <div className="w-full px-8 z-10 max-w-[1120px]">
        <div className="bg-Cyan h-[8px] relative top-[-12rem] md:flex hidden"></div>
      </div>
    </div>
  );
};

export default AdvancedStats;
