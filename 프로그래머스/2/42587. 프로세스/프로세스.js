function solution(priorities, location) {
    let arr = [];
    let queue = priorities.map((e, i) => [e, i]);
    let cnt = 1;
    while(queue.length > 0){
        let [num , idx] = queue.shift();
        
        if(queue.filter((e) => e[0] > num).length > 0){
            queue.push([num , idx]);
        }
        else{
            arr.push([num , idx,  cnt++])
        }
    }
    
    let answer = arr.filter((e) => e[1] === location)
    return answer[0][2];
}