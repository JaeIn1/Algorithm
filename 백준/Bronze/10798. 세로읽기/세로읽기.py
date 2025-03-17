import sys
input = sys.stdin.readline

arr = [list(input().strip()) for _ in range(5)]
max_l = 0

for a in arr:
    max_l = max(len(a) , max_l)
    

result = ""

for i in range(max_l):
    for j in range(5):
        if i >= len(arr[j]):
            continue
        else:
            result += arr[j][i]
            
print(result)
