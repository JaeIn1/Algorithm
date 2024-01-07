function solution(num_list) {
    let a = 0;
    let b = 0;
    
    num_list.forEach((e , i) => {
        if(i % 2 === 0) a += e;
        else b += e;
    })
    return Math.max(a,b);
}