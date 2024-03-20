function solution(people, limit) {
    // 몸무게순으로 정렬
    people.sort((a, b) => a - b);
    
    let boats = 0;
    let left = 0;
    let right = people.length - 1;
    
    while (left <= right) {
        // 가장 무거운 사람과 가장 가벼운 사람을 합쳐서 태울 수 있는지 확인
        if (people[left] + people[right] <= limit) {
            left++; // 가장 가벼운 사람을 태웠으니 다음으로 넘어감
        }
        right--; // 가장 무거운 사람은 항상 태워야 하므로 다음으로 넘어감
        boats++; // 구명보트 개수 증가
    }
    
    return boats;
}