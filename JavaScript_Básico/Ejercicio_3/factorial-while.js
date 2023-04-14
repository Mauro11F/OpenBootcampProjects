// factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while

var fact = 10;
var result = 1;
var aux = 1;

while (aux <= fact) {
   
   result *= aux;
   aux++;

}

console.log("Factorial de 10 es: " + result);