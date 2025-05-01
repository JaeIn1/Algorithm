from collections import Counter

def solution(participant, completion):
    answer = 0
    
    d = dict(Counter(participant))
    
    for c in completion:
        if c in d:
            d[c] -= 1
    
    for k , v in d.items():
        if v > 0:
            return k

    

  
    return answer
    
    
    
