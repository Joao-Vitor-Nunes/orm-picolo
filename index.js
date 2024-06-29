
import Leitor from "./leitor.js";

const leitor = new Leitor();

/*salvar*/
console.log(leitor.salvar({nome: "Leitor1", idade:18, altura:1.70}));
console.log("");

console.log(leitor.salvar({nome: "Leitor2", idade:20, altura:1.81}));
console.log("");

console.log(leitor.salvar({nome: "Leitor3", idade:16, altura:1.68}));
console.log("");

console.log(leitor.salvar({nome: "Leitor4", idade:19, altura:1.87}));
console.log("");

console.log(leitor.salvar({nome: "Leitor5", idade:21, altura:1.90}));
console.log("");

/*selecionar*/
console.log(leitor.selecionar(1));
console.log("")

/*alterar*/
console.log(leitor.atualizar(2, {nome: "Leitor6", idade:31, altura:1.90}))

/*listar*/
console.log(leitor.listar());
console.log("")

/*deletar*/
console.log(leitor.deletar(1)); // Adiciona log para verificar retorno
console.log("")

/*listar novamente para verificar a exclusão*/
console.log(leitor.listar());
console.log("")
