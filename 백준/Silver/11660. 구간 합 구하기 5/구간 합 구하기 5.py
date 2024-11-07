n , k = map(int , input().split())

board = [list(map(int , input().split())) for _ in range(n)]
arr = [list(map(int , input().split())) for _ in range(k)]

prefix = [[0] * (n + 1) for _ in range(n + 1)]

for i in range(n):
    for j in range(n):
        prefix[i + 1][j + 1] = prefix[i][j + 1] + prefix[i + 1][j] + board[i][j] - prefix[i][j]
        
for x1 , y1 , x2 , y2 in arr:
    print(prefix[x2][y2] - prefix[x2][y1 - 1] - prefix[x1 - 1][y2] + prefix[x1 - 1][y1 - 1])
    
            
        