import sys
input = sys.stdin.readline

n , m = map(int , input().split())

def recur(number , arr):
    if number == m:
        print(' '.join(map(str , arr)))
        return
    
    for i in range(1 , n + 1):
        if i in arr:
            continue
        arr.append(i)
        recur(number + 1 , arr)
        arr.pop()
    
    
arr = []
recur(0 , arr)