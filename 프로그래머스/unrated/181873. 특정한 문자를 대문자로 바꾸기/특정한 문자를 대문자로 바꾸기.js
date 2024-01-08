function solution(my_string, alp) {
    let str = my_string;
    if(my_string.includes(alp)) str = my_string.replaceAll(alp , alp.toUpperCase()); 
    return str;
}