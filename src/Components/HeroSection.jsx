import { useContext } from "react";
import sunIcon from "../assets/wb_sunny_black_24dp.svg";
import { TodayForecasts } from "./index";
import weatherContext from "@/contexts/WeatherContext";
import { kelvinToCelsius } from "../utils/utils"

const HeroSection = () => {
  const { data } = useContext(weatherContext);
  const temperature = data && data.main && data.main.temp;
  const minTemperature = data && data.main && data.main.min_temp;
  const temp = kelvinToCelsius(temperature);
  const minTemp = kelvinToCelsius(minTemperature)
  return (
    <section className="flex flex-col gap-1 px-4 md:flex-row md:justify-center">
      <div>
        <div className="flex items-center  gap-16">
          <div>
            <img src={sunIcon} alt="sun icon" className="w-24 h-24 " />
          </div>
          <div className="flex gap-6">
            <p className="text-5xl">{temp}&deg;</p>
            <p className="text-[1rem]">{minTemp}&deg;</p>
          </div>
        </div>
        <div className="my-4">
          <p>Fair</p>
          <p>2% chance of rain through 9 PM</p>
        </div>
      </div>
      <TodayForecasts />
    </section>
  );
};

export default HeroSection;
