def solution(array, commands):
    result = []
    
    for c in commands:
        s , e , k = c
        sort_arr = sorted(array[s-1 : e])
        result.append(sort_arr[k - 1])
    
        
    return result