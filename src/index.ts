let dimensionArreglo: number = 0;
let numeros: number[] = new Array(dimensionArreglo);
let indice: number = 0;
let resultado: number = 0;

dimensionArreglo = Number(prompt("Ingrese la dimensión del arreglo:"));

for (indice = 0; indice < dimensionArreglo; indice++) {
  numeros[indice] = Number(
    prompt("Ingrese el numero que quiere poner en el lugar " + indice + ": ")
  );
  resultado += numeros[indice]; // es lo mismo que poner ---- resultado = resultado + numero----
}
for (indice = 0; indice < dimensionArreglo; indice++) {
  console.log(
    "La persona que ingresó en la posición" + indice + "es: " + numeros[indice]
  );
}
console.log("La suma es:" + resultado);
