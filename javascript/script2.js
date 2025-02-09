// // Criando funcooes
// function mediaAluno() {
//   var media = (nota1 + nota2) / 2;

//   if (media >= 7) {
//     console.log("Aluno aprovado com a média: " + media);
//   } else if (media < 7) {
//     console.log("Aluno reprovado com a média: " + media);
//   }
// }

// // Criando Arrays
// // 1) Buscando um registro em um array
// var lista = ["Igor", "Clarice", "Flavia", "Lena"];
// lista.indexOf("Igor");

// // 2) Acrescentando item na lista
// lista.push("Edinete");
// console.log(lista);

// // 3) Removendo o primeiro item da lista
// lista.shift("Igor");
// console.log(lista);
// // 4) Removendo último item da lista
// lista.pop("Lena");
// console.log(lista);

// // Loops
// //1 - While = Enquanto
// var x = 0;
// while (x < 10) {
//   document.write("<br> NO WHILE O valor de x é: " + x);

//   x++;
// }

// //For = PARA

// var valor = 10;

// for (a = 0; a < valor; a++) {
//   // O QUE TIVER AQUI DENTRO
//   document.write("<br>NO FOR o Valor do a é: " + a);
// }

//SWITCH
function Pedir() {
  var valor = prompt("DIGITE UM VALOR DE 1 A 4");

  switch (Number(valor)) {
    case 1:
      alert("Você escolheu 1 = Suco");
      break;
    case 2: {
      alert("Você escolheu 2 = Agua gelada");
      break;
    }
    case 3:
      alert("Você escolheu 3 = Sorvete");
      break;
    case 4:
      alert("Você chamou o garçon");
      break;
    default:
      alert("Escolha uma opção entre 1 a 4.");
      break;
  }
}

Condicionais;
var valor = "30";

if (valor === 30) {
  console.log("SIM O VALOR É IGUAL A 30");
} else {
  console.log("numero diferente de 30");
}

var nome = "Igor";
if (nome === "Igor") {
  console.log("Seja bem vindo: " + nome);
}

var numero = 10;

// Condicional TERNARIA
numero === 10
  ? console.log("NUMERO IGUAL  10")
  : console.log("NUMERO NÃO É IGUAL A 10");

// Trabalhando com datas
var data = new Date();
//BUSCANDO O DIA
data.getDay;
data.getSeconds;
data.getMonth;
