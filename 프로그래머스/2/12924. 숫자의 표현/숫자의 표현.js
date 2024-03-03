function solution(n) {
    var answer = 1;
    
    function confirm(start){
        let num = start;
        let sum = 0;
        while(sum < n){
            sum += num;
            if(sum > n) return false;
            else{
                if(sum === n) return true;
                num++;
            }
        }
    }
    for(let i = 1; i <= parseInt(n / 2); i++){
        if(confirm(i)){
            answer++;
        }
    }
    return answer;
}