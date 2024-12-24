function getFrequencyTable(str) {
    const frequency = {};
    for (const char of str) {
      frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
  }
  
  const result = getFrequencyTable("hello world");
  console.log(result);
  