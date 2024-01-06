function solution(m) {
    let al = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let a = new Array(52).fill(0);

    m.split("").map((n)=>{
        a[al.indexOf(n)]+=1
    })

    return a;
}