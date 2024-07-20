import { useContext } from "react";
import { kelvinToCelsius } from "@/utils/utils";
import weatherContext from "@/contexts/WeatherContext";
import halfMoonIcon from "../../assets/nightlight_black_24dp.svg"

const OvernightForecasts = () => {
  const {daily} = useContext(weatherContext);
  const max = daily && daily.list && daily.list["5"]["main"]["temp_max"];
  const maxTemperature = kelvinToCelsius(max);
  return (
    <div className="   flex flex-col items-center gap-2 justify-center">
      <p>Overnight</p>
      <div>
        <img src={halfMoonIcon} alt="half moon icon" className="w-6 h-6" />
      </div>
      <p>{maxTemperature}&deg;</p>
    </div>
  );
};
export default OvernightForecasts;
