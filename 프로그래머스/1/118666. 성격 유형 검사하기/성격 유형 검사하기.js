function solution(survey, choices) {
    var answer = [];
    const obj ={
        R : 0,
        T : 0,
        C : 0,
        F : 0,
        J : 0,
        M : 0,
        A : 0,
        N : 0,
    }
    for(let i = 0; i < choices.length; i++){
        let num = choices[i];
        let s = survey[i];
        if(num > 4) obj[s[1]] += num - 4;
        else if(num < 4) obj[s[0]] += 4 - num;
        else continue;
    }
    let arr=  Object.keys(obj);
    for(let i = 0; i < arr.length; i+=2){
        if(obj[arr[i]] < obj[arr[i+1]]) answer.push(arr[i+1]);
        else if(obj[arr[i]] > obj[arr[i+1]]) answer.push(arr[i]);
        else{
            let temp = [arr[i] , arr[i+1]].sort();
            answer.push(temp[0]);
        }
    }
    
    return answer.join("");
}
