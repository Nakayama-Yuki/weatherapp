// app/page.tsx
"use client";

import { useState, useTransition } from "react";
import { getWeather } from "@/app/actions";

interface Weather {
  city: string;
  humidity: number;
  temperature: number;
  description: string;
}

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<Weather | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      try {
        const data = await getWeather(city);
        setWeather(data);
      } catch {
        alert("Failed to fetch weather data");
        setWeather(null);
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">天気予報アプリ</h1>
      <p>都市名を入力すると、天気と気温、湿度を見られます。</p>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="都市名を入力"
          className="border px-4 py-2 mr-2"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={isPending}>
          {isPending ? "ロード中..." : "取得する"}
        </button>
      </form>
      {weather && (
        <div className="border rounded-lg p-4 shadow-sm max-w max-w-[200px] text-center">
          <h2 className="text-xl font-semibold">{weather.city}</h2>
          <p>天気: {weather.description}</p>
          <p>気温: {weather.temperature}°C</p>
          <p>湿度: {weather.humidity}%</p>
        </div>
      )}
    </div>
  );
}
