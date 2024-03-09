function solution(survey, choices) {
    var answer = '';
    let map = new Map();
    ['R','T', 'C','F', 'J','M', 'A', 'N'].forEach((item) => map.set(item , 0));
    choices.forEach((e,i) => {
        let [a,b] = survey[i].split('');
        let num = choices[i];
        if(e > 4) map.set(b , map.get(b) + num - 4);
        else if(e < 4) map.set(a , map.get(a) + 4 - num);
    });
    answer += map.get('R') >= map.get('T') ? 'R' : 'T';
    answer += map.get('C') >= map.get('F') ? 'C' : 'F';
    answer += map.get('J') >= map.get('M') ? 'J' : 'M';
    answer += map.get('A') >= map.get('N') ? 'A' : 'N';
    
    return answer;
}