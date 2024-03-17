function solution(n, words) {
    var answer = [0 , 0];
    let arr = [words[0]];
    let cnt = 1;
    
    for(let i = 1; i < words.length; i++){
        if(arr.includes(words[i]) || words[i][0] !== words[i - 1][words[i - 1].length - 1]){
            if(i % n === 0) answer[0] = 1;
            else answer[0] = (i % n) + 1;
            
            answer[1] = parseInt(i / n) + 1;
            break;
        }
        else{
            arr.push(words[i]);
        }
    }
    
    
    return answer;
}