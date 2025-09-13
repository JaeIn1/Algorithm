def solution(array, commands):
    answer = []
    
    for c in commands:
        s, e, t = c
        
        temp = sorted(array[s-1:e])
        print(temp)
        answer.append(temp[t-1])
        
    return answer