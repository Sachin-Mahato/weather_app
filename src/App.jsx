import {
  HeroSection,
  HourlyForecasts,
  Navbar,
  Title,
} from "./Components/index";
import WeatherContextProvider from "./contexts/WeatherContextProvider";

function App() {
  return (
    <WeatherContextProvider>
      <Navbar />
      <Title />
      <HeroSection />
      <HourlyForecasts />
    </WeatherContextProvider>
  );
}



export default App;
