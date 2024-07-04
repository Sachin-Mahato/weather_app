import { useContext } from "react";
import weatherContext from "@/contexts/WeatherContext";
import { meterToKilometer } from "@/utils/utils";

const Visibility = () => {
  const {data} = useContext(weatherContext);
  const visibility = data && data.visibility;
  const visi = meterToKilometer(visibility);
  return (
    <div className="bg-[#26A69A3D] w-[99px] md:w-[177px] h-[60px] rounded-sm flex flex-col justify-center items-center gap-2 font-medium">
      <p className="text-sm">{visi} km</p>
      <p className="text-[10px]">Visibility</p>
    </div>
  )
}

export default Visibility;