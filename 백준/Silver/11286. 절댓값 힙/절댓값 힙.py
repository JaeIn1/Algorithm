import sys
import heapq
input = sys.stdin.readline

n = int(input())
arr = [int(input()) for _ in range(n)]

h = []
result = []
for i in arr:
    if i != 0:
        heapq.heappush(h , (abs(i) , i))
    else:
        if len(h):
            result.append(heapq.heappop(h)[1])
        else:
            result.append(0)
        
for i in result:
    print(i)
    