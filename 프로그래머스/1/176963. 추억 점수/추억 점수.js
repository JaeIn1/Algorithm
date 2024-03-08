function solution(name, yearning, photo) {
    let map = new Map();
    for(let i = 0; i < name.length; i++) map.set(name[i] , yearning[i]);
    let answer = [];
    
    photo.forEach((e) =>{
        let sum = 0;
        e.forEach((e) =>{
            sum += map.get(e) ? map.get(e) : 0;
        })
        answer.push(sum);
    })
    return answer;
}