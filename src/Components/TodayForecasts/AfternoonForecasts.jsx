import { useContext } from "react";
import { kelvinToCelsius } from "@/utils/utils";
import weatherContext from "@/contexts/WeatherContext";
import eveningSunIcon from "../../assets/nights_stay_black_24dp.svg";

const AfternoonForecasts = () => {
  const { daily } = useContext(weatherContext);
  const max = daily && daily.list && daily.list["4"]["main"]["temp_max"];
  const maxTemperature = kelvinToCelsius(max);

  return (
    <div className="   flex flex-col items-center gap-2 justify-center">
      <p>Afternoon</p>
      <div>
        <img src={eveningSunIcon} alt="evening sun icon" className="w-6 h-6" />
      </div>
      <p>{maxTemperature}&deg;</p>
    </div>
  );
};

export default AfternoonForecasts;
