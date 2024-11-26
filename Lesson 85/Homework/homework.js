// 7 kyu Exes and Ohs

function XO(str) {
    str = str.toLowerCase();
    return str.split("x").length - 1 === str.split("o").length - 1;
  }