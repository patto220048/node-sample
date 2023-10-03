import express from 'express';
const app = express();
import * as dotenv from 'dotenv';
dotenv.config()
const port = 4000 || process.env.PORT
app.get('/', (req, res) => {
    // クライアンのからのリクエスト
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)

    // サーバーからのレスポンス
    res.send('Hello!!!!')
})

app.listen(port, () => console.log(`Listening on port ${port} : ${process.env.HOST}:${port}`));
