function solution(wallpaper) {
    let startY = wallpaper[0].length;
    let startX = wallpaper.length;
    let endY = 0;
    let endX = 0;
    
    for(let i = 0; i < wallpaper.length; i++){
        let arr = wallpaper[i].split("");
        for(let j = 0; j < arr.length; j++){
            if(arr[j] === '#'){
                startY = Math.min(startY , j);
                startX = Math.min(startX , i);
                endY = Math.max(endY , j + 1);
                endX = Math.max(endX , i + 1);
            }
        } 
    }
    
    return [startX , startY , endX , endY];
}