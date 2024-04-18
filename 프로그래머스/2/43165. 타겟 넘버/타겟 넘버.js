function solution(numbers, target) {
    var answer = 0;
    let arr = [];
    for(let n of numbers) arr.push(n);
    let visited = new Array(numbers.length).fill(false);
    let select = [];
    
    function dfs(depth){
        if(depth === numbers.length){
            let s = "";
            for(let i = 0; i < numbers.length; i++){
                s += select[i] + arr[i];
            }
            let result = eval(s);
            if(result === target) answer++;
            return;
        }
        for(let x of ["+" , "-"]){
            select.push(x);
            dfs(depth + 1);
            select.pop();
        }
    }
    dfs(0);
    
    return answer;
}