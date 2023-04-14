// factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

var fact = 10;
var aux = 1;
var result = 1;

while (true) {
   
   if (aux > fact) {
      break;
   }

   result *= aux;
   aux++;

}

console.log("El factorial de 10 es: " + result);