function solution(n, m, section) {
    let cnt = 0;
    let arr=  new Array(n).fill(true);
    for(let i = 0; i < section.length; i++) arr[section[i] - 1] = false;
    
    section.forEach((e) =>{
        if(!arr[e - 1]){
            for(let i = e - 1; i < e - 1 + m; i++){
                arr[i] = true;
            }
            cnt++;
        }
    })
    
    return cnt;
}