function solution(board, moves) {
    var answer = 0;
    let stack = [];
    let colArr = Array.from({length : board[0].length} , () => []);

    board.forEach((e , i) =>{
        for(let j = 0; j < e.length; j++){
            if(e[j] === 0) continue;
            else colArr[j].push(e[j]);
        }
    })
    
    moves.forEach((e , i) =>{
        if(colArr[e-1].length > 0){
            let t = colArr[e - 1].shift();
            stack.push(t);
        }
        while(1){
            if(stack.length >= 2 && stack[stack.length -1] === stack[stack.length - 2]){
              stack.pop();
              stack.pop();
              answer++;
            }
            else break;
        }
    })
    return answer * 2;
}