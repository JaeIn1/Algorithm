function solution(arr) {
    var answer = arr[0];
    
    
    function getGCD(a , b){
        if(b === 0) return a;
        return getGCD(b , a % b);
    }
    
    function getLGD(a , b){
        return (a * b) / getGCD(a , b);
    }
    
    for(let i = 0; i < arr.length - 1; i++){
        answer = getLGD(answer , arr[i + 1]);
    }
    return answer;
}