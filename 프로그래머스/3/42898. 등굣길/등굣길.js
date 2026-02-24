function solution(m, n, puddles) {
    var answer = 0;
    
    let dp = Array.from(Array(n + 1), () => new Array(m + 1).fill(0));
    
    
    if(puddles.length > 0){
        for(let i = 0; i < puddles.length; i++){
            let [a, b] = puddles[i];
        
            dp[b][a] = -1;
        }
    }
    
    dp[1][1] = 1;
    
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= m; j++){
            
            if (i === 1 && j === 1) continue;
            
            if(dp[i][j] === -1) {
                dp[i][j] = 0;
                continue;
            }
            else{
                dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1000000007;
            }
        
        }
    }
    
    return dp[n][m];
    
    
    
    
     
    
    
    
    
    
    return answer;
}