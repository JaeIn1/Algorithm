function solution(dirs) {
    var answer = 0;
    let visited = new Set();
    
    let dir = {
        "U" : 0,
        "D" : 1,
        "R" : 2,
        "L" : 3,
    }
    let dirNum = 0;
    let x = 5;
    let y = 5;
    let dx = [-1 , 1 , 0 , 0];
    let dy = [0 , 0 , 1 , -1];
    
    function inRange(x , y){
        return 0 <= x && x <= 10 && 0 <= y && y <= 10; 
    }

    
    function move(a , b , dirNum){
        let nx = a + dx[dirNum];
        let ny = b + dy[dirNum];
        
        if(inRange(nx , ny)){
            visited.add(`${a}${b}${nx}${ny}`);
            visited.add(`${nx}${ny}${a}${b}`);
            x = nx;
            y = ny;
        }
        
    }
    
    dirs.split("").forEach((e ,i) => {
        dirNum = dir[e];
        move(x , y , dirNum);
    })
    
    return visited.size / 2
}