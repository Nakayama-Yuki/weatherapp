# Copilot Instructions for weatherapp

## プロジェクト概要

- 都市名を入力すると、OpenWeatherMap API から天気情報を取得し表示する Next.js アプリ。
- フロントエンドは React 19 + TypeScript 5、Next.js 16、スタイリングは Tailwind CSS v4。
- Server Actionsを使用したフォーム駆動のデータ取得を実装。
- 主要なロジックは`src/app/`配下に集中。

## 主要ディレクトリ・ファイル

- `src/app/page.tsx` : メイン画面・天気表示 UI。
- `src/app/actions.ts` : API 通信・データ取得ロジック。
- `src/app/globals.css` : Tailwind ベースのグローバル CSS。
- `public/` : アイコン・SVG 等の静的アセット。
- `next.config.ts` : Next.js 設定。
- `tsconfig.json` : TypeScript 設定。

## 開発・ビルド・起動

- 依存インストール: `pnpm install`
- 開発サーバー: `pnpm dev`
- ビルド: `pnpm build`

## 環境変数

- `.env.local`に`OPENWEATHER_API_KEY`を設定。
- API キーは OpenWeatherMap 公式から取得。
- サーバーサイド専用の環境変数なので`NEXT_PUBLIC_`プレフィックスは不要。

## コーディング規約・パターン

- データ取得は`actions.ts`でServer Actionsとして実装し、フォームから直接呼び出す。
- `useActionState`フックを使用してフォーム状態と送信を管理。
- 都市名はフォーム入力 → Server Action実行 → 結果表示の流れ。
- 型定義は TypeScript で厳密に管理（ActionResponseType等）。
- スタイリングは Tailwind CSS ユーティリティクラスを優先。
- ページ構成は`src/app/page.tsx`単一ファイルで完結。

## 外部連携・依存

- OpenWeatherMap API のみ外部通信。
- 他サービス連携やバックエンドは未実装。

## 注意点

- Next.js 16/React 19 の Server Actions を使用。
- `'use server'`ディレクティブで Server Actions を定義し、`useActionState`で状態管理。
- 追加機能は`src/app/`配下に実装。
- テストコード・CI/CD は現状未導入。

---

このドキュメントは AI エージェント向けの開発ガイドです。不明点や追加情報が必要な場合は README.md も参照してください。
