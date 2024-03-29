function solution(str1, str2) {
    var answer = 0;
    function explode(text){
        let result = [];
        for(let i = 0; i < text.length - 1; i++){
          let node = text.substr(i,  2);
            if(node.match(/^[a-zA-Z]{2}/)){
                result.push(node.toLowerCase());
            }
        }
        return result;
    }
    
    let arr1 = explode(str1);
    let arr2 = explode(str2);
  const set = new Set([...arr1, ...arr2]);
  let union = 0;
  let intersection = 0;

  //같은 원소를 검사해서 많은  쪽은 union에 더하고 적은쪽은 intersection에 더한다.
  set.forEach(item => {
    const has1 = arr1.filter(x => x === item).length;
    const has2 = arr2.filter(x => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  })
  return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
    
    
    return answer;
} 