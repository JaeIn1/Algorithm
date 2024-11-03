import sys
input = sys.stdin.readline

n = int(input())
num = [int(input()) for _ in range(n)]

for n in num:
    for i in range(2 , 1000001):
        if n % i == 0:
            print("NO")
            break
        if i == 1000000:
            print("YES")