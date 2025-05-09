function solution(maps) {
    let n = maps.length;
    let m = maps[0].length;
    let visited = Array.from(Array(n), () => new Array(m).fill(false));
    let q = [];

    let dx = [1, -1, 0, 0];
    let dy = [0, 0, 1, -1];

    function bfs() {
        visited[0][0] = true;
        q.push([0, 0, 1]);

        while (q.length > 0) {
            let [cx, cy, dis] = q.shift(); // BFS는 shift

            if (cx === n - 1 && cy === m - 1) {
                return dis;
            }

            for (let i = 0; i < 4; i++) {
                let nx = cx + dx[i];
                let ny = cy + dy[i];

                if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
                    if (!visited[nx][ny] && maps[nx][ny] === 1) {
                        visited[nx][ny] = true;
                        q.push([nx, ny, dis + 1]);
                    }
                }
            }
        }

        return -1;
    }

    return bfs();
}
