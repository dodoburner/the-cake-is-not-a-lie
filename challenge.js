function solution(string) {
  let count = 0;
  const first = 0;
  let second = 1;
  let piece;

  function recursive(string, first, second) {
    for (second; second < string.length; second++) {
      if (string[second] === string[first]) {
        count++
        piece = string.slice(0, second);
        break;
      }
    }

    const regExp = new RegExp(piece, "g")

    count = string.match(regExp).length

    console.log(string.match(regExp))

    if (count === 0) {
      recursive(string, first, second+1)
    }
  }

  recursive(string, first, second)
  return count
}

console.log(solution("abcabcabcabc"));
// console.log(solution("abccbaabccba"));