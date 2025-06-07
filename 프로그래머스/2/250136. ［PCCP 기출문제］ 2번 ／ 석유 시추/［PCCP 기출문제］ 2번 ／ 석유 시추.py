from collections import deque


def solution(land):
    answer = 0
    n, m = len(land), len(land[0])
    
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    
    # 각 열의 기름 총량
    result = [0 for i in range(m)]
    # 방문 기록
    visited = [[0 for _ in range(m)] for _ in range(n)]
    
    def bfs(pos):
        a, b = pos
        cnt = 1
        visited[a][b] = 1

        q = deque()
        q.append(pos)
        
        # 석유가 존재하는 열 저장 (중복 방지)
        oil_covered = set()
        oil_covered.add(b)
        
        while q:
            x, y = q.popleft()
            for i in range(4):
                nx, ny = x + dx[i], y + dy[i]
                if 0 <= nx < n and 0 <= ny < m and visited[nx][ny] == 0 and land[nx][ny] == 1:
                    q.append((nx, ny))
                    visited[nx][ny] = 1
                    cnt += 1
                    oil_covered.add(ny)
                    
        for c in oil_covered:
            result[c] += cnt
            
    for i in range(m):
        for j in range(n):
            if land[j][i] == 1 and not visited[j][i]:
                bfs((j, i))
    
    answer = max(result)
    
    return answer