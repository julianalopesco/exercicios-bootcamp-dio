/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/ 

const precoEtanol = 5.00;
const precoGasolina = 7.00;
const kmsPorLitro = 10;
const distanciaEmKms = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaEmKms / kmsPorLitro; 

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol; 
    console.log(valorGasto);

} else {
    const valorGasto = litrosConsumidos * precoGasolina; 
    console.log(valorGasto);
}

