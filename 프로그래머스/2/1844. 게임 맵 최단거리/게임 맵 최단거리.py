from collections import deque

def solution(maps):
    
    x_len = len(maps)
    y_len = len(maps[0])
    
    visited = [[0] * y_len for _ in range(x_len)]
    
    dx = [1 , -1 , 0 , 0]
    dy = [0 , 0 , -1 ,1]
    
    def bfs(x , y):
        q = deque()
        q.append((x, y, 1))
        visited[x][y] = 1
        
        while q:
            cx , cy , ct = q.popleft()
            
            if cx == x_len - 1 and cy == y_len - 1:
                return ct
            
            for i in range(4):
                nx = cx + dx[i]
                ny = cy + dy[i]
                
                if 0 <= nx < x_len and 0 <= ny < y_len:
                    if visited[nx][ny] == 0 and maps[nx][ny] == 1:
                        q.append((nx, ny, ct + 1))
                        visited[nx][ny] = 1
        return -1
    
    return bfs(0, 0)