function filter (numArr){
    const evenNum = []
    for (let i of numArr){
        if (i % 2 === 0 ){
            evenNum.push(i)
        }
    }
    return evenNum;
}

console.log(filter([1,2,3,4,5,6,7,8,9]));