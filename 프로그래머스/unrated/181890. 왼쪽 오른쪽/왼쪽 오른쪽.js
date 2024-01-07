function solution(str_list) {
    for(let i of str_list){
        if(i === "l"){
            let index = str_list.indexOf(i);
            return str_list.slice(0 , index);
        }
        if(i === "r"){
            let index = str_list.indexOf(i);
            return str_list.slice(index+1);
        }
    }
    return [];
}