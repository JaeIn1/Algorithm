function solution(park, routes) {
    let width = park[0].length;
    let height = park.length;
    let start;
    for(let i = 0 ; i < height; i++){
        if(park[i].indexOf("S") !== -1){
            start = [i, park[i].indexOf("S")];
            break;
        }
    }
    
    const directions = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };
    
    routes.forEach((e , i) =>{
        let [r , n] = e.split(" ");
        let distance = parseInt(n);
        let [x , y] = start;
        let step = 0;
        
        while(step < distance){
            x += directions[r][0];
            y += directions[r][1];
            if(x < 0 || x >= height || y < 0 || y >= width || park[x][y] === "X") break;
            step++
        }
        
        if(step === distance) start = [x , y];
        
    })

  return start;
}