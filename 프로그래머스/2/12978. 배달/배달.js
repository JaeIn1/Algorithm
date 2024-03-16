function solution(N, road, K) {
    var answer = 0;
    let arr = new Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
    let lines = Array.from({length : N + 1}, ()=>[]);
    
    road.forEach((e) =>{
        let [a , b , c] = e;
        lines[a].push({to : b , cost : c})
        lines[b].push({to : a , cost : c})
    });
    
    let queue = [{to: 1 , cost : 0}];
    arr[1] = 0;
    
    while(queue.length){
        let {to} = queue.pop();
        for(let line of lines[to]){
            if(arr[line.to] > arr[to] + line.cost){
                arr[line.to] = arr[to] + line.cost;
                queue.push(line);
            }
        }
    }
    console.log(arr);
    return arr.filter((e) => e <= K).length;
}