// definição do que deve ser o objeto 

class Pessoa {
    nome;
    idade;
    anoDeNascimento;
// constructor mostra o que acontece quando um item é instanciado. Pode receber parâmetros

    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade; 
        this.anoDeNascimento = 2022 - idade; 
    }

    descrever () {
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

// instância = ocorrência de uma pessoa

const juliana =  new Pessoa('juliana', 28);

const joao =  new Pessoa('joao', 22);

juliana.descrever();
joao.descrever();

console.log(juliana)