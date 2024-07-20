import { useContext } from "react"
import weatherContext from "@/contexts/WeatherContext"
import { meterToKilometerHour } from "@/utils/utils"

const Winds = () => {
  const {data} = useContext(weatherContext);
  const wind = data && data.wind && data.wind.speed;
  const kilometerHours = meterToKilometerHour(wind);
  return (
    <div className="bg-[#26A69A3D] w-[99px] md:w-[177px] h-[60px] rounded-sm flex flex-col justify-center items-center gap-2 font-medium">
      <p className="text-sm">{kilometerHours} km/h</p>
      <p className="text-[10px]">Wind</p>
    </div>
  )
}

export default Winds