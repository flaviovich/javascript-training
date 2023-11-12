/*
Escribe una función que recibe el dígito del que no tenemos tinta (un número que será del 0 al 9) y como segundo parámetro, el número de códigos de barras que hay que imprimir (empezamos desde 1 hasta este número que recibimos).
*/

function dryNumber(dry, numbers) {
  let result = [];
  for (let i = 1; i <= numbers; i++) {
    if (i.toString().includes(dry)) result.push(i);
  }
  return result;
}

console.clear();
console.log(dryNumber(1, 15)); // [1, 10, 11, 12, 13, 14, 15]
