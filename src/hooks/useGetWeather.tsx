import { GetWeatherType } from "@/types/typeResponse";
import axios from "axios";
import { useQuery } from "react-query";

const headers = {
  "X-RapidAPI-Key": process.env.NEXT_PUBLIC_WEATHER_API_KEY,
  "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
};

export default function useGetWeather(location: string) {
  return useQuery({
    queryFn: async () => await axios.get<GetWeatherType>("https://weatherapi-com.p.rapidapi.com/current.json",
        { headers, params: { q: location || "Korea" } }
      ),
    queryKey: ["weather", location],
    enabled: location === "Korea",
    onError: (error) => console.log(error),
  });
}
