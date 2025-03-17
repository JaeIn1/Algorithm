import sys
input = sys.stdin.readline

N , M = map(int , input().strip().split())

arr1 = [input().rstrip() for _ in range(N)]
arr2 = [input().rstrip() for _ in range(M)]


result = []

arr_dict = dict()

for i in arr1:
    arr_dict[i] = 1
    
for i in arr2:
    if i in arr_dict:
        result.append(i)
        
result.sort()
print(len(result))
for i in result:
    print(i)
