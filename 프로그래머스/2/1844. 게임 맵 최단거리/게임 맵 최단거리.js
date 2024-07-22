function solution(maps) {
    var answer = 0;
    
    class Queue{
        constructor() {
            this.q = [];
            this.head = -1;
            this.tail = -1;
        }
        empty() {
            return this.head === this.tail;
        }
        size() {
            return this.tail - this.head;
        }
        push(item){
            this.q.push(item);
            this.tail++;
        }
        pop() {
        if (this.empty()) {
            throw new Error("Queue is empty");
        }
        return this.q[++this.head];
    }
    }
    
    let n = maps.length;
    let m = maps[0].length;
    let visited = Array.from(Array(n) , () => new Array(m).fill(false));
    let queue = new Queue();
    let flag = false;
    let dx = [1 ,-1 , 0 , 0];
    let dy = [0 , 0 , 1,  -1];
    
    function inRange(x , y){
        return 0 <= x && x < n && 0 <= y && y < m;
    }
    
    function canGo(x , y){
        return inRange(x , y) && maps[x][y] === 1 && !visited[x][y];
    }
    
    function bfs(){
        visited[0][0] = true;
        queue.push([0 , 0 , 1]);
        
        while(queue.size() > 0){
            let [x , y,  dis] = queue.pop();
            if(x === n - 1 && y === m - 1){
                flag = true;
                return dis;
            }
            for(let i = 0; i < 4; i++){
                let nx = x + dx[i];
                let ny = y + dy[i];
                if(canGo(nx , ny)){
                    queue.push([nx , ny , dis + 1]);
                    visited[nx][ny]= true;
                }
            }
        }
        return -1;
    }
    
    return bfs();
}