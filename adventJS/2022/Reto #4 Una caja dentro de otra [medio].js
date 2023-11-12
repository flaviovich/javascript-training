/*
Santa Claus necesita hacer una revisión de sus cajas de regalos para asegurarse de que puede empaquetarlas todas en su trineo. Cuenta con una serie de cajas de diferentes tamaños, que se caracterizan por su longitud, anchura y altura.
Tu tarea es escribir una función que, dada una lista de cajas con sus tamaños, determine si es posible empaquetar todas las cajas en una sola de manera que cada caja contenga a otra (que a su vez contenga a otra, y así sucesivamente).
Cada caja representa sus medidas con un objeto. Por ejemplo: {l: 2, w: 3, h: 2}. Esto significa que la caja tiene una longitud de 2, una anchura de 3 y una altura de 2.
Una caja entra en otra caja si todos los lados de la primera son menores a los lados de la segunda. Los elfos nos han dicho que las cajas no se pueden rotar, así que no se puede poner una caja de 2x3x2 en una caja de 3x2x2.
*/
function fitsInOneBox(boxes = []) {
  const sortedBoxes = boxes.sort((a, b) => a.l * a.w * a.h - b.l * b.w * b.h);
  let result = true;

  sortedBoxes.forEach((box, index) => {
    let next = sortedBoxes[index + 1];

    if (next === undefined || result === false) return;
    if (box.l < next.l && box.w < next.w && box.h < next.h) result = true;
    else result = false;
  });

  return result;
}

console.clear();
console.log(
  fitsInOneBox([
    { l: 1, w: 1, h: 10 },
    { l: 3, w: 3, h: 12 },
    { l: 2, w: 2, h: 1 },
  ])
); // true

// function fitsInOneBox(boxes = []) {
//   const sortedBoxes = boxes.sort((a, b) => a.l * a.w * a.h - b.l * b.w * b.h);

//   const result = sortedBoxes.reduce((ant, box) => {
//     if (ant.l < box.l && ant.w < box.w && ant.h < box.h) return box;
//     return false;
//   });
//   return Boolean(result);
// }
