function solution(s) {
    var answer = '';
    let arr = s.split(" ");
    arr.forEach((e , i) =>{
        let t = e.split("");
        let temp = "";
        t.forEach((e , j) =>{
            if(j % 2 === 0) temp += e.toUpperCase();
            else temp += e.toLowerCase();
        })
        arr[i] = temp;
    })
    return arr.join(" ");
}