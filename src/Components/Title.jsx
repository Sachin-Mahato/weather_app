import weatherContext from "@/contexts/WeatherContext"
import { useContext } from "react"

export const Title = () => {
  const {location} = useContext(weatherContext)
  return (
    <div className="mt-4 mb-4 px-[8%] md:mt-16 md:mb-16">
    <h2 className="font-thin text-2xl md:text-6xl capitalize md:text-left">{location}</h2>
    </div>
  )
}


