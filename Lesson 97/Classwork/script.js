const myObject = {
    name: "Gabriel",
    age: 18,
    city: "Tbilisi",
    hobby: "Code",
    pet: "Parrot"
  };
  
  console.log("All Key-Value Pairs:");
  for (const key in myObject) {
    console.log(`${key}: ${myObject[key]}`);
  }
  
  console.log("\nBonus - Filtered by Value's String Length < 5:");
  for (const key in myObject) {
    const value = myObject[key];
    if (typeof value === "string" && value.length < 5) {
      console.log(`${key}: ${value}`);
    }
  }
  