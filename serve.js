// Express のセットアップ
const express = require("express");
const app = express();
const port = 8001;

// 基本的な Express の使い方
//publicディレクトリ内のファイルが自動的に提供されるようになる
app.use(express.static("public"));

// POSTリクエストのボディを解析するためのミドルウェアを設定
// フォームデータやJSONデータなど、POSTリクエストで送信されたデータを簡単に取得できるようにするために必要
app.use(express.urlencoded({ extended: true }));

// POSTリクエストの処理。
app.post("/", (req, res) => {
  const name = req.body.name;
  res.send(`Hello ${name}!`);
  console.log("/へPOSTアクセスがありました");
});

// GETリクエストの処理。
app.get("/", (req, res) => {
  // ファイルを送信する
  console.log("/へGETアクセスがありました");
});

// HTTPサーバーを起動する
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
