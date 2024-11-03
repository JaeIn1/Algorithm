import sys
input = sys.stdin.readline

n = int(input())
hint = [list(map(int , input().split())) for _ in range(n)]
answer = 0

for a in range(1 , 10):
    for b in range(1, 10):
        for c in range(1, 10):
            if a == b or b == c or a == c:
                continue
            
            cnt = 0
            for h in hint:
                number = str(h[0])
                strike = h[1]
                ball = h[2]
            
                # 볼 , 스트라이크 비교
                ball_cnt = 0
                strike_cnt = 0
                
                checkNum = str(a) + str(b) + str(c)
                for t in range(3):
                    if number[t] == checkNum[t]:
                        strike_cnt += 1
                    elif number[t] in checkNum:
                        ball_cnt += 1
                
                if ball == ball_cnt and strike == strike_cnt:
                    cnt += 1
                    
            if cnt == n:
                answer += 1
            
print(answer)