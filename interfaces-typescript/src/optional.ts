interface CadastroProps {
  nome?: string;
  email: string;
  status: boolean;
}

const novoUsuario: CadastroProps = {
  email: "igor@igor.com.br",
  status: true,
};

//console.log(novoUsuario);

function novoUser({ nome, email, status }: CadastroProps) {
  console.log(nome);
}

novoUser({ nome: "Ana", email: "ana@ana.com.br", status: false });
