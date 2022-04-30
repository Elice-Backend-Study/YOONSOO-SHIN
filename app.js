"use strict";

// 모듈
const express = require('express');
const app = express();
// html로 작성하여 화면에 띄우려면 라우터나 컨트롤러 쪽에서 html을 읽은 후에 바디에 실어서 클라이언트에게 넘겨줘야 하는 번거로운 작업이 필요하지만, ejs로 하면 바로 렌더링 할 수 있다.
// https://jogakjungbo.tistory.com/27 폴더컴팩트

const PORT = 3000;
// 라우팅
const home = require('./routes/home');

// 앱 세팅
app.set('views', './views'); // views 경로지정
app.set('view engine', 'ejs');


app.use("/", home); // user -> 미들웨어를 등록해주는 메서드

app.listen(PORT, () => {
    console.log("서버 기동");
});

