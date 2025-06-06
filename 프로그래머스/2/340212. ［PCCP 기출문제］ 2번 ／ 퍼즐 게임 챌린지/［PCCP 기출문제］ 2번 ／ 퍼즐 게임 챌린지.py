def solution(diffs, times, limit):
    answer = max(diffs)
    
    start = min(diffs)
    end = max(diffs)
    

    while start <= end:
        mid = (start + end) // 2
        
        temp = 0
        
        for i in range(len(diffs)):
            # 숙련도가 더 크거나 같은경우
            if mid >= diffs[i]:
                temp += times[i]
            
            # 숙련도가 더 작은 경우
            else:
                cnt = diffs[i] - mid
                temp += (times[i - 1] + times[i]) * cnt
                temp += times[i]
                
        if temp > limit:
            start = mid + 1
        else:
            end = mid - 1
            answer = min(mid , answer)
    
    return answer


