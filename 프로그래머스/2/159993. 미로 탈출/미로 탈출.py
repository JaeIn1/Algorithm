from collections import deque
    
def bfs(start, end, maps):
    answer = 0
    
    dx, dy = [-1, 1, 0, 0], [0, 0, -1, 1]
    row, col = len(maps), len(maps[0])
                              
    check = [[0] * col for _ in range(row)]
    
    for i in range(len(maps)):
        for j in range(len(maps[0])):
            if maps[i][j] == start:
                start = [i, j]
            elif maps[i][j] == end:
                end = [i, j]
    
    x, y = start[0], start[1]

    q = deque()
    q.append([x, y, 0])    
    
    while(q):
        x, y, res = q.popleft()
        
        if x == end[0] and y == end[1]:
            return res

        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            
            if 0 <= nx < row and 0 <= ny < col:
                if check[nx][ny] == 0 and maps[nx][ny] != "X":
                    check[nx][ny] = 1
                    q.append([nx, ny, res+1])
            
    return -1
                              
def solution(maps):
    to_lever = bfs("S", "L", maps)  # '시작 지점 -> 레버' 경로의 거리 구하기
    to_end = bfs("L", "E", maps)    # '레버 -> 출구' 경로의 거리 구하기
         
    if to_lever != -1 and to_end != -1:
        return to_lever + to_end
    
    return -1