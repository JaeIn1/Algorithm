import sys
input = sys.stdin.readline

n, k = map(int, input().split())
obstacle = [int(input()) for _ in range(n)]
temp = [0] * (k)

for i in range(len(obstacle)):
    num = obstacle[i]
    if i % 2 == 0:
        temp[0] += 1
        temp[num] -= 1
    else:
        temp[k - num] += 1
     
prefix = [0 for _ in range(k + 1)]
for i in range(k):
    prefix[i + 1]=  prefix[i] + temp[i]
    
prefix = prefix[1:]
min_num = min(prefix) 
min_cnt = prefix.count(min_num)
print(f"{min_num} {min_cnt}")