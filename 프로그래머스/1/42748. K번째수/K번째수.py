def solution(array, commands):
    result = []
    
    for c in commands:
        s , e , n = c
        tmep = sorted(array[s-1:e])
        result.append(tmep[n - 1])
        
    return result