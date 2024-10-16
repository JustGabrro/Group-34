function findAverage(array) {
    if (array.length === 0) {
      return 0;
    }
    const sum = array.reduce((total, num) => total + num, 0);
    return sum / array.length;
  }