function solution(arr) {
    arr.map((e , i) =>{
        if(arr[i] >= 50 && arr[i] % 2 === 0) arr[i] /= 2;
        else if(arr[i] < 50 && arr[i] % 2 === 1) arr[i] *= 2;
    })
    return arr;
}