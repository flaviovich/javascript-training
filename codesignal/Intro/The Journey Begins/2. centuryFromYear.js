/*
Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
Guaranteed constraints:
1 ≤ year ≤ 2005.
*/
function solution(year) {
  return Math.ceil(year / 100);
}
console.clear()
console.log(solution(1905)); // 20
console.log(solution(1700)); // 17
