/*
systemNames contiene los nombres de los sistemas de iluminación navideña, y stepNumbers contiene los números de paso de cada sistema.
Debemos verificar que los stepNumbers de cada sistema estén en orden estrictamente creciente.
tree_1 tiene los pasos: [1, 2]
tree_2 tiene los pasos: [33, 44]
house tiene los pasos: [10, 20]
*/
function checkStepNumbers(systemNames, stepNumbers) {
  const unique = new Set(systemNames);
  for (const element of unique) {
    const indexes = systemNames.map((value, index) =>
      element === value ? index : -1
    );
    const filtered = stepNumbers.filter((_, i) => indexes[i] >= 0);
    for (let i = 1; i < filtered.length; i++) {
      if (filtered[i - 1] >= filtered[i]) return false;
    }
  }
  return true;
}

console.clear();
console.log(
  checkStepNumbers(
    ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"],
    [1, 33, 10, 2, 44, 20]
  )
); // true
console.log(checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10])); // => false
