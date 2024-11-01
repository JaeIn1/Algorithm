import sys
input = sys.stdin.readline

n , m = map(int , input().split())

puddles = [list(map(int , input().split())) for _ in range(n)]
puddles.sort()

result = 0
cur = 0

for s , e in puddles:
    if cur < s:
        cur = s
    diff = e - cur
    if diff % m == 0:
       result += diff // m
       cur = e
    else:
        result += diff // m + 1
        cur = e + (m - diff % m)
        
print(result)