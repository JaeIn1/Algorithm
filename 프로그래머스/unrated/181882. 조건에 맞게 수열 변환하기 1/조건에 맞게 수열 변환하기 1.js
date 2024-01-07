function solution(arr) {
    arr.map((e , i) =>{
        if(e >= 50 && e % 2 === 0) arr[i] /= 2;
        else if(e < 50 && e % 2 === 1) arr[i] *= 2;
    })
    return arr;
}