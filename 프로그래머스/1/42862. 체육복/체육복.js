function solution(n, lost, reserve) {
    var answer = 0;
    let arr = new Array(n).fill(1);
    
    lost.forEach((e) => arr[e - 1] -= 1);
    reserve.forEach((e) =>arr[e - 1] += 1);
    
    lost.sort((a , b) => a - b);
    
    lost.forEach((e) =>{
        if(arr[e - 1] === 1) return;
        if(arr[e - 2] === 2){
            arr[e - 2] -= 1;
            arr[e - 1] += 1;
        }
        else if(arr[e] === 2){
            arr[e] -= 1;
            arr[e - 1] += 1;
        }
    })
    arr.forEach((e) => {
        if(e >= 1) answer++;
    })
    console.log(arr);
    return answer;
}