
def dfs(a, b, idx, info, n, m , dp):
    
    if idx == len(info):
        if a < n and b < m:
            return a
        else:
            return float('inf')
        
    if (a , b , idx) in dp:
        return dp[(a , b , idx)]
        
        
    if a >= n or b >= m:
        dp[(a, b, idx)] = float('inf')
        return float('inf')
    
    # a가 선택한 경우
    a_choice = dfs(a + info[idx][0] , b , idx + 1 , info , n , m , dp)
    
    # b가 선택한 경우
    b_choice = dfs(a , b + info[idx][1] , idx + 1 , info , n , m , dp)
    
    temp = min(a_choice , b_choice)
    
    dp[(a, b, idx)] = temp
    return temp
    

        
def solution(info, n, m):
    dp = {}
    
    result = dfs(0 , 0 , 0 , info , n , m , dp)
    if result == float('inf'):
        return -1
    else:
        return result