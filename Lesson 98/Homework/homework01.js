function findUniqueElements(matrix) {
    const flatArray = matrix.flat();
    const elementCounts = {};
    
    flatArray.forEach(num => {
      elementCounts[num] = (elementCounts[num] || 0) + 1;
    });
  
    return Object.keys(elementCounts)
      .filter(key => elementCounts[key] === 1)
      .map(Number);
  }
  
  const matrix = [
    [1, 2, 3],
    [4, 1, 5],
    [6, 7, 3]
  ];
  console.log(findUniqueElements(matrix)); 
  