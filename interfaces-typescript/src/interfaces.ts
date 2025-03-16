// let loja: object;

// loja = {
//   nome: "BK",
//   endereco: "Rua X",
//   status: true,
// };

interface LojaProps {
  nome: string;
  endereco: string;
  status: boolean;
}

const BurguerK: LojaProps = {
  nome: "BurguerK",
  endereco: "Rua logo ali",
  status: true,
};

//console.log(BurguerK);

function novaloja({ nome, endereco, status }: LojaProps): void {
  console.log(`Loja ${nome} criada com sucesso`);
  console.log(`Enderco da loja ${endereco} `);
  console.log(`Status da loja ${status} `);

  console.log("===============");
}

novaloja({ nome: "Red Burguer", endereco: "Rua X", status: true });

novaloja({ nome: "Macdonalds", endereco: "Rua Y", status: false });
