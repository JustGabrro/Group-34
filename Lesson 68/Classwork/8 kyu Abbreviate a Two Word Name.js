function abbrevName(name){
    let nameArray = name.toUpperCase().split(" ")
    return `${nameArray[0].charAt(0)}.${nameArray[1].charAt(0)}`
  }