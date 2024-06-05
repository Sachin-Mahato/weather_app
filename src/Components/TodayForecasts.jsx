import sunIcon from "../assets/wb_sunny_black_24dp.svg";
import eveningSunIcon from "../assets/nights_stay_black_24dp.svg";
import halfMoonIcon from "../assets/nightlight_black_24dp.svg";

export const TodayForecasts = () => {
  return (
    <section className="flex flex-col ">
      <div>
        <h2 className="font-semibold">Today forecasts of rain through 9 PM</h2>
      </div>
      <div className="flex justify-between text-xs mt-4 ">
        <div>
          <div className="  flex flex-col items-center gap-2 justify-center ">
            <p>Morning</p>
            <div>
              <img src={sunIcon} alt="sun icon" className="w-6 h-6" />
            </div>
            <p>31&deg;</p>
          </div>
        </div>
        <div className="   flex flex-col items-center gap-2 justify-center">
          <p>Afternoon</p>
          <div>
            <img src={sunIcon} alt={sunIcon} className="w-6 h-6" />
          </div>
          <p>34&deg;</p>
        </div>
        <div className="   flex flex-col items-center gap-2 justify-center">
          <p>Evening</p>
          <div>
            <img
              src={eveningSunIcon}
              alt="evening sun icon"
              className="w-6 h-6"
            />
          </div>
          <p>30&deg;</p>
        </div>
        <div className="   flex flex-col items-center gap-2 justify-center">
          <p>Overnight</p>
          <div>
            <img src={halfMoonIcon} alt="half moon icon" className="w-6 h-6" />
          </div>
          <p>28&deg;</p>
        </div>
      </div>
    </section>
  );
};
