import sys
input = sys.stdin.readline

A, B , C , D , E ,F = map(int , input().split())

for x in range(-999 , 1000):
    for y in range(-999 , 1000):
        if A*x + B*y == C:
            if D*x + E*y == F:
                print(x , y)
                break


