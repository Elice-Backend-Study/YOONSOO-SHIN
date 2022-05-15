"use strict";

// 모듈
const express = require('express');
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
// html로 작성하여 화면에 띄우려면 라우터나 컨트롤러 쪽에서 html을 읽은 후에 바디에 실어서 클라이언트에게 넘겨줘야 하는 번거로운 작업이 필요하지만, ejs로 하면 바로 렌더링 할 수 있다.
// https://jogakjungbo.tistory.com/27 폴더컴팩트

// 라우팅
const home = require('./src/routes/home');

// 앱 세팅
app.set('views', './src/views'); // views 경로지정
app.set('view engine', 'ejs');
// __dirname: app.js가 있는 위치
app.use(express.static(`${__dirname}/src/public`)) // 정적파일을 보관하는 정적폴더 경로지정
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}));


app.use("/", home); // use -> 미들웨어를 등록해주는 메서드 1

module.exports = app;

// morgan 설정
// const morgan = require('morgan');
// const accessLogStream = require('./src/config/log');
// app.use(morgan("dev"));
// app.use(morgan('common', {stream: accessLogStream}));