def solution(participant, completion):
    
    d = dict()
    
    for p in participant:
        if p in d:
            d[p] += 1
        else:
            d[p] = 1
    
    for c in completion:
        if c in d:
            d[c] -= 1
            
    for key, value in d.items():
        if value == 1:
            return key
            