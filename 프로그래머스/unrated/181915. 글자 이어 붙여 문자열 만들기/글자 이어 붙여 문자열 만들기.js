function solution(my_string, index_list) {
    let result = [];
    result = index_list.map((e) => my_string[e]);
    
    return result.join("");
}