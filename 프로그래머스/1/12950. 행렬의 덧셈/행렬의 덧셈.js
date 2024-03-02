function solution(arr1, arr2) {
    var answer = [];
    arr1.forEach((e , i) =>{
        let arr = [];
        e.forEach((data , j) =>{
            arr.push(data + arr2[i][j]);
        })
        answer.push(arr);
    })
    return answer;
}