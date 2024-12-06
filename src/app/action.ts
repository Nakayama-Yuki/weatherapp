// app/actions/getWeather.ts
"use server";

export async function getWeather(city: string) {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&appid=${apiKey}&units=metric`;

  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  const data = await response.json();

  return {
    city: data.name,
    temperature: data.main.temp,
    description: data.weather[0].description,
    icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
  };
}
