function solution(num_list) {
    let result = 0;
    for(let i of num_list){
        while(1){
            if(i === 1) break;
            if(i % 2 === 0) i /= 2;                      
            else i = (i -1) / 2;  
            result++;
        }
    }
    return result;
}