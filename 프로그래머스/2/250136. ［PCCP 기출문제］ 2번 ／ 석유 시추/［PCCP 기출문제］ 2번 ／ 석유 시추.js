function solution(land) {
    class Queue{
    constructor(){
        this.q = [];
        this.head = -1;
        this.tail = -1;
    }
    empty(){
        return this.head === this.tail;
    }
    size(){
        return this.tail - this.head;
    }
    push(item){
        this.q.push(item);
        this.tail++;
    }
    pop(){
        if(this.empty()) console.log("empty");
        return this.q[++this.head];
    }
}
    var answer = [];
    
    let n = land.length;
    let m = land[0].length;
    let visited = Array.from(Array(n) , () => new Array(m).fill(0));
    let dp = new Array(m).fill(0);
    let queue = new Queue();
    
    let dx = [1 , -1 , 0 , 0];
    let dy = [0 , 0 , 1 , -1];
    
    function inRange(x , y){
        return 0 <= x && x < n && 0 <= y && y < m;
    }
    
    function canGo(x , y){
        return inRange(x , y) && !visited[x][y] && land[x][y] === 1;
    }
    
    function bfs(row , col , visited){
        let count = 1;
        queue.push([row , col]);
        visited[row][col] = true;
        let vi = new Set();
        
        while(queue.size() > 0){
            let [a , b] = queue.pop();
            vi.add(b);
            for(let i = 0; i < 4; i++){
                let nx = a + dx[i];
                let ny = b + dy[i];
                if(canGo(nx,  ny)){
                    vi.add(ny);
                    queue.push([nx , ny]);
                    visited[nx][ny] = true;
                    count++;
                }
            }
        }
        for(let v of vi){
            dp[v] += count;
        }
        
        return count;
    }
    
    function move(col , visited){
        let num = 0;
        for(let row = 0; row < n; row++){
            if(land[row][col] === 1 && !visited[row][col]){
                let t = bfs(row , col , visited);
            }
            else continue;
        }
    }
    
    for(let i = 0; i < m; i++){
        move(i , visited);
    }
    
    return Math.max(...dp);
}