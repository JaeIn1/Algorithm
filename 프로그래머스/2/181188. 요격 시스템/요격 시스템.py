def solution(targets):
    answer = 0
    
    targets = sorted(targets , key = lambda x : x[1])
    
    end = 0
    for t in targets:
        s , e = t
        if s >= end:
            answer += 1
            end = e
        
            
    return answer