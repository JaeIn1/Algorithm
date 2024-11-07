N = int(input())

prefix = [0] * (N + 1)
arr = list(map(int , input().split()))

for i in range(N):
    prefix[i + 1] = max(prefix[i] + arr[i] , arr[i])

    
print(max(prefix[1:]))