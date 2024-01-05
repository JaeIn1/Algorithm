function solution(arr, queries) {
    let result = [];
    for(let i = 0; i<queries.length; i++){
        let newArr = arr.slice(queries[i][0], queries[i][1]+1);
        let x = newArr.filter((e)=>e > queries[i][2]);
        if(x.length !== 0){
            result.push(x.sort((a,b)=>a-b)[0]);
        }else result.push(-1);
        
    }
    return result;
}