function solution(sizes) {
    var answer = 0;
    let x = 0;
    let y = 0;
    
    sizes.forEach((e , i) =>{
        let arr = e;
        if(arr[0] < arr[1]) arr.reverse();
        x = Math.max(x , arr[0]);
        y = Math.max(y , arr[1]);
    })
    
    return x * y;
}