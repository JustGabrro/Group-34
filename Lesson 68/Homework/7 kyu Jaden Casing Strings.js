String.prototype.toJadenCase = function () {
    return this.split(" ").map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  };