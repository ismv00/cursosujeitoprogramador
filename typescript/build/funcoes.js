"use strict";
function login(username) {
    let message = "Bem vindo" + username;
    console.log(message);
    return username;
}
const retornoFuncao = login("Igor Menezes");
console.log(retornoFuncao);
