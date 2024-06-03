import {
  HeroSection,
  HourlyForecasts,
  Navbar,
  Title,
  TodayForecasts,
} from "./Components/index";

function App() {
  return (
    <>
      <Navbar />
      <Title />
      <HeroSection />
      <TodayForecasts />
      <HourlyForecasts />
    </>
  );
}

export default App;
