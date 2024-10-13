def solution(n):
    answer = 0
    start_num = 1
    sum_val = 0
    
    for start_num in range(1, n + 1):
        sum_val = 0
        for i in range(start_num, n + 1):
            sum_val += i
            if sum_val == n:
                answer += 1
                break
            elif sum_val > n:
                break
    
    return answer
