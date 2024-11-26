// 6 kyu Array.diff

function arrayDiff(a, b) {
    let result = []
    for (let x of a) {
      if (!b.includes(x)) {
        result.push(x);
      }
    }
    return result;
  }