function solution(code) {
    let result = [];
    let mode = 0;
    
    for(let i = 0; i<code.length; i++){
        if(code[i] === "1"){
            mode = mode === 0 ? 1 : 0;
            continue;
        }
        if(mode === 0){
            if(i % 2 === 0) result.push(code[i]);
        }
        if(mode === 1){
            if(i % 2 === 1) result.push(code[i]);
        }
        
    }
    return result.length > 0 ? result.join("") : "EMPTY";
}