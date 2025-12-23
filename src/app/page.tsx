// app/page.tsx
"use client";

import { useActionState } from "react";
import { getWeather } from "@/app/actions";

export default function WeatherApp() {
  const [weather, action, isPending] = useActionState(getWeather, undefined);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">天気予報アプリ</h1>
      <p>都市名を入力すると、天気と気温、湿度を見られます。</p>
      <form action={action} className="mb-4">
        <input
          type="text"
          name="city"
          placeholder="都市名を入力"
          className="border px-4 py-2 mr-2"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-sm"
          disabled={isPending}>
          {isPending ? "ロード中..." : "取得する"}
        </button>
      </form>
      {weather?.success && (
        <div className="border rounded-lg p-4 shadow-xs max-w-50 text-center">
          <h2 className="text-xl font-semibold">{weather.city}</h2>
          <p>天気: {weather.description}</p>
          <p>気温: {weather.temperature}°C</p>
          <p>湿度: {weather.humidity}%</p>
        </div>
      )}
      {weather?.success === false && (
        <div className="text-red-500 mt-4">{weather.errorMessage}</div>
      )}
    </div>
  );
}
