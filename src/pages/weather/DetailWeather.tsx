import { Box } from "@/components/layouts/Box";
import { weatherDetails } from "@/resource/data";
import { currentWeather, GetWeatherType } from "@/types/typeResponse";
import { Image } from "@nextui-org/react";
import { getImageWeather } from "@/lib/getImageWeather";
import moment from "moment";

export default function DetailWeather({ current, location }: GetWeatherType): JSX.Element | undefined {
  const image = getImageWeather(current?.condition?.code as number);

  return (
    <Box className="bg-gradient-to-bl from-cyan-500 to-blue-500 text-white p-4 my-4 sm:p-6 sm:my-6 md:p-8 md:my-8 rounded-3xl flex flex-col sm:flex-row gap-4">
      
      <div>
        <div>
          <small className="tracking-widest">{current?.condition?.text}</small>

          <h3 className="line-clamp-2 mt-2.5">{location?.name} - {location?.country}</h3>
          <small>
            {moment(location?.localtime).format("dddd, D MMMM YYYY")} | Update{" "}
            {moment(current?.last_updated).format("h:mm A")}
          </small>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          {weatherDetails.map((detail, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="bg-white text-primary p-1.5 rounded-xl w-max">
                <detail.icon size={22}/>
              </div>
              <p>{detail.value(current as currentWeather)}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col items-center w-full sm:w-1/2">
        <Image src={image} alt="icon" loading="lazy" className="cursor-pointer h-48 md:h-56 hover:scale-110 duration-100 hover:rotate-2" />
        <h5>{current?.temp_c}<sup>o</sup>C - {current?.temp_f}<sup>o</sup>C</h5>
      </div>

    </Box>
  );
}

