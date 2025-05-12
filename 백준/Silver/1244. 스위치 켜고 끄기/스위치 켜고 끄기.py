N = int(input())
sw = list(map(int , input().split()))
student_cnt = int(input())
student_arr = [list(map(int , input().split())) for _ in range(student_cnt)]

for s in student_arr:
    a , b = s

    if a == 1:
        for i in range(b -1 , len(sw) , b):
            sw[i] = 1 - sw[i]

    else:
        if b == 1:
            if sw[b-1] == 0:
                sw[b-1] = 1
            else:
                sw[b-1] = 0
        else:
            s = b - 2
            e = b

            while s >= 0 and e < len(sw) and sw[s] == sw[e]:
                s -= 1
                e += 1

            
            s += 1 
            e -= 1

            for i in range(s , e + 1):
                sw[i] = 1 - sw[i]

for i in range(0, N, 20):
    print(*sw[i:i + 20])
