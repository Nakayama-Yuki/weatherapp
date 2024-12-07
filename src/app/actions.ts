// app/actions/getWeather.ts
"use server";

export async function getWeather(city: string) {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&appid=${apiKey}&units=metric&lang=ja`;
  //lang=jaで日本語に設定

  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error("気象情報の取得に失敗しました");
  }

  const data = await response.json();

  return {
    city: data.name,
    temperature: data.main.temp,
    humidity: data.main.humidity,
    description: data.weather[0].description,
  };
}
