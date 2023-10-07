# MicroCMS用のmarkdown editorです。

## 使い方

### 1. `.env.local`を作成
ルートディレクトリに`.env.local`を作成します。
内容は下記の通りにお願いします。
```
NEXT_PUBLIC_MICROCMS_ORIGIN = https://${自分のORIGIN}.io
# Cloudflare R2
NEXT_PUBLIC_R2_BUCKET_URL= ********
NEXT_PUBLIC_BUCKET_NAME= ********
R2_ENDPOINT=********
R2_ACCESS_KEY=********
R2_SECRET_KEY=********
```

### 2. パッケージをインストール
`npm install`を実行してください。

### 3. 起動
`npm run dev`で起動します。

