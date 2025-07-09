N = int(input())
M = int(input())


graph = [[] for _ in range(N + 1)]
visited = [0] * (N + 1)

for _ in range(M):
    s, e = map(int, input().split())
    graph[s].append(e)
    graph[e].append(s)
    
    
count = 0

def dfs(start):
    global count
    visited[start] = 1
    
    for g in graph[start]:
        if not visited[g]:
            count += 1
            dfs(g)
            

dfs(1)
print(count)