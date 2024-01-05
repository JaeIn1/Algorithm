function solution(l, r) {
    const result = [];
    for(let i = l ; i <= r ; i++) {
        if(i % 5 !== 0) continue;
        const charI = String(i)
        if(![...charI].every(a => a === '5' || a === '0')) continue
        result.push(i)
    }
    return result.length ? result : [-1]
}