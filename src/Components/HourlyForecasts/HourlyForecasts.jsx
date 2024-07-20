// import sunIcon from "../assets/wb_sunny_black_24dp.svg";
import NineInMorning from "./NineInMorning";
import SixInEvening from "./SixInEvening";
import TwelveInMorning from "./TwelveInMorning";
import NineInEvening from "./NineInEvening";

const HourlyForecasts = () => {
  return (
    <section className="px-4 mt-10 md:mt-16 md:mb-48">
      <div>
        <div>
          <h2 className="font-semibold ">Hourly Forecasts of Dhanbad</h2>
        </div>
        <div className="flex justify-between mt-4  md:justify-center md:gap-16">
          <NineInMorning />
          <TwelveInMorning />
          <SixInEvening />
          <NineInEvening />
        </div>
      </div>
    </section>
  );
};

export default HourlyForecasts;
