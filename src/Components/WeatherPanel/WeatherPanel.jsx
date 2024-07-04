import {
  HighLow,
  Humidity,
  Pressure,
  Visibility,
  Winds,
  UvIndex,
} from "./index";

const WeatherPanel = () => {
  return (
    <section className="grid grid-cols-3 grid-rows-2 gap-4 md:px-24 items-center justify-items-center mt-10 md:mt-16 ">
      <HighLow />
      <Humidity />
      <Pressure />
      <Visibility />
      <Winds />
      <UvIndex />
    </section>
  );
};

export default WeatherPanel;
