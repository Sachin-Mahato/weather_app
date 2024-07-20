import { useContext } from "react";
import weatherContext from "@/contexts/WeatherContext";
import eveningSunIcon from "../../assets/nights_stay_black_24dp.svg";
import { kelvinToCelsius } from "@/utils/utils";

const SixInEvening = () => {
  const { daily } = useContext(weatherContext);
  const max = daily && daily.list && daily.list["1"]["main"]["temp_max"];
  const maxTemperature = kelvinToCelsius(max);

  return (
    <div className="  flex flex-col items-center justify-center gap-2">
      <p>6 PM</p>
      <div>
        <img src={eveningSunIcon} alt="evening sun icon" className="w-6 h-6" />
      </div>
      <p>{maxTemperature}&deg;</p>
    </div>
  );
};

export default SixInEvening;
