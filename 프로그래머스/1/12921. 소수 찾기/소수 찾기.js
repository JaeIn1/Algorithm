function solution(n) {
    var answer = 0;
    let arr = [];
    
    for(let i = 2; i <= n; i++){
        arr[i] = i;    
    }
    for(let j = 2; j <= n; j++){
        if(arr[j] === 0) continue;
        for(let k = j + j; k <= n; k+=j){
            arr[k] = 0;
        }
    }
    return arr.filter((e) => e).length;
}