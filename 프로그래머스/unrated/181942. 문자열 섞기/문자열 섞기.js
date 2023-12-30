function solution(str1, str2) {
    let result = [];
    let n1 = 0;
    let n2 = 0;
    let num = str1.length + str2.length;
    for(let i = 1; i<=num; i++){
        if(i % 2 === 1) {
         result.push(str1[n1])
         n1++;
        }else{
          result.push(str2[n2]);
          n2++;  
        } 
    }
    return result.join("");
}