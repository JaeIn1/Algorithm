function solution(a, b, c) {
    let result = 0;
    if(a === b && b === c){
        result = (a + b + c) * (a**2 + b**2 + c**2) * (a**3 + b**3 + c**3)
    }else if(a === b || b === c || a ===c){
        result = (a + b + c) * (a*a + b*b + c*c)
    }else{
        result = a + b + c;
    }
    
    
    return result;
}