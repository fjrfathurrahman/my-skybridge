import cloudy from "@/assets/weather/cloudy.webp";
import drizzle from "@/assets/weather/drizzle .webp";
import rain from "@/assets/weather/rain.webp";
import snow from "@/assets/weather/snow.webp";
import sunny from "@/assets/weather/suny.webp";
import thunderstorm from "@/assets/weather/thunderstorm.webp";

const weatherCategories = {
  sunny: [1000],
  cloudy: [1003, 1006, 1009, 1030, 1135],
  rain: [
    1063, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246,
    1273, 1276,
  ],
  snow: [
    1066, 1114, 1117, 1204, 1210, 1213, 1216, 1222, 1225, 1255, 1258, 1279,
    1282, 1237, 1261, 1264, 1069, 1207, 1249, 1252,
  ],
  thunderstorm: [1087, 1273, 1276],
  drizzle: [1072, 1168, 1171, 1198, 1201],
};

export function getImageWeather(code: number): string {
  let category = "unknown";

  for (const [item, codes] of Object.entries(weatherCategories)) {
    if (codes.includes(code)) {
      category = item;
    }
  }

  const imageUrls: { [key: string]: string } = {
    sunny: sunny.src,
    cloudy: cloudy.src,
    rain: rain.src,
    snow: snow.src,
    thunderstorm: thunderstorm.src,
    drizzle: drizzle.src,
    unknown: "/images/default.png",
  };


  return imageUrls[category] || imageUrls["unknown"];
}
