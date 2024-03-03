function solution(arr) {
    if(arr.length === 1) return [-1];
    else{
        let temp = [...arr];
        temp.sort((a , b) => a - b);
        let index = arr.indexOf(temp[0]);
        arr.splice(index , 1);
        
    }
    return arr;
}