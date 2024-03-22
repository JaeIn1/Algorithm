function solution(n, m, section) {
    let answer = 0;
    let arr = new Array(n).fill(true);
    section.forEach((e) =>{
        arr[e - 1] = false;
    })
    section.forEach((e) =>{
        if(!arr[e - 1]){
            for(let i = e - 1; i < e - 1 + m; i++){
                arr[i] = true;
            }
            answer++;
        }
    })
    console.log(arr);
    
    return answer;
}