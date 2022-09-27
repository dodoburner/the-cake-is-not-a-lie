function solution(string) {
  let piece;

  for (let i = 1; i < string.length; i++) {

    if (string[i] === string[0]) {
      piece = string.slice(0, i);
      const regExp = new RegExp(piece, "g");
      const match = string.match(regExp);

      if (match.join("") === string) {
        return match.length;
      }
    }
  }
  return 0
}