/* eslint-disable no-unused-vars */
"use strict";

// DOM -> Document Object Model
const id = document.querySelector("#id"),
    pwd = document.querySelector("#pwd"),
    loginBtn = document.querySelector("#button");

loginBtn.addEventListener('click', login);

function login() {
    if (!id.value) return alert("아이디를 입력해주십시오.");
    if (!pwd.value) return alert("비밀번호를 입력해주십시오.");

    const req = {
        id: id.value,
        pwd: pwd.value,
    }
    
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    })
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                location.href = "/";
            } else {
                if (res.err) return alert(res.err);
                alert(res.msg);
            }
        })
        .catch(err => {
            console.error(new Error("로그인 중 에러 발생"));
        });
}