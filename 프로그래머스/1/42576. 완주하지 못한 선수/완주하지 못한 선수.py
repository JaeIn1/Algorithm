from collections import Counter

def solution(participant, completion):
    d = dict(Counter(participant))
    
    for c in completion:
        if c in d:
            d[c] -= 1
            
    
    for key , value in d.items():
        if value > 0:
            return key
        
    
    
    
