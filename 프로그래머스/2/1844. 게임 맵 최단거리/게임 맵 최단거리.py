from collections import deque

def checkRange(x , y , x_h , y_h):
    return x >= x_h or x < 0 or y >= y_h or y < 0


def bfs(maps ,visited , x_h , y_h):
    dx = [1 , -1 , 0 , 0]
    dy = [0 , 0 , -1 , 1]

    queue = deque([(0, 0, 1)])
    
    while len(queue) > 0:
        x , y , value = queue.popleft()
        
        for i in range(4):
            nx , ny = x + dx[i] , y + dy[i]
            if not checkRange(nx, ny, x_h, y_h) and not visited[nx][ny] and maps[nx][ny] == 1:
                queue.append([nx , ny , value + 1])
                visited[nx][ny] = True
                if nx == x_h - 1 and ny == y_h - 1: return value + 1
            
                             
def solution(maps):
    x_h , y_h = len(maps) , len(maps[0])
    visited = [[False] * y_h for _ in range(x_h)]
    result = bfs(maps , visited , x_h , y_h)
    return result if result else -1