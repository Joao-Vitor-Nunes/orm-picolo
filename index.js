class ORM {
  constructor(){
      if (this.constructor == ORM){
          throw new Error("Classe abstrata não pode ser instanciada diretamente.")
      }

      this.array = [];
      this.counter = 0;
  }

  /*SELECIONAR*/
  selecionar(id) {
      console.log("===================================")
      for (let i = 0; i < this.array.length; i++) {
          if (this.array[i].id == id) {
              return `Objeto SELECIONADO com sucesso: ${JSON.stringify(this.array[i], null, 2)}\n`;
          }
      }
      return "Não foi possível SELECIONAR o objeto\n";
  }

  /*SALVAR*/
  salvar(object){
      console.log("===================================")
      console.log('Objeto SALVO com sucesso')
      object.id = this.counter;
      this.array.push(object);
      this.counter++;
      return object;
  }

  /*ATUALIZAR*/
  atualizar(id, object){
      console.log("===================================")
      for(let i = 0; i < this.array.length; i++){
          if(this.array[i].id == id){
              object.id = id;
              this.array[i] = object;
              return `Objeto ATUALIZADO com sucesso: ${JSON.stringify(this.array[i], null, 2)}\n`;
          }
      }
      return "Não foi possível ATUALIZAR o objeto";
  }    
  

  /*LISTAR*/
  listar() {
      console.log("===================================")
      console.log('Objetos LISTADOS')
      const descriptions = this.array.map(object => 
          `tamanho=${object.tamanho}, peso=${object.peso}, altura=${object.altura}, id=${object.id}`
      );
      return descriptions;
  }

  /*DELETAR*/
  deletar(id) {
      console.log("===================================")
      for (let i = 0; i < this.array.length; i++) {
          if (this.array[i].id == id) {
              let objDeletado = this.array[i];
              this.array.splice(i, 1);
              return `Objeto DELETADO com sucesso: ${JSON.stringify(objDeletado, null, 2)}\n`;
          }
      }
      return "Não foi possível DELETAR o objeto";
  }

}

export default ORM