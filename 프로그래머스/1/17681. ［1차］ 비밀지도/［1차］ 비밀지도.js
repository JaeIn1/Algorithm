function solution(n, arr1, arr2) {
    let answer = [];
    let result = new Array(arr1.length).fill([]);
    arr1.forEach((e , i) =>{
      let t = e.toString(2).padStart(n, "0");
      let a = t.split("").map(Number)
      let b = []
      
      for(let j = 0; j < a.length; j++){
          if(a[j] === 0) b.push(" ");
          else b.push("#");
      }
      result[i] = b;
    });
    
    arr2.forEach((e , i) =>{
      let t = e.toString(2).padStart(n, "0")
      let a = t.split("").map(Number)
      let b = []
      
      for(let j = 0; j < a.length; j++){
          if(result[i][j] === "#") continue;
          else if(result[i][j] === " " && a[j] === 1) result[i][j] = "#";
      }
    });
    result.forEach((e , i) =>{
        let r = e.join("");
        answer.push(r);
    })
    return answer;
}