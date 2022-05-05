"use strict"

const output = {
    home: (req, res) => {
        res.render('home/index');
    },
    login: (req, res) => {
        res.render('home/login')
    },
};

const process = {
    login: (req, res) => {
        console.log(req.body);
    }
}

// {key : key} key만 넣으면 value가 key와 같게 자동으로 설정됨
module.exports = {
    output,
    process
}