function solution(answers) {
    let count = [0 , 0 , 0];
    let p1 = [1, 2, 3, 4, 5];
    let p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    answers.forEach((e , i) =>{
        if(e === p1[(i) % p1.length]) count[0]++;
        if(e === p2[(i) % p2.length]) count[1]++;
        if(e === p3[(i) % p3.length]) count[2]++;
    });
    
    let max = Math.max(...count);
    let result = [];
    for(let i = 0 ; i < count.length; i++){
        if(count[i] === max) result.push(i + 1);
    }
    
    return result
}