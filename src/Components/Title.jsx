import weatherContext from "@/contexts/WeatherContext"
import { useContext } from "react"

export const Title = () => {
  const {location} = useContext(weatherContext)
  return (
    <div className="my-4 px-4 md:text-center">
    <h2 className="font-semibold capitalize">{location}</h2>
    </div>
  )
}
