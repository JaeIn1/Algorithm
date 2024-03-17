function solution(n,a,b)
{
    var round = 0;
    let arr = [];
    
    while(a !== b){
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        round++;
    }
    
    

    return round;
}