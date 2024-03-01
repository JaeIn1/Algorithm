function solution(dartResult) {
    var answer = 0;
    let num = [];
    let temp = 0;
    
    for(let i = 0; i < dartResult.length; i++){
        if(dartResult[i] >= 0 && dartResult[i] <= 9){
            if(dartResult[i + 1] == 0 && dartResult[i] == 1){
                temp = 10;
                i++;
            }
            else temp = dartResult[i];
        }
        else if(dartResult[i] === "S"){
            num.push(temp);
        }
        else if(dartResult[i] === "D"){
            num.push(Math.pow(temp , 2));
        }
        else if(dartResult[i] === "T"){
            num.push(Math.pow(temp , 3));
        }
        else if(dartResult[i] === "#"){
            num[num.length -1] *= -1;
        }
        else if(dartResult[i] === "*"){
            num[num.length -2] *= 2;
            num[num.length -1] *= 2;
        }
    }
    
    for(let i = 0; i < num.length; i++){
        answer += Number(num[i]);
    }
    return answer;
}