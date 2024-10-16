from heapq import heappop , heappush , heapify

def solution(scoville, K):
    heapify(scoville)
    answer = 0

    while True:
        
        if scoville[0] >= K: break
        if len(scoville) < 2:
            return -1
        
        first = heappop(scoville)
        second = heappop(scoville)
        heappush(scoville, first + (second * 2))
        
        answer += 1
    
    return answer
