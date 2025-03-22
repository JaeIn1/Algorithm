from collections import Counter

T = int(input())  # 테스트 케이스 수

for _ in range(T):
    N = int(input())
    teams = list(map(int , input().split()))
    
    counter = Counter(teams)
    
    
    rank = 1
    score = {}
    
    for i in range(N):
        if counter[teams[i]] == 6:
            if teams[i] in score:
                score[teams[i]].append(rank)
            else:
                score[teams[i]] = [rank]
            rank += 1
            
    winner = sorted(score , key=lambda x: (sum(score[x][0:4]) , score[x][4]))[0]
    print(winner)
