// objetos são uma coleção de valores, que podem receber funções 

const pessoa = {
    nome:'juliana',
    idade:28,

    descrever: function () {
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.descrever();

