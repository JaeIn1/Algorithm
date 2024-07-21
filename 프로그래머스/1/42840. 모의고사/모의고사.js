function solution(answers) {
    var answer = [[1 , 0] ,[2 , 0], [3 , 0]];
    let p1 = [1, 2, 3, 4, 5];
    let p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    answers.forEach((e , i) =>{
        if(e === p1[(i) % p1.length]) answer[0][1]++;
        if(e === p2[(i) % p2.length]) answer[1][1]++;
        if(e === p3[(i) % p3.length]) answer[2][1]++;
    });
    
    let max = 0;
    answer.forEach((e) =>{
        max = Math.max(max , e[1]);
    });
    
    return answer.filter((e) => e[1] === max).map((e) => e[0]);
}