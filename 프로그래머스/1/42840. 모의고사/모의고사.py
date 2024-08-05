def solution(answers):
    count = [0 , 0 , 0]
    p1 = [1, 2, 3, 4, 5]
    p2 = [2, 1, 2, 3, 2, 4, 2, 5]
    p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    for i , n in enumerate(answers):
        if answers[i] == p1[i % len(p1)] : count[0]+=1
        if answers[i] == p2[i % len(p2)] : count[1]+=1
        if answers[i] == p3[i % len(p3)] : count[2]+=1
        
    maxCount = max(count)
    answer = []
    for i in range(len(count)):
        if count[i] == maxCount: answer.append(i + 1)
        
        
    return answer