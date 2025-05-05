N , M = map(int, input().split())
graph = [list(map(int , input().split())) for _ in range(N)]
search = [list(map(int , input().split())) for _ in range(M)]

prefix = [[0 for _ in range(N + 1)] for _ in range(N + 1)]

for x in range(N):
    for y in range(N):
        prefix[x + 1][y + 1] = prefix[x][y + 1] + prefix[x + 1][y] - prefix[x][y] + graph[x][y]


for s in search:
    x1 , y1 , x2 , y2 = s
    print(prefix[x2][y2] - prefix[x1-1][y2] - prefix[x2][y1-1] + prefix[x1-1][y1-1])


