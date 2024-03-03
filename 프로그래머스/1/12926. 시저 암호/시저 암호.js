function solution(s, n) {
    let answer = '';
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    
    let arr = s.split(" ");
    arr.forEach((e , i) =>{
        let t = e.split("");
        let temp = "";
        t.forEach((e , i) =>{
            if(upper.includes(e)){
                let index = upper.indexOf(e) + n;
                if(index >= upper.length) index -= upper.length;
                temp += upper[index];
            }
            else if(lower.includes(e)){
                let index = lower.indexOf(e) + n;
                if(index >= lower.length) index -= lower.length;
                temp += lower[index];
            }
        })
        arr[i] = temp;
    })
    
    return arr.join(" ");
}