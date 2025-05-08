import sys
sys.setrecursionlimit(100000)

N = int(input())
forest = [list(map(int, input().split())) for _ in range(N)]

dp = [[0] * N for _ in range(N)]


dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def dfs(x, y):
    if dp[x][y] != 0:
        return dp[x][y]

    dp[x][y] = 1
    
    for i in range(4):
        nx, ny = x + dx[i], y + dy[i]

        if 0 <= nx < N and 0 <= ny < N:
            if forest[nx][ny] > forest[x][y]:
                dp[x][y] = max(dp[x][y], dfs(nx, ny) + 1)

    return dp[x][y]


answer = 0
for i in range(N):
    for j in range(N):
        answer = max(answer, dfs(i, j))

print(answer)
