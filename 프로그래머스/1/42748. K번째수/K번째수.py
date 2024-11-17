def solution(array, commands):
    
    result = []
    for s , e , k in commands:
        temp = sorted(array[s - 1 : e])
        result.append(temp[k - 1])
        
    return result