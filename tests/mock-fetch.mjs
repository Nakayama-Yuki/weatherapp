import { setTimeout } from "node:timers/promises";

const originalFetch = globalThis.fetch;
globalThis.fetch = async (input, init) => {
  const url = new URL(typeof input === "string" || input instanceof URL ? input : input.url);
  if (url.hostname !== "api.openweathermap.org") return originalFetch(input, init);
  if (url.pathname !== "/data/2.5/weather") throw new Error(`Unexpected test API request: ${url}`);
  // ローディング表示も再現可能な応答時間で検証する。
  await setTimeout(250);
  if (url.searchParams.get("q") !== "Tokyo") {
    return Response.json({ cod: "404", message: "city not found" }, { status: 404 });
  }
  return Response.json({
    name: "Tokyo",
    main: { temp: 22, humidity: 60 },
    weather: [{ description: "晴れ" }],
  });
};
