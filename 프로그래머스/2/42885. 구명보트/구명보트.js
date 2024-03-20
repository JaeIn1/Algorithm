function solution(people, limit) {
    const sortPeople = people.sort((a,b)=>a-b);
    let answer = 0;
    let left = 0, right = people.length-1;
    
    while (left <= right) {
        if (sortPeople[left] + sortPeople[right] <= limit) {
            left++;
            right--;
        } else {
            right--;
        }
        answer++;
    }
    return answer;
}