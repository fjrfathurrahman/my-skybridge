import { z } from "zod";

export const WeatherSchema = z.object({
  location: z.string().min(1, 'City is required, example: London').max(225, 'City must be less than 225 characters').regex(/^[a-zA-Z\s]+$/, "City name must contain only letters and spaces"),
})

export type FormWeather = z.infer<typeof WeatherSchema>