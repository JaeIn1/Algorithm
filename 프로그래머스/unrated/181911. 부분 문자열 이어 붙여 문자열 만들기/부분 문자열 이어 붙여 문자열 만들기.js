function solution(my_strings, parts) {
    let result = "";
    parts.forEach(([a,b] , i) => result += my_strings[i].slice(a,b+1));
    return result;
}