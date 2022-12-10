let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75];
let valorProcurado = 81
let achouValor = "não"
let posicaoNumero = 0

for (let i = 0; i < elementos.length; i++) {
    if (elementos[i] == valorProcurado) {
        achouValor = "sim"
        posicaoNumero = i
}
}
if (achouValor == "sim" ) {
    console.log("Achei", valorProcurado, "na posicao" , posicaoNumero);
} 
else {
    console.log("Numero", valorProcurado, "nao encontrado!"); 
}