import { useContext } from "react";
import { kelvinToCelsius } from "@/utils/utils";
import weatherContext from "@/contexts/WeatherContext";
import eveningSunIcon from "../../assets/nights_stay_black_24dp.svg";

const EveningForecasts = () => {
  const {daily} = useContext(weatherContext)
  const max = daily && daily.list && daily.list["4"]
  return (
    <div className="   flex flex-col items-center gap-2 justify-center">
      <p>Evening</p>
      <div>
        <img src={eveningSunIcon} alt="evening sun icon" className="w-6 h-6" />
      </div>
      <p>30&deg;</p>
    </div>
  );
};

export default EveningForecasts;
