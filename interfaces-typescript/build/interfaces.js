"use strict";
// let loja: object;
const BurguerK = {
    nome: "BurguerK",
    endereco: "Rua logo ali",
    status: true,
};
//console.log(BurguerK);
function novaloja({ nome, endereco, status }) {
    console.log(`Loja ${nome} criada com sucesso`);
    console.log(`Enderco da loja ${endereco} `);
    console.log(`Status da loja ${status} `);
}
novaloja({ nome: "Red Burguer", endereco: "Rua X", status: true });
