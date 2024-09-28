

def dfs(idx, numbers, target , value):
    if len(numbers) == idx:
        if value == target: 
            return 1
        return 0
    
    temp = 0
    temp += dfs(idx + 1 , numbers , target , value + numbers[idx])
    temp += dfs(idx + 1 , numbers , target , value - numbers[idx])
    
    return temp

def solution(numbers, target):
    answer = dfs(0, numbers, target , 0)
    return answer