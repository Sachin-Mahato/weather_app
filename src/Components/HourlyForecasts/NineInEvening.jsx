import { useContext } from "react";
import weatherContext from "@/contexts/WeatherContext";
import halfMoonIcon from "../../assets/nightlight_black_24dp.svg";
import { kelvinToCelsius } from "@/utils/utils";
const NineInEvening = () => {
  const { daily } = useContext(weatherContext);
  const max = daily && daily.list && daily.list["1"]["main"]["temp_max"];
  const maxTemperature = kelvinToCelsius(max);

  return (
    <div className="  flex flex-col items-center justify-center gap-2">
      <p>12 AM</p>

      <div>
        <img src={halfMoonIcon} alt="half moon icon" className="w-6 h-6" />
      </div>

      <p>{maxTemperature}&deg;</p>
    </div>
  );
};

export default NineInEvening;
