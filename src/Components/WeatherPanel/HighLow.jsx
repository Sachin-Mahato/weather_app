import { useContext } from "react";
import weatherContext from "@/contexts/WeatherContext";
import { kelvinToCelsius } from "@/utils/utils";
const HighLow = () => {
  const data = useContext(weatherContext);
  const minTemperature =  data && data.main && data.main.temp_min; 
  const maxTemperature = data && data.main && data.main.temp_max;
  const maxTemp = kelvinToCelsius(maxTemperature)
  const minTemp = kelvinToCelsius(minTemperature);
  return (
    <div className="bg-[#26A69A3D] w-[99px] md:w-[177px] h-[60px] rounded-sm flex flex-col justify-center items-center gap-2 font-medium">
      <div className="text-sm">{maxTemp}&deg; / {minTemp}&deg;</div>
      <p className="capitalize text-[10px]">Hight/Low</p>
    </div>
  );
};

export default HighLow;
