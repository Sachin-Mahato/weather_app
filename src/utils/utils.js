function kelvinToCelsius(Kal = 300) {
  const Celsius = 273.15;
  return (Kal - Celsius).toFixed(0);
}

function meterToKilometer(meter = 100) {
  return (meter / 1000).toFixed(2);
}

function meterToKilometerHour(meter=100) {
  return Math.floor(meter * 3.6);
}

export { kelvinToCelsius, meterToKilometer, meterToKilometerHour };
