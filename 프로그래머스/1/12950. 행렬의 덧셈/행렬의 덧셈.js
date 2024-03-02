function solution(arr1, arr2) {
    var answer = [[]];
    arr1.forEach((e , i) =>{
        answer[i] = [];
        e.forEach((data , j) =>{
            answer[i].push(data + arr2[i][j]);
        })
    })
    return answer;
}