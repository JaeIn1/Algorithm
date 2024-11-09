import sys
input = sys.stdin.readline

n = int(input())
ingre = [list(map(int , input().split())) for _ in range(n)]

answer = float('inf')

def dfs(idx , sin , jan , use):
    global answer
    if idx == n:
        if use == 0:
            return
        answer = min(answer , abs(sin - jan))
        return
    
    dfs(idx + 1 , sin * ingre[idx][0] , jan + ingre[idx][1] , use + 1)
    dfs(idx + 1 , sin , jan , use)
    
    
dfs(0 , 1 , 0 , 0)
print(answer)
