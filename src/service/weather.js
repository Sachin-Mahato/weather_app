import conf from "../conf/conf"

const getGeoLocation = async (location) => {
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=${5}&appid=${conf.key}`;
  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      const { lat, lon } = await data[1];
      return getCurrentWeather(lat, lon);
    } else {
      throw new Error("Error in getting geolocation");
    }
  } catch (e) {
    console.log(e);
  }
};




const getCurrentWeather = async (lat, lon) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${conf.key}`;
  try {
    const res = await fetch(URL);
    if (res.ok) {
      const data = await res.json();
      console.log(data)
      return data;
    } else {
      throw new Error("Error in getting current weather");
    }
  } catch (error) {
    console.log("error in current weather", error);
  }
};

const weatherFor = async (lat, lon) => {
  const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${conf.key}`
  try {
    const res = await fetch(URL);
    if (res.ok) {
      const data = await res.json();
      console.log(data)
      return data;
    }
  } catch (error) {
    console.log("error in weatherFor function", error)
  }
}



export { getGeoLocation, getCurrentWeather, weatherFor };
