function solution(n, m, section) {
    let cnt = 0;
    let start = section[0];
    let arr = new Array(n).fill(true);
    for(let i of section){
        arr[i-1] = false;
    }
    
    section.forEach((e,i) =>{
        if(arr[e - 1] === false){
            for(let i = 0; i < m; i++){
                arr[e -1 + i] = true;   
            }
            cnt++;
        }
    })
    return cnt;
}