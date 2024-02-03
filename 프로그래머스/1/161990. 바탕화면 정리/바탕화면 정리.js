function solution(wallpaper) {
    var answer = [];
    let start = wallpaper.length;
    let end = 0;
    let min = 50;
    let max = 0;
    let index = 0;
    let lastIndex = 0;
    
    wallpaper.forEach((e , i) => {
        if(e.split("").indexOf("#") > -1){
            index = e.split("").indexOf("#");
            lastIndex = e.split("").lastIndexOf("#");
            start = Math.min(start, i);
            end = Math.max(end, i+1);
            min = Math.min(min, index);
            max = Math.max(max , lastIndex + 1); 
        }
        answer = [start , min , end , max];
    })
    return answer;
}