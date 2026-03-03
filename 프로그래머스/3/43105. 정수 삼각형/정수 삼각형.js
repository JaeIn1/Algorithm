function solution(triangle) {
    var answer = 0;
    const MAX_LEN = triangle.length;
    
    let dp = Array.from({length: MAX_LEN}, () => Array(MAX_LEN).fill(0));
    
    dp[0][0] = triangle[0][0];
    
    
    for(let i = 0; i < MAX_LEN - 1; i++){
        for(let j = 0; j <= i; j++){
            dp[i + 1][j] = Math.max(dp[i][j] + triangle[i + 1][j], dp[i + 1][j]);
            dp[i + 1][j + 1] = Math.max(dp[i][j] + triangle[i + 1][j + 1], dp[i + 1][j + 1]);
        }
    }
    
    return Math.max(...dp[MAX_LEN - 1]);
}


