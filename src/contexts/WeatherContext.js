import { createContext } from "react";

export const weatherContext = createContext();

// export const WeatherContextProvider = ({children}) => {
//   const [input, setInput] = useState([]);

//   const addInputValue = (newValue) => {
//     setInput([...input, newValue]);
//   }
//   return (
//     <weatherContext.Provider
//     value={{inputValues, setInputValues, apiValues, addInputValue}}>
//       {children}
//     </weatherContext.Provider>
//   )
// }

// export const useWeatherContext = () => {
//   return useContext(weatherContext)
// }

export default weatherContext;