const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(5);
notas.push(8);
notas.push(9); 

let soma = 0; 

//parte I: declaração do index, estrutura de controle, Parte II: declaração da condicional. Parte III: o que irá acontecer depois de executar o for 
//i++ = i = i+i 

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length
console.log(media);