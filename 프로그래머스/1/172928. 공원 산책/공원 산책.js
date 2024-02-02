function solution(park, routes) {
  const parkHigh = park.length;
  const parkWidth = park[0].length;

  // 시작지점 인덱스 찾기
 let start;
  for (let i = 0; i < parkHigh; i++) {
    if (park[i].indexOf("S") !== -1) {
      start = [i, park[i].indexOf("S")];
      break;
    }
  }
    
  // 각 명령어로 이동할 방향
    const directions = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };
    

  for (const route of routes) {
    const [dir, distanceStr] = route.split(" ");
    let distance = parseInt(distanceStr);
    let [x, y] = start;

    let step = 0;
    
    // 명령어에 적힌 distance만큼 모두 이동할 때까지 반복
    while (step < distance) {
      x += directions[dir][0];
      y += directions[dir][1]; 
      if(x < 0 || parkHigh <= x || y < 0 || parkWidth <= y || park[x][y] === "X") break;
      step++;
    }
      
    if (step === distance) start = [x, y];
  }

  return start;
}