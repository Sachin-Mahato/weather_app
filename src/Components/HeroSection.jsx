import { useContext } from "react";
import sunIcon from "../assets/wb_sunny_black_24dp.svg";
import { TodayForecasts } from "./index";
import weatherContext from "@/contexts/WeatherContext";
import { kelvinToCelsius } from "../utils/utils";

const HeroSection = () => {
  const { data } = useContext(weatherContext);
  const currentTemperature = data && data.main && data.main.temp;
  const maxTemperature = data && data.main && data.main.temp_max;
  const currTemp = kelvinToCelsius(currentTemperature);
  const maxTemp = kelvinToCelsius(maxTemperature);
  return (
    <section className="flex flex-col gap-8 px-4 md:flex-row md:justify-center md:gap-6 mt-10 md:mt-16">
      <div>
        <div className="flex items-stretch  justify-between gap-8">
          <div>
            <img src={sunIcon} alt="sun icon" className="w-96"/>
          </div>
          <div className="flex grow h-full w-full">
            <p className="text-8xl mt-2 md:text-8xl">{currTemp}&deg;</p>
            <p className="text-2xl ml-5" style={{ alignSelf: "flex-start" }}>
              {maxTemp}&deg;
            </p>
          </div>
        </div>
        <div className="mt-10">
          <p>Fair</p>
          <p className="text-[14px]">2% chance of rain through 9 PM</p>
        </div>
      </div>

      <TodayForecasts />
    </section>
  );
};

export default HeroSection;

// <div>

//   </div>
//   <div className="my-4">
//   </div>
// </div>
