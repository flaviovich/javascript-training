/*
Given the string, check if it is a palindrome.
Guaranteed constraints:
1 ≤ inputString.length ≤ 105.
*/
function solution(inputString) {
  const reversed = inputString.split("").reverse().join("");
  return inputString === reversed;
}
console.clear();
console.log(solution("aabaa")); // true
console.log(solution("abac")); // false
console.log(solution("a")); // true
