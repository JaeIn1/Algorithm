N , M = map(int , input().split())

board = []
for _ in range(N):
    board.append(list(map(str , input())))
    
result = [[0 for _ in range(M)] for _ in range(N)]


for i in range(N):
    cloude_check = False
    for j in range(M):
        if board[i][j] == 'c':
            result[i][j] = 0
            cloude_check = True
        elif cloude_check == True and board[i][j] == '.':
            result[i][j] = result[i][j - 1] + 1
        else:
            result[i][j] = -1
            

for r in result:
    print(' '.join(map(str , r)))
            