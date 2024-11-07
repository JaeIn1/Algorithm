N , K = map(int , input().split())

prefix = [0] * (N + 1)
arr = list(map(int , input().split()))

for i in range(N):
    prefix[i + 1] = prefix[i] + arr[i]
    
answer = []
for k in range(K , N + 1):
    answer.append(prefix[k] - prefix[k - K])
    
print(max(answer))