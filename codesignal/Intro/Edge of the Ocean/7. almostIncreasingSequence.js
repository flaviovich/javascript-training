/*
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
Guaranteed constraints:
2 ≤ sequence.length ≤ 10e5,
-10e5 ≤ sequence[i] ≤ 10e5.
*/
function solution(sequence) {
  let copy = [],
    slice = [];

  for (index in sequence) {
    copy = [...sequence];
    copy.splice(index, 1);
    copy.sort((a, b) => a - b);
    let every = true;
    copy.reduce((previous, current) => {
      if (previous >= current) every = false;
      return current;
    });
    if (!every) continue;
    slice = [...sequence];
    slice.splice(index, 1);
    if (copy.toString() === slice.toString()) return true;
  }
  return false;
}
console.clear();
console.log(solution([1, 3, 2, 1])); // false
console.log(solution([1, 3, 2])); // true
console.log(solution([1, 2, 1, 2])); // false
