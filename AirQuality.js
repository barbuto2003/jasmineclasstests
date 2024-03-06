// Compute air quality given the index

var index = 156;

var air_quality;

if (index >=50) {
    air_quality = `Good`;
} else if (index >=100) {
    air_quality = `Moderate`;
} else if (index >= 150) {
    air_quality = `Unhealthy to Sensitive Groups`;
} else if (index >= 200) {
    air_quality = `Unhealthy`;
} else if (index >= 200) {
    air_quality = `Very Unhealthy`;
} else if (index >= 300) {
    air_quality = `Hazardous`
}
console.log (
    `If the air index is ${index}, the air quality is ${air_quality}`
);