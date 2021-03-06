"use strict";

// app.listen() 모듈화
// 서버구동 app.js -> ./bin/www.js
const app = require("../app");
const logger = require('../src/config/logger');


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    logger.info(`${PORT} 포트에서 서버가 가동되었습니다.`);
});