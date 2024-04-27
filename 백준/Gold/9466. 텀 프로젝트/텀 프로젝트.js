let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCases = Number(input[0]); // 테스트 케이스의 수
let line = 1;
while (testCases--) {
  let n = Number(input[line]);
  let graph = [0, ...input[line + 1].split(" ").map(Number)];
  let visited = new Array(n + 1).fill(false);
  let finished = new Array(n + 1).fill(false);
  let result = [];
  for (let x = 1; x <= n; x++) {
    // 각 위치에서 연결 요소 계산 및 사이클 판단
    if (!visited[x]) dfs(x, graph, visited, finished, result);
  }
  line += 2; // 다음 테스트 케이스로 이동
  console.log(n - result.length);
}

function dfs(x, graph, visited, finished, result) {
  visited[x] = true; // 현재 노드 방문 처리
  let y = graph[x]; // 다음 노드
  if (!visited[y]) {
    // 다음 노드를 아직 방문하지 않았다면
    dfs(y, graph, visited, finished, result);
  }
  // 다음 노드를 방문한 적 있고, 완료되지 않았다면
  else if (!finished[y]) {
    // 사이클이 발생한 것이므로 사이클에 포함된 노드 저장
    while (y != x) {
      result.push(y);
      y = graph[y];
    }
    result.push(x);
  }
  finished[x] = true; // 현재 노드의 처리가 완료됨
}
