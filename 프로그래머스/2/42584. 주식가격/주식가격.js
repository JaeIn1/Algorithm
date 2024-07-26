function solution(prices) {
    var answer = [];
    for(let i = 0; i < prices.length; i++){
        let num = prices[i];
        let count = 0;
        for(let j = i + 1; j < prices.length; j++){
            if(num <= prices[j]) count++;
            else{
                count++;
                break;
            };
        }
        answer.push(count);
    }
    return answer;
    
}