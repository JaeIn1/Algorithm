function solution(name, yearning, photo) {
    let score = new Map();
    
    name.forEach((e , i) => {
        score.set(e,  yearning[i]);
    });
    
    return photo.map((e) => e.reduce((a , n) => a + (score.get(n) ?? 0) , 0));
}