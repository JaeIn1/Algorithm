function solution(N, road, K) {
    var answer = 0;
    const arr = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
    const lines = Array.from(Array(N + 1), () => []);

  road.forEach((value) => {
    // 연결되어 있는 경로를 모두 lines배열에 저장한다.
    let [a, b, c] = value;
    lines[a].push({ to: b, cost: c });
    lines[b].push({ to: a, cost: c });
  });
    
    let queue = [{ to: 1, cost: 0 }];
    arr[1] = 0;
    
    while (queue.length) {
    // queue가 빈 배열이 될 때까지 반복
    let { to } = queue.pop();
    for(let line of lines[to]){
        if(arr[line.to] > arr[to] + line.cost){
            arr[line.to] = arr[to] + line.cost;
            queue.push(line);
        }
    }
  }
    return arr.filter((e) => e <= K).length;
}