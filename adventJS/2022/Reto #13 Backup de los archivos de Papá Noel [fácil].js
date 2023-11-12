/*
Entrada:
  1. fecha ultimo backup = 1546300800
  2. lista de cambios = [
      [ 3, 1546301100 ],
      [ 2, 1546300800 ],
      [ 1, 1546300800 ],
      [ 1, 1546300900 ],
      [ 1, 1546301000 ]
  ]
Salida:
  Ids modificados despues del ultimo backup: [ 1, 3 ]
*/
function getFilesToBackup(lastBackup, changes) {
  const changesFilter = changes.filter((change) => change[1] > lastBackup);

  const changesMap = changesFilter.map((change) => change[0]);

  const changesDeletDuplicate = [...new Set(changesMap)];

  return changesDeletDuplicate.sort((a, b) => a - b);
}

console.clear();
const lastBackup = 1546300800;
const changes = [
  [3, 1546301100],
  [2, 1546300800],
  [1, 1546300800],
  [1, 1546300900],
  [1, 1546301000],
];

const result = getFilesToBackup(lastBackup, changes); // => [ 1, 3 ]
console.log(result);
