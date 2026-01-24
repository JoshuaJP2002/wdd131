// Last modified date
document.getElementById("modified").textContent = document.lastModified;

// Wind chill calculation (simple example)
const temperature = 10;
const windSpeed = 5;

let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
  windChill = (
    13.12 +
    0.6215 * temperature -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temperature * Math.pow(windSpeed, 0.16)
  ).toFixed(1) + "°C";
}

document.getElementById("chill").textContent = windChill;
