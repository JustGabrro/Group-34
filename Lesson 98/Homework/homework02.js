function findHighestFrequencyChars(str) {
    const charCounts = {};
    let maxFreq = 0;
  
    for (const char of str.replace(/\s/g, '')) {
      charCounts[char] = (charCounts[char] || 0) + 1;
      maxFreq = Math.max(maxFreq, charCounts[char]);
    }
  
    return Object.keys(charCounts).filter(char => charCounts[char] === maxFreq);
  }
  
  console.log(findHighestFrequencyChars("hello world")); 
  console.log(findHighestFrequencyChars("test case"));   
  