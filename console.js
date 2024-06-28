import ORM from "./ORM.js";

class AAA extends ORM{
    constructor(){
        super();
    }
}

const objeto = new AAA()

/*salvar*/
console.log(
objeto.salvar({tamanho: "quatro", peso:"três", altura:4}));
console.log("");

console.log(
objeto.salvar({tamanho: 5, peso:10, altura:10}));
console.log("");

console.log(
objeto.salvar({tamanho: 5, peso:10, altura:10}));
console.log("");

console.log(
objeto.salvar({tamanho: 5, peso:10, altura:10}));
console.log("");

console.log(
objeto.salvar({tamanho: 5, peso:10, altura:10}));
console.log("");

/*selecionar*/
console.log(
objeto.selecionar(1));
console.log("")

/*alterar*/
console.log(
    objeto.atualizar(2, {tamanho: "quatro", peso:"três", altura:4})
)

/*listar*/
console.log(
    objeto.listar()
);
console.log("")

/*deletar*/
console.log(objeto.deletar(1)); // Adiciona log para verificar retorno
console.log("")

/*listar novamente para verificar a exclusão*/
console.log(
    objeto.listar()
);
console.log("")

console.log(
    
)