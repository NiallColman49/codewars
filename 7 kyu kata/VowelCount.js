function getCount(str) {
  let splitString = str.split("");
  let total = 0;
  for (let i = 0; i < splitString.length; i++) {
    if (
      str[i] === "A" ||
      str[i] === "a" ||
      str[i] === "E" ||
      str[i] === "e" ||
      str[i] === "I" ||
      str[i] === "i" ||
      str[i] === "O" ||
      str[i] === "o" ||
      str[i] === "U" ||
      str[i] === "u"
    ) {
      total++;
    }
  }
  return total;
}
