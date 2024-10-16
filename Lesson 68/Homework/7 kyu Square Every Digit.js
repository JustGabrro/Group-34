function squareDigits(num){
    let numStr = String(num);
    let result = "";
    for (let x of numStr) {
      result += String(Number(x) ** 2);
    }
    return Number(result);
  }