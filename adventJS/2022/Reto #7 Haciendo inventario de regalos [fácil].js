/*
En los almacenes de Papá Noel están haciendo inventario. Hay tres almacenes (que se representa cada uno como un Array). En cada almacén hay regalos.
Nos han pedido que escribamos un programa que nos diga qué regalos hay que comprar para reponer en nuestros almacenes ahora que se acerca la Navidad. Un regalo se tiene que reponer cuando sólo hay stock en uno de los tres almacenes.
*/
function getGiftsToRefill(a1, a2, a3) {
  const a = [...new Set(a1), ...new Set(a2), ...new Set(a3)];

  return a.filter(
    (elemento, index) =>
      a.indexOf(elemento) === index && a.lastIndexOf(elemento) === index
  );
}

const a1 = ["bici", "coche", "bici", "bici"];
const a2 = ["coche", "bici", "muñeca", "coche"];
const a3 = ["bici", "pc", "pc"];
const gifts = getGiftsToRefill(a1, a2, a3);
/*
El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
*/
console.clear();
console.log(gifts); // ['muñeca', 'pc']

/*
function getGiftsToRefill(a1, a2, a3) {
  let regalosFaltantes = [];
  let resultados = [];
  const almacenes = [a1, a2, a3];

  almacenes.forEach((almacen, index, array) => {
    const indicesExcluidos = array.map((_, i) => i).filter((i) => i !== index);
    resultados.push(indicesExcluidos);

    almacen.forEach((elem) => {
      if (
        ![
          ...almacenes[resultados[index][0]],
          ...almacenes[resultados[index][1]],
        ].includes(elem)
      ) {
        regalosFaltantes.push(elem);
      }
    });
  });
  return [...new Set(regalosFaltantes)];
}
*/