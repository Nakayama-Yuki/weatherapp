# 天気予報アプリケーション

都市名を入力すると、その都市の天気情報を表示するウェブアプリケーションです。
ひな型は GithubCopilot(Claude3.5)を使用して作成しました。

## 概要

このアプリケーションは、ユーザーが都市名を検索することで、その地域の現在の天気状況や気温などの気象情報を確認できるシンプルな天気予報サービスです。

## 機能

- 都市名による天気検索
- 現在の気温表示
- 天気状況（晴れ、雨など）の表示
- 湿度、風速などの追加情報表示
- レスポンシブデザイン（PC、タブレット、スマートフォン対応）

## 技術スタック

- **フロントエンド**: React 19、Next.js 15
- **スタイリング**: Tailwind CSS v4
- **言語**: TypeScript v5

## インストール方法

```bash
# リポジトリをクローン
git clone https://github.com/yourusername/weatherapp.git

# プロジェクトディレクトリに移動
cd weatherapp

# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev
```

## 環境変数の設定

`.env.local` ファイルを作成し、環境変数を設定してください：
OpenWeatherMap の API キーを取得し、`NEXT_PUBLIC_OPENWEATHERMAP_API_KEY`に設定してください。
