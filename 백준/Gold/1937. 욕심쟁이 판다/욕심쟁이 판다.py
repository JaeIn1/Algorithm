import sys
sys.setrecursionlimit(99999999)

N = int(input())

forest = [list(map(int, input().split())) for _ in range(N)]

dx = [0,0,-1,1]
dy = [1,-1,0,0]

dp = [[0 for _ in range(N)] for _ in range(N)]


def dfs(x , y):
    
    if dp[x][y] != 0:
        return dp[x][y]
    
    dp[x][y] = 1
    
    for i in range(4):
        nx , ny = x + dx[i] , y + dy[i]
        if 0 <= nx < N and 0 <= ny < N:
            if forest[x][y] < forest[nx][ny]:
                dp[x][y] = max(dfs(nx, ny) + 1 , dp[x][y])
    return dp[x][y]

answer = 0
for i in range(N):
    for j in range(N):
        answer = max(dfs(i, j) ,answer)
        
print(answer)