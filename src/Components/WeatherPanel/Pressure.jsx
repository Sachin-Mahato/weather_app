import { useContext } from "react"
import weatherContext from "@/contexts/WeatherContext"

const Pressure = () => {
  const {data} = useContext(weatherContext);
  const pressure = data && data.main && data.main.pressure
  return (
    <div className="bg-[#26A69A3D] w-[99px] md:w-[177px] h-[60px] rounded-sm flex flex-col justify-center items-center gap-2 font-medium">
      <p className="text-sm">{pressure} mb</p>
      <p className="text-[10px]">Pressure</p>
    </div>
  )
}

export default Pressure