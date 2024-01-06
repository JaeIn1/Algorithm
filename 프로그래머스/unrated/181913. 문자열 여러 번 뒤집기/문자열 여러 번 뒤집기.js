function solution(my_string, queries) {
    for(let i of queries){
        const [start , end] = i;
        const reverseStr = my_string.substring(start , end + 1).split("").reverse().join("");
        my_string = my_string.substring(0 , start) + reverseStr + my_string.substring(end +1);
    }
    return my_string;
}