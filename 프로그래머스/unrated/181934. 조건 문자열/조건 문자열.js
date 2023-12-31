function solution(ineq, eq, n, m) {
    let result;
    if(eq === "="){
        if(ineq === ">") n >= m ? result = 1 : result = 0
        if(ineq === "<") n <= m ? result = 1 : result = 0
    }
    if(eq === "!"){
        if(ineq === ">") n > m ? result = 1 : result = 0
        if(ineq === "<") n < m ? result = 1 : result = 0
    }
    return result;
}