function solution(name, yearning, photo) {
    var answer = [];
    
    let obj = {};
    for(let i = 0; i< name.length; i++){
        obj[name[i]] = yearning[i];
    }
    for(let i = 0; i< photo.length; i++){
        let sum = 0;
        for(let j of photo[i]){
            if(obj[j]) sum += obj[j];
            else continue;
        }
        answer.push(sum);
    }
    return answer;
}