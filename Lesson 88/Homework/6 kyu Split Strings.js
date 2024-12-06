function solution(str){
    return (str + "_").match(/.{2}/g) || [];
 }