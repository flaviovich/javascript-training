function checkJump(heights) {
  let direction = ""; // U = up, D = down

  for (let i = 1; i < heights.length; i++) {
    if (heights[i] > heights[i - 1]) direction += "U";
    else if (heights[i] < heights[i - 1]) direction += "D";
  }
  console.log(direction);
  return /^(U+)(D+)$/g.test(direction);
}

console.clear();
console.log(checkJump([1, 3, 8, 5, 2])); // true
console.log(checkJump([1, 7, 3, 5])); // false
console.log(checkJump([2, 2, 2, 2])); // false
console.log(checkJump([1, 1000, 900, 800])); // true
console.log(checkJump([1, 3, 2, 5, 4, 3, 2, 1])); // false
