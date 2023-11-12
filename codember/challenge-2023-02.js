const fetchData = require("../utils");
/*
crear un mini compilador que interprete y ejecute programas escritos en este lenguaje de símbolos.
Las operaciones del lenguaje son las siguientes:
"#" Incrementa el valor numérico en 1.
"@" Decrementa el valor numérico en 1.
"*" Multiplica el valor numérico por sí mismo.
"&" Imprime el valor numérico actual.
El valor numérico inicial es 0 y las operaciones deben aplicarse en elorden en que aparecen en la cadena de símbolos.
*/
function decode(str) {
  let product = 0;

  return str
    .split("")
    .map((operator) => {
      switch (operator) {
        case "#":
          product++;
          break;
        case "@":
          product--;
          break;
        case "*":
          product **= 2;
          break;
        case "&":
          return product;
      }
    })
    .join("");
}

console.clear();
console.log(decode("##*&")); // 4
console.log(decode("&##&*&@&")); // 0243

const URL = "https://codember.dev/data/message_02.txt";
fetchData(URL).then((code) => console.log(decode(code)));
