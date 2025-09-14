# 최소 몇 단계의 과정 -> bfs 생각
# 알파벳 하나만 다른 단어를 큐에 추가 + step + 1
# 해당 단어랑 같다면 현재 step을 반환

from collections import deque

def solution(begin, target, words):
    answer = 0
    
    if target not in words:
        return 0
    
    q = deque()
    q.append([begin , 0])
    
    while len(q):
        now, step = q.popleft()
        
        if now == target:
            return step
        
        for word in words:
            count = 0
            
            for i in range(len(now)):
                if word[i] != now[i]:
                    count += 1
                    
            if count == 1:
                q.append([word , step + 1])
                
    return 0
    