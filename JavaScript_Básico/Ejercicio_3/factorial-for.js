// factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

var fact = 10;
var result = 1;

for (let i = 1; i <= fact; i++) {
   
   result *= i;
   
}

console.log("Factorial de 10 es: " + result);