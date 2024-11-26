// 6 kyu Find the odd int

function findOdd(A) {
    let result = 0;
    for (let num of A) {
      result ^= num;
    }
    return result;
  }