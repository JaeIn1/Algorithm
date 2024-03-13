function solution(s) {
    var answer = '';
    let arr = s.split(" ");
    arr = arr.map((e) => e = e.slice(0 , 1).toUpperCase() + e.slice(1).toLowerCase());
    return arr.join(" ");
}