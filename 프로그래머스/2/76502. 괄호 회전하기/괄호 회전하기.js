function solution(s) {
  const n = s.length;
  let answer = 0;

    for(let i = 0; i < n; i++){
        let stack = [];
        let flag = true;
        
        for(let j = 0; j < n; j++){
            let str = s[(i + j) % n];
            
            if(str === "[" || str === "(" || str === "{"){
                stack.push(str);
            }
            else{
                if(stack.length === 0){
                    flag = false;
                    break;
                }
                let top = stack[stack.length - 1];
                
                if(top === "{" && str === "}"){
                    stack.pop();
                }
                else if(top === "(" && str === ")"){
                    stack.pop();
                }
                else if(top === "[" && str === "]"){
                    stack.pop();
                }
                else{
                    flag = false;
                    break;
                }
            }
        }
        if(flag && stack.length === 0) answer++;
    }

  return answer;
}