function reverseWords(str) {
    const words = str.split(" ")
    const reversedWords = [];
    for (let i of words) {
      reversedWords.push(i.split("").reverse().join(""));
    }
    return reversedWords.join(" ");
  }