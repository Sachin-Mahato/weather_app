import { useState } from "react"
import { getGeoLocation } from "../utils/weather";

export const Search = () => {
  const [location, setLocation] = useState('');

  return (
    <>
      <div> <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
        <button onClick={() => getGeoLocation(location)}>Click Me</button>
      </div>
    </>
  )
}
