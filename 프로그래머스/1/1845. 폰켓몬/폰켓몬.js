function solution(nums) {
    var answer = 0;
    let n = nums.length / 2;
    let set = new Set(nums);
    
    answer = Math.min(set.size , n);
    return answer;
}