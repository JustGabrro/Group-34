function count(string) {
    const count = {};
    for (const char of string) {
      if (count[char]) {
        count[char] += 1;
      } else {
        count[char] = 1;
      }
    }
    return count;
  }