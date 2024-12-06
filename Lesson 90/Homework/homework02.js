function manualFilter(arr, threshold) {
    let filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= threshold) {
        filteredArray.push(arr[i]);
      }
    }
    return filteredArray;
  }
  