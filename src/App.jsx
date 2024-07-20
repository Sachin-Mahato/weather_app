import {
  HeroSection,
  HourlyForecasts,
  Navbar,
  Title,
  WeatherPanel,
} from "./Components/index";
import WeatherContextProvider from "./contexts/WeatherContextProvider";

function App() {
  return (
    <WeatherContextProvider>
      <Navbar />
      <div className="md:flex md:flex-col md:items-center">
        <Title />
        <HeroSection />
        <WeatherPanel />
        <HourlyForecasts />
      </div>
    </WeatherContextProvider>
  );
}

export default App;
