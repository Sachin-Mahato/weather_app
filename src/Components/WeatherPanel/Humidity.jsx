import { useContext } from "react";
import weatherContext from "@/contexts/WeatherContext";

const Humidity = () => {
  const {data} = useContext(weatherContext);
  const humidity = data && data.main && data.main.humidity

  return (
    <div className="bg-[#26A69A3D] w-[99px] md:w-[177px] h-[60px] rounded-sm flex flex-col justify-center items-center gap-2 font-medium">
      <p className="text-sm">{humidity}%</p>
      <p className="text-[10px]">Humidity</p>
    </div>
  )
}

export default Humidity;

