function solution(survey, choices) {
    var answer = '';
    let indi = new Map();
    ['R','T', 'C','F', 'J','M', 'A', 'N'].forEach(item => indi.set(item, 0));

    choices.forEach((item,index) => {
        let [A, B] = survey[index].split('');
        if(item > 4) indi.set(B, indi.get(B)+item-4);
        else if(item < 4) indi.set(A, indi.get(A)+4-item);
    })
    answer += indi.get('R') >= indi.get('T') ? 'R' : 'T';
    answer += indi.get('C') >= indi.get('F') ? 'C' : 'F';
    answer += indi.get('J') >= indi.get('M') ? 'J' : 'M';
    answer += indi.get('A') >= indi.get('N') ? 'A' : 'N';
    return answer;
}