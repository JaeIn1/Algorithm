function solution(arr) {
    let prevArr = arr;
    let num = 0;

    while(true){
        let next = prevArr.map((e) =>{
           if(e >= 50 && e % 2 === 0) return e / 2;
           if(e < 50 && e % 2 === 1) return e * 2 + 1;
           return e;
           })
        const isAllSame = prevArr.every((e,i) => e === next[i]);
        if(isAllSame) break;     
        num+=1;
        prevArr = next;
    }
    return num;
}