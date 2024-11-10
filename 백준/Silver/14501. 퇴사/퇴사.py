import sys
input = sys.stdin.readline

n = int(input())
sangdam = [list(map(int, input().split())) for _ in range(n)]

result = 0

def dfs(date , price):
    global result
    
    if date > n - 1:
        if date > n: return
        result = max(result, price)
        return
        
    
    #상담을 받을 경우
    dfs(date + sangdam[date][0] , price + sangdam[date][1])
    #상담을 받지 않을 경우
    dfs(date + 1 , price)
    
dfs(0 , 0)
print(result)