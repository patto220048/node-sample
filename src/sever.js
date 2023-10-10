
const express = require('express');
const app = express();
const path = require('path');
const  dotenv = require('dotenv');
dotenv.config()
const port = 4001 || process.env.PORT

app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
    // クライアンのからのリクエスト
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)

    // サーバーからのレスポンス
    res.send('Hello!!!!')
})  
app.get('/profile', (req, res) => {
    res.send('Welcome your profile')
    console.log(req.url)

})

app.listen(port, () => console.log(`Listening on port ${port} : ${process.env.HOST}:${port}`));
