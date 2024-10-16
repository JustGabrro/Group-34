function digitize(n) {
    let num = [];
    for (let digit of String(n)) {
      num = [Number(digit)].concat(num);
    }
    return num;
  }