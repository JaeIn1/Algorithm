from collections import deque
n , m = map(int , input().split())
graph = []

for i in range(n):
    graph.append(list(map(int , input())))
    
dx = [-1 , 1 , 0 , 0]
dy = [0 , 0 , -1 , 1]

visited = [[False for _ in range(m)] for _ in range(n)]

def bfs(x , y):
    queue = deque([(x, y, 1)])
    visited[x][y] = True

    while len(queue):
        x , y , value = queue.popleft() 
        for i in range(4):
            nx , ny = x + dx[i] , y + dy[i]
            if nx == n - 1 and ny == m - 1: return value + 1
            if nx >= 0 and nx < n and ny >= 0 and ny < m and graph[nx][ny] == 1: 
                if not visited[nx][ny]:
                    visited[nx][ny] = True
                    queue.append((nx , ny , value + 1))

    
result = bfs(0 , 0)
print(result)
        
    
