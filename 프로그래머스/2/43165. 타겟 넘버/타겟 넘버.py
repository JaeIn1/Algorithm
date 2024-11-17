def solution(numbers, target):
    
    answer = 0
    def dfs(idx , temp):
        nonlocal answer
        if idx == len(numbers):
            if temp == target:
                answer += 1
                return True
            return False
        
        # 음수일 경우
        dfs(idx + 1 , temp - numbers[idx])
            
        # 양수일 경우
        dfs(idx + 1 , temp + numbers[idx])
        
    dfs(0 , 0)
    
    return answer