import sys
input = sys.stdin.readline

N, M = map(int, input().split())
board = [list(map(int, input().split())) for _ in range(N)]

home = []
ch = []
for i in range(N):
    for j in range(N):
        if board[i][j] == 1:
            home.append((i, j))
        elif board[i][j] == 2:
            ch.append((i, j))

INF = float('inf')
min_result = INF

def backTracking(depth, start, selected):
    global min_result

    if depth == M:
        total_distance = 0

        for hx, hy in home:
            min_distance = INF
            for cx, cy in selected:
                distance = abs(hx - cx) + abs(hy - cy)
                min_distance = min(min_distance, distance)
            total_distance += min_distance

        min_result = min(min_result, total_distance)
        return

    for i in range(start, len(ch)):
        selected.append(ch[i])
        backTracking(depth + 1, i + 1, selected)
        selected.pop()

backTracking(0, 0, [])
print(min_result)
