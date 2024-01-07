function solution(arr) {
    let index = [];
    arr.map((e , i) => {
        if(e === 2) index.push(i);
    })
    console.log(index);
    return index.length > 0 ? arr.slice(index[0] , index[index.length-1]+1) : [-1];
}