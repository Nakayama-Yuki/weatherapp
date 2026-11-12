# 天気予報アプリ

都市名から現在の天気・気温・湿度を表示するアプリです。Next.js App Router、React、TypeScript、Tailwind CSS v4 を使用し、Server Actions から OpenWeatherMap API を呼び出します。ひな型は GitHub Copilot を使用して作成しました。

## セットアップ

Node.js LTS と pnpm を用意します。依存バージョンは [package.json](package.json) を参照してください。

```bash
git clone https://github.com/Nakayama-Yuki/weatherapp.git
cd weatherapp
pnpm install
```

プロジェクト直下に `.env.local` を作成します。

```dotenv
OPENWEATHER_API_KEY=your-api-key
```

キーはサーバー側の `src/app/actions.ts` が使用します。`NEXT_PUBLIC_` は付けません。

```bash
pnpm dev
```

http://localhost:3000 で都市名を入力し、フォームを送信します。取得中はボタンが無効になり、成功時は天気情報、失敗時はエラーを表示します。

## ビルド・検証

```bash
pnpm lint
pnpm build
pnpm start
```

E2E は別のターミナルなどで実行します。Playwright 自身も `pnpm start` でサーバーを起動できるため、サーバーの手動起動は必須ではありません。

```bash
pnpm exec playwright install --with-deps chromium
pnpm build
pnpm exec playwright test
```

`test` スクリプトはありません。テストは `tests/example.spec.ts`、設定は `playwright.config.ts` です。実 API を利用するため、実行時も有効な `OPENWEATHER_API_KEY` が必要です。

## 主なファイル

- `src/app/page.tsx`：フォーム・状態・結果の表示。
- `src/app/actions.ts`：サーバー側の API 呼び出しと結果型。
- `src/app/globals.css`：グローバルスタイル。
- `next.config.ts`：Next.js と Tailwind の設定。
- `.github/workflows/playwright.yml`：lint・ビルド・E2E の CI。API キーは Secrets から渡します。

開発ルールは [AGENTS.md](AGENTS.md) を参照してください。

## 型チェック

```bash
pnpm typecheck
```

`next typegen` でルート型と `next-env.d.ts` を生成し、`tsc --noEmit` で型を検証します。CI でもビルド前に同じコマンドを実行します。
