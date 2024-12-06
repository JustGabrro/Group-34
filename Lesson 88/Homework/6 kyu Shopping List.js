function shoppingListCost(arr) {
    return arr.reduce((total, [item, quantity]) => {
      const { price, discount, bogof } = groceries[item];
      let cost = price * quantity;
      
      if (bogof) {
        quantity = Math.ceil(quantity / 2);
        cost = price * quantity;
      }
      cost = cost * (1 - discount / 100);
      return total + cost;
    }, 0);
    
    return Math.round(total * 100) / 100;
  }