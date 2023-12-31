function solution(a, d, included) {
    let result = 0;
    
    included.map((n , i)=> {
        if(n) result += (a + (d * i))
    })
    return result;
}