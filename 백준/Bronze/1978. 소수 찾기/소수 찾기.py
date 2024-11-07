n = int(input())
arr = list(map(int , input().split()))

result = []
for i in arr:
    cnt = 0
    for j in range(2 , i):
        if i % j == 0:
            cnt += 1
    if cnt == 0 and i > 1:
        result.append(i)

print(len(result))
    
        