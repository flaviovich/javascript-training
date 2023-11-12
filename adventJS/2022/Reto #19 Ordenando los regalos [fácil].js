/*
devolver un array donde cada juguete esté en la posición que le corresponde.
las posiciones pueden no empezar en 0, aunque siempre serán números consecutivos y de forma ascendente.
*/

function sortToys(toys, positions) {
  const copy = [...positions];
  const sorted = positions.sort((a, b) => a - b);

  return sorted.map((value, i) => toys[copy.indexOf(value)]);
}

console.clear();

const toys = ["ball", "doll", "car", "puzzle"];
const positions = [2, 3, 1, 0];

console.log(sortToys(toys, positions)); // ['puzzle', 'car', 'ball', 'doll']

const moreToys = ["pc", "xbox", "ps4", "switch", "nintendo"];
const morePositions = [8, 6, 5, 7, 9];

console.log(sortToys(moreToys, morePositions)); // ['ps4', 'xbox', 'switch', 'pc', 'nintendo']
