let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75];
let valorProcurado = 81

// for (let i = 0; i < elementos.length; i++) {
//     if (elementos[i] == valorProcurado) {
//         achouValor = "sim"
//         posicaoNumero = i
// }
// }

if (elementos.indexOf(valorProcurado) != -1) {
    console.log("Achei", valorProcurado, "na posicao" , elementos.indexOf(valorProcurado));
} 
else {
    console.log("Numero", valorProcurado, "nao encontrado!"); 
}