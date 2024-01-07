function solution(todo_list, finished) {
    let result = [];
    finished.forEach((e , i) => {
        if(e === false) result.push(todo_list[i]);
    })
    return result;
}