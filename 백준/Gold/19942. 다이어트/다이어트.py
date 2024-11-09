import sys
input = sys.stdin.readline

n = int(input())
t = list(map(int, input().split()))
ingre = [list(map(int, input().split())) for _ in range(n)]

min_price = float('inf')

def dfs(idx, dan, gi, tan, bi, price):
    global min_price
    global select
    global answer_select
    
    if dan >= t[0] and gi >= t[1] and tan >= t[2] and bi >= t[3]:
        if price < min_price:
            min_price = price
            answer_select = []
            for i in select:
                answer_select.append(i)   
    if idx == n:
        return
        
        
    select.append(idx + 1)
    dfs(idx + 1 , dan + ingre[idx][0], gi + ingre[idx][1], tan + ingre[idx][2], bi + ingre[idx][3], price + ingre[idx][4]) 
    select.pop()
    
    dfs(idx + 1, dan, gi, tan, bi, price)


select = []
answer_select = []
dfs(0, 0, 0, 0, 0, 0)



if min_price == float('inf'):
    print(-1)
else:
    print(min_price)
    print(' '.join(map(str , answer_select)))
