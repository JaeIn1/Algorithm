from heapq import heappop , heappush

 
def solution(N, road, K):
    answer = 0
    
    distanse = [1e9] * (N + 1)
    
    graph = [[] for i in range(N + 1)]
    for s , e , d in road:
        graph[s].append((e , d))
        graph[e].append((s , d))
        
    
    distanse[1] = 0
    h = [(1 , 0)]
    
    while h:
        node , dis = heappop(h)
        
        # continue를 하는이유 : 
        if distanse[node] < dis:
            continue
            
        for next_node , next_dis in graph[node]:
            d = dis + next_dis
            if distanse[next_node] > d:
                distanse[next_node] = d
                heappush(h , (next_node , d))
                 
                    
    for d in distanse[1:]:
        if d <= K:
            answer += 1
            
    return answer