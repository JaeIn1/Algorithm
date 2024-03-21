function solution(board, moves) {
    var answer = 0;
    let stack = [];
    let col = Array.from({length : board[0].length} , ()=>[]);
    
    for(let i = 0; i < board.length; i++){
        let t = board[i];
        for(let j = 0; j < t.length; j++){
            if(t[j] === 0) continue;
            else col[j].push(t[j]);
        }
    }
    
    moves.forEach((e) => {
        if(col[e - 1].length > 0){
            let t = col[e - 1].shift();
            stack.push(t);
        }else return;
        
        while(1){
            if(stack.length >= 2 && stack[stack.length -1] === stack[stack.length - 2]){
                stack.pop();
                stack.pop();
                answer++;
            }else break;
            
        }
    })
    return answer * 2;
}