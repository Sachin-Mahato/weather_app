import Navbar from "./Components/Navbar";

const key = "15436894849d8fe950095f8174e8d043";
const location = "Dhanbad";
function App() {
  const endPoint = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=${5}&appid=${key}`;
  const getGeoLocation = async (url) => {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const {
          [1]: { lat, lon },
        } = await res.json();
        return { lat, lon };
      } else {
        throw new Error("Error in getting geolocation");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main className="bg-gray-700 text-white min-h-[100dvh] cursor-pointer">
      <Navbar />
      <button onClick={() => getGeoLocation(endPoint)}>Click me</button>
    </main>
  );
}

export default App;
