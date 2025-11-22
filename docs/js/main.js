// Static example values (adjust if you fetch live data)
const temperature = 8; // °C
const windSpeedKmh = 20; // km/h

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified || "N/A";

  document.getElementById("temp").textContent = temperature;
  document.getElementById("wind").textContent = windSpeedKmh;

  const windchill = computeWindChillIfApplicable(temperature, windSpeedKmh);
  document.getElementById("windchill").textContent = windchill;
});

// Wind chill formula for °C and km/h
function calculateWindChill(T, V){
  return Math.round(13.12 + 0.6215 * T - 11.37 * Math.pow(V, 0.16) + 0.3965 * T * Math.pow(V, 0.16));
}

function computeWindChillIfApplicable(T, V){
  const tempLimit = 10; // °C
  const windLimit = 4.8; // km/h
  if (T <= tempLimit && V > windLimit){
    return calculateWindChill(T, V) + " °C";
  }
  return "N/A";
}