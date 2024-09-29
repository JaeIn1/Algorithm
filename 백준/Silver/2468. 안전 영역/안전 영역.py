import sys
sys.setrecursionlimit(100000)

n = int(sys.stdin.readline().rstrip())
graph = [list(map(int, sys.stdin.readline().split())) for _ in range(n)]

dx = [-1 , 1 , 0 , 0]
dy = [0 , 0 , -1 , 1]

def dfs(x, y , h):
    for i in range(4):
        nx , ny = x + dx[i] , y + dy[i]
        if 0 <= nx < n and 0 <= ny < n and not visited[nx][ny] and graph[nx][ny] > h:
            visited[nx][ny] = True
            dfs(nx , ny , h)
            
result = 0

for h in range(max(map(max, graph))):
    area = 0
    visited = [[False for _ in range(n)] for _ in range(n)]
    for i in range(n):
        for j in range(n):
            if not visited[i][j] and graph[i][j] > h:
                area += 1
                visited[i][j] = True
                dfs(i, j, h)
    result = max(result, area)

print(result)

        
    
