"use strict"

const UserStorage = require("../../models/UserStorage");

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
        const id = req.body.id,
            pwd = req.body.pwd;
        const users = UserStorage.getUsers("id", "pwd");
        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.pwd[idx] === pwd) {
                response.success = true;
                return res.json(response);
            }
        }
        response.success = false;
        response.msg = "로그인에 실패하셨습니다.";
        return res.json(response);
    },
}

// {key : key} key만 넣으면 value가 key와 같게 자동으로 설정됨
module.exports = {
    output,
    process
}