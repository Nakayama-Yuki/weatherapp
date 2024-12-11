// app/actions/getWeather.ts
"use server";

interface Weather {
  city: string;
  humidity: number;
  temperature: number;
  description: string;
}

export async function getWeather(previousState: unknown, formData: FormData) {
  const city = formData.get("city") as string;
  const apiKey = process.env.OPENWEATHER_API_KEY;

  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ja`;

  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error("気象情報の取得に失敗しました");
  }

  const data = await response.json();

  // 戻り値がWeather型に合致することを保証
  const weather: Weather = {
    city: data.name,
    temperature: data.main.temp,
    humidity: data.main.humidity,
    description: data.weather[0].description,
  };

  return weather;
}
