"use strict"

const User = require("../../models/User");

const output = {
    home: (req, res) => {
        res.render('home/index');
    },
    login: (req, res) => {
        res.render('home/login')
    },

    register: (req, res) => {
        res.render("home/register");
    }
};

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
}

// {key : key} key만 넣으면 value가 key와 같게 자동으로 설정됨
module.exports = {
    output,
    process
}