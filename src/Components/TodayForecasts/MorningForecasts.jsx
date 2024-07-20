import { useContext } from "react";
import weatherContext from "@/contexts/WeatherContext";
import sunIcon from "../../assets/wb_sunny_black_24dp.svg";
import { kelvinToCelsius } from "@/utils/utils";

const MorningForecasts = () => {
  const {daily} = useContext(weatherContext);
  const max = daily && daily.list && daily.list["0"]["main"]["temp_max"];
  const maxTemperature = kelvinToCelsius(max);
  console.log(max)
  return (
    <div>
      <div className="  flex flex-col items-center gap-2 justify-center ">
        <p>Morning</p>
        <div>
          <img src={sunIcon} alt="sun icon" className="w-6 h-6" />
        </div>
        <p>{maxTemperature}&deg;</p>
      </div>
    </div>
  );
};

export default MorningForecasts;
