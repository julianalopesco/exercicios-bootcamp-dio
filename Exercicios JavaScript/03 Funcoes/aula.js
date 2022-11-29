// função = trecho de código que pode ser chamado várias vezes 

function incrementarJuros (valor, percentualJuros) {
  const valorDeAcrecimo = (percentualJuros / 100) * valor;
  
  // função que retorna algum valor 
  return valor + valorDeAcrecimo; 
} 

console.log (incrementarJuros(100,10));
console.log (incrementarJuros(100,15));

