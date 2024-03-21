function solution(sizes) {
    var answer = 0;
    let x = 0;
    let y = 0;
    
    sizes.forEach((e , i) =>{
        if(e[0] < e[1]){
            x = Math.max(x , e[1]);
            y = Math.max(y , e[0]);
        }
        else{
            x = Math.max(x , e[0]);
            y = Math.max(y , e[1]);
        }
    })
    
    return x * y;
}