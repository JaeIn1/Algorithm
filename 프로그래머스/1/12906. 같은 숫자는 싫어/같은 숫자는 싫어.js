function solution(arr)
{
    var answer = [];
    let stack = [];
    for(let i = 0; i < arr.length; i++){
        if(i === 0){
            stack.push(arr[i]);
            continue;
        }
        stack.push(arr[i]);
        if(stack[stack.length - 2] === stack[stack.length - 1]){
            stack.pop();
        }
    }
    return stack;
}