function solution(progresses, speeds) {
    var answer = [];
    let stack = [];
    
    for(let i = 0; i < progresses.length; i++){
        stack.push(progresses[i]);
    }
    
    while(stack.length > 0){
        for(let i = 0; i < stack.length; i++){
            if(stack[i] < 100){
                stack[i] += speeds[i];
                if(stack[i] > 100) stack[i] = 100;
            }
            else stack[i] = 100;
        }
        
        if(stack[0] === 100){
            let count = 0;
            console.log(stack);
            while(stack[0] === 100){
                stack.shift();
                speeds.shift();
                count++;
            }
            answer.push(count);
        }
    }
    return answer;
}