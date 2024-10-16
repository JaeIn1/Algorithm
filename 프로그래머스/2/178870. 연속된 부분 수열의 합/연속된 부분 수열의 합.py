def solution(sequence, k):
    start, end = 0, 0
    cur_sum = sequence[0]
    answer = [0 , len(sequence)]
    
    while end < len(sequence):
        if cur_sum == k:
            if (end - start) < (answer[1] - answer[0]):
                answer = [start , end]
                
        if cur_sum >= k:
            cur_sum -= sequence[start]
            start += 1
        else:
            end += 1
            if end < len(sequence):
                cur_sum += sequence[end]
         
    return answer
