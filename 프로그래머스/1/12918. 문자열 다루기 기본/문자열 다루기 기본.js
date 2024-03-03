function solution(s) {
    var answer = true; // 기본적으로 true로 설정

    // 문자열의 각 문자가 숫자인지 확인
    for (var i = 0; i < s.length; i++) {
        // 현재 문자가 숫자가 아닌 경우
        if (isNaN(parseInt(s[i]))) {
            answer = false; // 결과를 false로 설정
            break; // 더 이상 확인할 필요 없으므로 반복문 탈출
        }
    }

    // 문자열의 길이가 4 또는 6인지 확인
    if (s.length !== 4 && s.length !== 6) {
        answer = false; // 길이가 4 또는 6이 아니면 false로 설정
    }

    return answer;
}