function solution(nums) {
    var answer = 0;
    
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            for(let k = j + 1; k < nums.length; k++){
                let n = nums[i] + nums[j] + nums[k];
                let cnt = 0;
                for(let t = 1; t <= n; t++){
                    if(n % t === 0) cnt++;
                }
                if(cnt === 2) answer++;
            }
        }
    }
    
    return answer;
}