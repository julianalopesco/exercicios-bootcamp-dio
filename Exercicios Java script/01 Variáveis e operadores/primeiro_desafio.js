/* Faça um programa para calcular o valor gasto de combustível em uma viagem.

Você terá 3 variáveis. Sendo elas: 
 - Preço do combustível 
 - Gasto médio de gasto do carro por km 
 - Distância em km da viagem 

 */ 
const precoCombustivel = 5.79;
const kmsPorLitro = 10;
const distanciaEmKms = 100;

const litrosConsumidos = distanciaEmKms / kmsPorLitro; 
const valorGasto = litrosConsumidos * precoCombustivel; 
console.log(valorGasto);


