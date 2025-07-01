import heapq as hq

def solution(scoville, K):
    answer = 0
    hq.heapify(scoville)
    
    while True:
        first = hq.heappop(scoville)
        if first >= K:
            break
        
        if len(scoville) < 1:
            return -1
        
        second = hq.heappop(scoville)
        hq.heappush(scoville, first + second*2)
        answer += 1
        
    return answer