function solution(n, m) {
    var answer = [];
    function getGCD(a , b){
        if(b === 0) return a;
        return getGCD(b , a % b);
    }
    
    function getLCM(a , b){
        return (a * b) / getGCD(a , b);
    }
    let x = getGCD(n , m);
    let y = getLCM(n , m);
    return [x , y];
}