const fetchData = require("../utils");
/*
crear un programa que nos ayude a buscar patrones...
Los mensajes son palabras separadas por espacios como este:
gato perro perro coche Gato peRRo sol
Necesitamos que el programa nos devuelva el número de veces que aparece cada palabra en el mensaje, independientemente de si está en mayúsculas o minúsculas.
El resultado será una cadena de texto con la palabra y el número de veces que aparece en el mensaje, con este formato:
gato2perro3coche1sol1
*/
function decode(str) {
  return [...new Set(str.toLowerCase().split(" "))]
    .map(
      (word) => word + str.match(new RegExp(`(\\b${word}\\b)`, "gi"))?.length
    )
    .join("");
}

console.clear();
console.log(decode("gato perro perro coche Gato peRRo sol")); //gato2perro3coche1sol1
console.log(decode("llaveS casa CASA casa llaves")); //llaves2casa3
console.log(decode("taza ta za taza")); //taza2ta1za1
console.log(decode("casas casa casasas")); //casas1casa1casas1

const URL = "https://codember.dev/data/message_01.txt";
fetchData(URL).then((code) => console.log(decode(code)));
