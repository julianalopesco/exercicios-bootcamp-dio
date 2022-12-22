const texto = "[)";

var isValid = function(texto) {    
    if (texto == "") {
        return true;
    }
    // if (texto.length != 2) {
    //     return false;
    // }
    if (texto == "()") {
        return true;
    }
    if (texto == "[]") {
        return true;
    }
    if (texto == "{}") {
        return true;
    }
    return false
}

console.log(isValid(texto));