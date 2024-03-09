function solution(s) {
    var x = 0;
    var x_count = 0;
    var result = [];
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === s[x]) x_count++;
        else x_count--;
        
        if(x_count === 0){
            result.push(s.slice(x , i + 1));
            x = i + 1;
        }
    }
    return result.join("").length === s.length ? result.length : result.length + 1;
}