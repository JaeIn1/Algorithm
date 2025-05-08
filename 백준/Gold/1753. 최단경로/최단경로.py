import sys
import heapq

input = sys.stdin.readline

V , E = map(int , input().split())
start = int(input())
dist = [1e9 for _ in range(V + 1)]

graph = [[] for _ in range(V + 1)]

for _ in range(E):
    a , b , c = map(int , input().split())
    graph[a].append([b , c])
    

q = []
dist[start] = 0
heapq.heappush(q , [0 , start])

while q:
    _w , node = heapq.heappop(q)
    
    for nxt , weight in graph[node]:
        if dist[node] + weight < dist[nxt]:
            dist[nxt] = dist[node] + weight
            heapq.heappush(q , [dist[nxt],  nxt])
            
        
        
for i in range(1 , len(dist)):
    if dist[i] == 1e9:
        print('INF')
    else:
        print(dist[i])
