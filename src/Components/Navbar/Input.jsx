import { useContext } from "react";
import weatherContext from "../../contexts/WeatherContext";
const Input = () => {
  const { handleOnChange } = useContext(weatherContext);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your city name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Input;
