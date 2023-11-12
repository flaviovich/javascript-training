/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
Example:
For inputArray = [3, 6, -2, -5, 7, 3], the output should be
solution(inputArray) = 21.
7 and 3 produce the largest product.
Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
-1000 ≤ inputArray[i] ≤ 1000.
*/
function solution(inputArray) {
  let max = -1000;

  for (let [i, num] of inputArray.entries()) {
    if (num * inputArray[i + 1] > max) {
      max = num * inputArray[i + 1];
    }
  }
  return max;
}
console.clear();
console.log(solution([3, 6, -2, -5, 7, 3])); // 21
console.log(solution([-23, 4, -3, 8, -12])); // -12
