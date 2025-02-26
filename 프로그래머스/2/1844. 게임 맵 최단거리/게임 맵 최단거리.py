from collections import deque

     
def solution(maps):
    answer = 0
    l_x = len(maps)
    l_y = len(maps[0])
    
    visite = [[0] * l_y for _ in range(l_x)]
    dx = [-1 ,1 , 0 , 0]
    dy = [0 , 0  ,1 , -1]
    
    
    def bfs(x , y):
        queue = deque([(x , y , 1)])
        
        while queue:
            cx , cy , ct = queue.popleft()
            if cx == l_x - 1 and cy == l_y - 1:
                return ct
            
            for i in range(4):
                nx = cx + dx[i]
                ny = cy + dy[i]
                
                if 0 <= nx < l_x and 0 <= ny < l_y:
                    if maps[nx][ny] == 1 and visite[nx][ny] == 0:
                        queue.append((nx , ny , ct + 1))
                        visite[nx][ny] = 1
            
        return - 1
    
    return bfs(0 , 0)