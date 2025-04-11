// app/actions.tsx
"use server";

type ActionResponseType =
  | {
      success: true;
      city: string;
      temperature: number;
      humidity: number;
      description: string;
    }
  | {
      success: false;
      errorMessage: string;
    };

export async function getWeather(
  previousState: unknown,
  formData: FormData
): Promise<ActionResponseType> {
  const city = formData.get("city") as string;
  const apiKey = process.env.OPENWEATHER_API_KEY;

  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ja`;

  const response = await fetch(endpoint);

  if (response.ok) {
    const data = await response.json();

    return {
      success: true,
      city: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      description: data.weather[0].description,
    };
  } else {
    return {
      success: false,
      errorMessage: `気象情報の取得に失敗しました (${response.status})`,
    };
  }
}
