function solution(my_string, m, c) {
    let result = "";
    for(let i = c-1; i< my_string.length; i+=m){
        result += my_string[i];
    }
    return result;
}