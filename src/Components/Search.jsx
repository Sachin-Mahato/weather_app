import { useContext} from "react";
import { getGeoLocation } from "../service/weather";
import { Input } from "@/components/ui/input";
import weatherContext from "@/contexts/WeatherContext";

export const Search = () => {
  const {location,handleOnChange, handleClick} = useContext(weatherContext)


  return (
    <>
      <div className="flex items-center gap-1">
        <div>
          <Input
            onChange={handleOnChange}
          />
        </div>
        <button
          onClick={ async() => {
            await handleClick(getGeoLocation(location))
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </>
  );
};
