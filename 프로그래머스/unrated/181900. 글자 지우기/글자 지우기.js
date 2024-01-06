function solution(my_string, indices) {
    let arr = [...my_string];
    for(let i of indices){
        arr[i] = 0;
    }
    let newArr = arr.filter((e) => e !== 0)
    return newArr.join("");
}