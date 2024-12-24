function printKeyValuePairs(objects) {
    for (const obj of objects) {
      for (const [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
      }
    }
  }
  
  const data = [
    { name: 'lasha', age: 30 },
    { name: 'merabi', age: 15 }
  ];
  printKeyValuePairs(data);
  