/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
Guaranteed constraints:
1 ≤ statues.length ≤ 10,
0 ≤ statues[i] ≤ 20.
*/
function solution(statues) {
  sorted = statues.sort((a, b) => a - b);
  return sorted[sorted.length - 1] - sorted[0] + 1 - sorted.length;
}
console.clear();
console.log(solution([6, 2, 3, 8])); // 3 (sizes 4, 5 and 7)
