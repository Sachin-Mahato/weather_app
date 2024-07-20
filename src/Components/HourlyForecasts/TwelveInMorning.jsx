
import { useContext } from "react";
import weatherContext from "@/contexts/WeatherContext";
import { kelvinToCelsius } from "@/utils/utils";
import sunIcon from "../../assets/wb_sunny_black_24dp.svg"

const TwelveInMorning = () => {
  const { daily } = useContext(weatherContext);
  const max = daily && daily.list && daily.list["1"]["main"]["temp_max"];
  const maxTemperature = kelvinToCelsius(max);

  return (
    <div className="  flex flex-col items-center gap-2 justify-center">
      <p>12 PM</p>

      <div>
        <img src={sunIcon} alt="sun icon" className="w-6 h-6" />
      </div>
      <p>{maxTemperature}&deg;</p>
    </div>
  );
};

export default TwelveInMorning;
