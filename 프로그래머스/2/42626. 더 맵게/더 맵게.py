from heapq import heappop , heappush

def solution(scoville, K):
    h = []
    for i in scoville:
        heappush(h , i)
        
    answer = 0

    while True:
        
        if h[0] >= K: break # 아직 정렬된 상태는 아니지만 항상 맨 앞은 가장 작은 수로 정해진다.
        if len(h) < 2:
            return -1
        
        first = heappop(h)
        second = heappop(h)
        heappush(h, first + (second * 2))
        
        answer += 1
    
    return answer
