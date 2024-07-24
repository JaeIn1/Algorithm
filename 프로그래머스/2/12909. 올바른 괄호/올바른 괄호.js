function solution(s){
    let stack = [];
    let flag = false;
    
    s.split("").forEach((e) => {
        if(e === "(") stack.push("(");
        else if(e === ")"){
            if(stack.length === 0){
                flag = true;
            }
            else stack.pop();
        };
    });

    if(flag) return false;
    return stack.length === 0;
}