// Datos estáticos según requisitos (ajusta si quieres otros valores)
const temperature = 8; // en °C (usa °F si tu local usa imperial)
const windSpeedKmh = 20; // km/h

// Mostrar año y última modificación
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified || "N/A";

  // Poblar valores visibles
  document.getElementById("temp").textContent = temperature;
  document.getElementById("wind").textContent = windSpeedKmh;

  // Calcular windchill solo si aplica
  const windchill = computeWindChillIfApplicable(temperature, windSpeedKmh);
  document.getElementById("windchill").textContent = windchill;
});

/*
  calculateWindChill debe devolver el valor calculado en una sola línea
  fórmula para Celsius (US formula adaptada para km/h):
  w = 13.12 + 0.6215*T - 11.37*(V^0.16) + 0.3965*T*(V^0.16)
  donde V es en km/h y T en °C
*/
function calculateWindChill(T, V){
  return Math.round(13.12 + 0.6215 * T - 11.37 * Math.pow(V, 0.16) + 0.3965 * T * Math.pow(V, 0.16));
}

// Comprueba las condiciones de aplicabilidad y devuelve valor o "N/A"
function computeWindChillIfApplicable(T, V){
  const tempLimit = 10; // °C
  const windLimit = 4.8; // km/h
  if (T <= tempLimit && V > windLimit){
    return calculateWindChill(T, V) + " °C";
  }
  return "N/A";
}