function solution(a, b, c) {
    let result = 0;
    if(a === b && a === c && b === c){
        result = (a + b + c) * (a*a + b*b + c*c) * (a*a*a + b*b*b + c*c*c)
    }else if(a === b || b === c || a ===c){
        result = (a + b + c) * (a*a + b*b + c*c)
    }else{
        result = a + b + c;
    }
    
    
    return result;
}