N = int(input())

person = [list(map(int , input().split())) for _ in range(N)]


result = [1 for _ in range(N)]

for i in range(N):
    for j in range(N):
        if j == i:
            continue
        
        if person[i][0] < person[j][0] and person[i][1] < person[j][1]:
            result[i] += 1
            
            
for r in result:
    print(r)