function solution(s) {
    var answer = 0;
    let obj = {
        "zero" : 0,
        "one" : 1,
        "two" : 2,
        "three" : 3,
        "four" : 4,
        "five" : 5,
        "six" : 6,
        "seven" : 7,
        "eight" : 8,
        "nine" : 9,
        
    }
    let key = Object.keys(obj);
    let result = [];
    let temp = [];
    for(let  i = 0; i < s.length; i++){
        if(!isNaN(s[i])){
            result.push(s[i]);
            temp = [];
        }
        else temp.push(s[i]);
        if(key.includes(temp.join(""))){
            result.push(obj[temp.join("")])
            temp = [];
        }
    }
    return Number(result.join(""));
}