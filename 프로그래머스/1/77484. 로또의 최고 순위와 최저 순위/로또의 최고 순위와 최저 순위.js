function solution(lottos, win_nums) {
    var answer = [];
    let correct = 0;
    let zeros = 0;
    
    lottos.forEach((e) => {
        if(win_nums.includes(e)) correct++;
        if(e === 0) zeros++;
    })
    let max = 7 - correct - zeros >= 6 ? 6 : 7 - correct - zeros;
    let min = 7 - correct >= 6 ? 6 : 7 - correct;
    answer = [max , min];
    
    return answer;
}