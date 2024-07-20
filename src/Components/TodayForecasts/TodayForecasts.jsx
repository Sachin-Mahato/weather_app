import AfternoonForecasts from "./AfternoonForecasts";
import EveningForecasts from "./EveningForecasts";
import MorningForecasts from "./MorningForecasts";
import OvernightForecasts from "./OvernightForecasts";

const TodayForecasts = () => {
  return (
    <section className="flex flex-col ">
      <div>
        <h2 className="font-semibold">Today forecasts of rain through 9 PM</h2>
      </div>
      <div className="flex justify-between text-xs mt-4 ">
        <MorningForecasts />
        <AfternoonForecasts />
        <EveningForecasts />
        <OvernightForecasts />
      </div>
    </section>
  );
};

export default TodayForecasts;
