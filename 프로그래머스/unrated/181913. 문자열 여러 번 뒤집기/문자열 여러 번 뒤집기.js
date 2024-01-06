function solution(my_string, queries) {
    let str = my_string.split("");
    for(let [start , end] of queries){
        const reverseStr = str.slice(start , end + 1).reverse();
        str.splice(start , reverseStr.length , ...reverseStr);
    }
    return str.join("");
}