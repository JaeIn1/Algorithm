import heapq

def solution(scoville, K):
    heapq.heapify(scoville)
    answer = 0

    while True:
        
        if scoville[0] >= K: break
        if len(scoville) < 2:
            return -1
        
        first = heapq.heappop(scoville)
        second = heapq.heappop(scoville)
        heapq.heappush(scoville, first + (second * 2))
        
        answer += 1
    
    return answer
