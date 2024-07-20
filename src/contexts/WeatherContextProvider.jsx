import { useState } from "react";
import weatherContext from "./WeatherContext";

const WeatherContextProvider = ({ children }) => {
  const [location, setLocation] = useState("dhanbad");
  const [data, setData] = useState({});
  const [daily, setDaily] = useState({})

  const handleClick = async (fn, fun) => {
    try {
      const result = await fn;
      const resultOne = await fun;
      setData(result);
      setDaily(resultOne);
    } catch (error) {
      console.log("error in handleClick", error);
    }
  };

  const handleOnChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <weatherContext.Provider
      value={{ location, handleOnChange, data, handleClick, daily }}
    >
      {children}
    </weatherContext.Provider>
  );
};




export default WeatherContextProvider;
