from itertools import permutations

def solution(k, dungeons):
    maxCount = 0
    perm = list(permutations(dungeons , len(dungeons)))
    for i in perm:
        temp = k
        count = 0
        for j in i:
            Minimum , minus = list(j)
            if temp >= Minimum and temp >= minus:
                temp -= minus
                count += 1
        maxCount = max(maxCount , count)
                
    return maxCount