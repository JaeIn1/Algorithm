function solution(prices) {
    let stack = [];
    let answer = new Array(prices.length).fill(0);
    let n = prices.length;
    
    for(let i = 0; i < n; i++){
        while(stack.length && prices[i] < prices[stack[stack.length - 1]]){
            let temp = stack.pop();
            answer[temp] = i - temp;
        }   
        stack.push(i);
    }
    
    // 스택에 아직 남아 있는 수 처리
    // 남아 있는 수는 가격이 떨어지지 않은 인덱스들
    while(stack.length){
        let t = stack.pop();
        answer[t] = prices.length - t - 1;
    }

  return answer;
}