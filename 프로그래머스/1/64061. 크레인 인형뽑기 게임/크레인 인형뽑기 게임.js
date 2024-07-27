function solution(board, moves) {
    let answer = 0;
    let l = board.length;
    let stack = Array.from(Array(l) , () => []);
    let result = [];
    
    for(let i = l - 1; i >= 0; i--){
        for(let j = 0; j < l; j++){
            if(board[i][j]){
                stack[j].push(board[i][j]);
            }
        }
    }
    
    moves.forEach((e) =>{
        if(stack[e - 1].length > 0){
            let temp = stack[e - 1].pop();  
            
            if(temp === result[result.length - 1]){
                result.pop();
                answer++;
            }
            else result.push(temp);
        }
    })
    
    return answer * 2;
}