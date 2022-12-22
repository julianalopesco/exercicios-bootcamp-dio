const stack = ["()", "[]","{}"];
const texto = "[}"; 

if (stack.indexOf(texto) != -1 || texto == "") {
    console.log(true);
}
else {
    console.log(false);
} 