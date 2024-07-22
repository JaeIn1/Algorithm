function solution(n, computers) {
    var answer = 0;
    let visited = new Array(computers.length + 1);
    visited[0] = false;
    
    
    function bfs(x){
        visited[x] = true;
        for(let i = 0; i < computers[x].length; i++){
            if(!visited[i] && computers[x][i] === 1){
                bfs(i);
            }
        }
    }
    
    for(let i = 0; i < computers.length; i++){
        if(!visited[i]){
            bfs(i);
            answer++;
        }
        
    }
    return answer;
}