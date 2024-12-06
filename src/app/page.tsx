// app/page.tsx
"use client";

import { useState, useTransition } from "react";
import { getWeather } from "@/app/action";
import Image from "next/image";

interface Weather {
  city: string;
  icon: string;
  description: string;
  temperature: number;
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
      <h1 className="text-2xl font-bold mb-4">Weather Forecast</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="border px-4 py-2 mr-2"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={isPending}>
          {isPending ? "Loading..." : "Get Weather"}
        </button>
      </form>
      {weather && (
        <div>
          <h2 className="text-xl font-semibold">{weather.city}</h2>
          <Image
            src={weather.icon}
            alt={weather.description}
            width={50}
            height={50}
          />
          <p>Temperature: {weather.temperature}°C</p>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Description: {weather.description}</p>
        </div>
      )}
    </div>
  );
}
