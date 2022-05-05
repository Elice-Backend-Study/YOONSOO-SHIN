"use strict"

const output = {
    home: (req, res) => {
        res.render('home/index');
    },
    login: (req, res) => {
        res.render('home/login')
    },
};

const users = {
    id: ["woorimIT", "나개발", "김팀장"],
    pwd: ["1234", "1234", "!23456"],
}

const process = {
    login: (req, res) => {
        const id = req.body.id,
            pwd = req.body.pwd;
        
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.pwd[idx] === pwd) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인을 실패하셨습니다.",
        })
    }
}

// {key : key} key만 넣으면 value가 key와 같게 자동으로 설정됨
module.exports = {
    output,
    process
}