function solution(ingredient) {
    var answer = 0;
    let arr = [];
    ingredient.forEach((ing, idx)=>{
        arr.push(ing);  
       
        if(arr.length >= 4){
            const find = arr.slice(-4).join('');
            if(find === '1231'){
                arr.pop();
                arr.pop();
                arr.pop();
                arr.pop();   
                answer++;
            }
        } 
    })
    return answer;
}