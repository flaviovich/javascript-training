/*
Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
Guaranteed constraints:
1 ≤ n < 104.
*/
function solution(n) {
  return n * n + (n - 1) * (n - 1);
}
console.clear();
console.log(solution(1)); // 1
console.log(solution(2)); // 5
console.log(solution(3)); // 13
console.log(solution(4)); // 25
