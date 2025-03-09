function login(username: string): boolean | string {
  let message = "Bem vindo" + username;

  console.log(message);

  return username;
}

const retornoFuncao = login("Igor Menezes");

console.log(retornoFuncao);
