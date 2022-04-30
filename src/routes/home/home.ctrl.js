"use strict"

const home = (req, res) => {
    res.render('home/index');

}

const login = (req, res) => {
    res.render('home/login')
}
// {key : key} key만 넣으면 value가 key와 같게 자동으로 설정됨
module.exports = {
    home,
    login,
}