function solution(arr1, arr2) {
    let r1 = arr1.length; // arr1 행 개수
    let c1 = arr1[0].length; // arr1 열 개수
    let c2 = arr2[0].length; // arr2 열 개수
    
    let answer = new Array(r1);
    for(let i = 0; i < r1; i++) answer[i] = new Array(c2);
    
    for(let i = 0; i < r1; i++){
        for(let j = 0; j < c2; j++){
            let value = 0;
            for(let k = 0; k < c1; k++){
                value += arr1[i][k] * arr2[k][j];
            }
            answer[i][j] = value;
        }
    }
    return answer;
}