function solution(arr1, arr2) {
    let r1 = arr1.length;
    let c1 = arr1[0].length;
    let r2 = arr2.length;
    let c2 = arr2[0].length;
    let result = Array.from(Array(r1),  () => new Array(c2).fill(0));
    
    for(let i = 0; i < r1; i++){
        for(let j = 0; j < c2; j++){
            for(let k = 0; k < c1; k++){
               result[i][j]  += arr1[i][k] * arr2[k][j];
            }
        }
    }
    return result;
}