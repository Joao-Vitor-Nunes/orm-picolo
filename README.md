# trab-picolo

## Projeto de Programação Orientada a Objeto - ORM

Este projeto foi desenvolvido como parte do trabalho final para a disciplina de Programação Orientada a Objeto.

### Contribuidores

- João Vitor Nunes Da Silva
- Kaue Oliveira

### Repositório

O código fonte do projeto está disponível no GitHub: [orm-picolo](https://github.com/Joao-Vitor-Nunes/orm-picolo)

### Descrição

O trab-picolo é uma implementação simples de um ORM (Object-Relational Mapping) em JavaScript, fornecendo métodos básicos para manipulação de objetos em memória.

### Instalação

Para utilizar o trab-picolo, clone o repositório e instale as dependências:

```bash
git clone https://github.com/Joao-Vitor-Nunes/orm-picolo.git
npm install


import ORM from './orm.js';

class AAA extends ORM {
    constructor(){
        super();
    }
}

const objeto = new AAA();

/* Salvar */
console.log(objeto.salvar({ tamanho: "quatro", peso: "três", altura: 4 }));
console.log("");

console.log(objeto.salvar({ tamanho: 5, peso: 10, altura: 10 }));
console.log("");

/* Selecionar */
console.log(objeto.selecionar(1));
console.log("");

/* Atualizar */
console.log(objeto.atualizar(2, { tamanho: "quatro", peso: "três", altura: 4 }));
console.log("");

/* Listar */
console.log(objeto.listar());
console.log("");

/* Deletar */
console.log(objeto.deletar(1));
console.log("");

/* Listar novamente para verificar a exclusão */
console.log(objeto.listar());
console.log("");
