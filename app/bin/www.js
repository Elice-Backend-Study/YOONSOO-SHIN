"use strict";

// app.listen() 모듈화
// 서버구동 app.js -> ./bin/www.js
const app = require("../app")

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("서버 기동");
});