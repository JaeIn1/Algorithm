function solution(a, b) {
    var answer = '';
    const obj = {
        0 : "SUN",
        1 : "MON",
        2 : "TUE",
        3 : "WED",
        4 : "THU",
        5 : "FRI",
        6 : "SAT",
    }
    let date = new Date(`2016-${a}-${b}`);
    answer = obj[date.getDay()];
    return answer;
}