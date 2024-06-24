import { useState } from "react";
import weatherContext from "./WeatherContext";

const WeatherContextProvider = ({ children }) => {
  const [location, setLocation] = useState("dhanbad");
  const [data, setData] = useState({});

  const handleClick = async (fn) => {
    try {
      const result = await fn;
      setData(result) 
    } catch (error) {
      console.log("error in handleClick", error);
    }
  };

  const handleOnChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <weatherContext.Provider
      value={{ location, handleOnChange, data, handleClick }}
    >
      {children}
    </weatherContext.Provider>
  );
};




export default WeatherContextProvider;
