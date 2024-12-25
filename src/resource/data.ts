import { IconType } from "react-icons";
import { IconSunny, IconWind, IconGithub, IconInstagram, IconLinkedin, IconMusicNotes, IconNewspaper, IconTiktok, IconWeatherCloundy, IconSpeedometer, IconWeatherPercent} from "./icons";
import { currentWeather } from "@/types/typeResponse";

const LinksApi: { name: string; url: string; icon: IconType }[] = [
  {
    name: "Weather",
    url: "/weather",
    icon: IconWeatherCloundy,
  },
  {
    name: "News",
    url: "/news",
    icon: IconNewspaper,
  },
  {
    name: "songs",
    url: "songs",
    icon: IconMusicNotes,
  },
];

const LinkConnect: { name: string; url: string; icon: IconType }[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/fjrfthrrhmnz/",
    icon: IconInstagram,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: IconLinkedin,
  },
  {
    name: "Github",
    url: "https://github.com/",
    icon: IconGithub,
  },
  {
    name: "Tiktok",
    url: "https://www.tiktok.com/",
    icon: IconTiktok,
  },
];

export const weatherDetails = [
  {
    label: "Wind Speed",
    value: (value: currentWeather) => `${value.wind_kph} km/h`,
    icon: IconWind
  },
  {
    label: "UV Index",
    value: (value: currentWeather) => `${value.uv} UV Index`,
    icon: IconSunny,
  },
  {
    label: "Humidity",
    value: (value: currentWeather) => `${value.humidity} %`,
    icon: IconWeatherPercent,
  },
  {
    label: "Pressure",
    value: (value: currentWeather) => `${value.pressure_mb} mb`,
    icon: IconSpeedometer,
  }
]


export { LinksApi, LinkConnect };