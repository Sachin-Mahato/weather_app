import sunIcon from "../assets/wb_sunny_black_24dp.svg";
import eveningSunIcon from "../assets/nights_stay_black_24dp.svg";
import halfMoonIcon from "../assets/nightlight_black_24dp.svg";

export const HourlyForecasts = () => {
  return (
    <section className="px-4 mt-4">
      <div>
        <div>
          <h2 className="font-semibold md:text-center">
            Hourly Forecasts of Dhanbad
          </h2>
        </div>
        <div className="flex justify-between mt-4  md:justify-center md:gap-16">
          <div className=" flex flex-col items-center gap-2 justify-center">
            <p>9 AM</p>
            <div>
              <img src={sunIcon} alt="sun icon" className="w-6 h-6" />
            </div>
            <p>31&deg;</p>
          </div>
          <div className="  flex flex-col items-center gap-2 justify-center">
            <p>12 PM</p>

            <div>
              <img src={sunIcon} alt="sun icon" className="w-6 h-6" />
            </div>
            <p>34&deg;</p>
          </div>
          <div className="  flex flex-col items-center justify-center gap-2">
            <p>6 PM</p>

            <div>
              <img
                src={eveningSunIcon}
                alt="evening sun icon"
                className="w-6 h-6"
              />
            </div>
            <p>30&deg;</p>
          </div>
          <div className="  flex flex-col items-center justify-center gap-2">
            <p>12 AM</p>

            <div>
              <img
                src={halfMoonIcon}
                alt="half moon icon"
                className="w-6 h-6"
              />
            </div>

            <p>28&deg;</p>
          </div>
        </div>
      </div>
    </section>
  );
};
