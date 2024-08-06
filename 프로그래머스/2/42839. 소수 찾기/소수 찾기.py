from itertools import permutations

def check(num):
    if num <= 1: return False
    for j in range(2 , num):
        if num % j == 0: return False
    return True

def solution(numbers):
        
    unique_numbers = set()
    answer = 0
    for i in range(1, len(numbers) + 1):
        for perm in permutations(numbers, i):
            num_str = ''.join(perm)
            unique_numbers.add(int(num_str)) 
            
    for l in list(unique_numbers):
        print(l)
        if check(l): answer += 1
        
    return answer

