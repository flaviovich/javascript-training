function checkPart(part) {
  let reversed = part.split("").reverse().join("");
  let isEqual = part === reversed;

  if (!isEqual) {
    const array = part.split("");
    
    array.reduce((prev, curr, index) => {
      const result =
        array.slice(0, index - 1).join("") + array.slice(index).join("");
      reversed = result.split("").reverse().join("");
      if (result === reversed) isEqual = true;
      return curr;
    });
  }
  return isEqual;
}

console.clear();
console.log(checkPart("uwu"));
console.log(checkPart("miidim"));
console.log(checkPart("midu"));
console.log(checkPart("zzzoonzzz"));

/*
function checkPart(part) {
  const textoOriginal = '' + part;
  const textoReverso = textoOriginal.split('').reverse().join('');
  const resultado = textoOriginal.includes(textoReverso) || textoOriginal.split('').find((_, index) => {
    const arreglo = [...textoOriginal.split('')];
      arreglo.splice(index, 1);
      const textoCortado = arreglo.join('');
      return textoCortado.includes(arreglo.reverse().join(''));
  });
  return resultado ? true : false;
}
*/
