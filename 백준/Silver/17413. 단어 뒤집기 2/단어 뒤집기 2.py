import sys
from collections import deque
input = sys.stdin.readline

words = input().rstrip()

q = deque()

answer = ""
check = False

for w in words:
    if w == '<':
        check = True
        for _ in range(len(q)):
            answer += q.pop()
        q.append("<")
    elif w == '>':
        q.append(">")
        for _ in range(len(q)):
            answer += q.popleft()
        check = False
            
    elif w == " " and check == False:
        for _ in range(len(q)):
            answer += q.pop()
        answer += " "
    else:
        q.append(w)
    

for _ in range(len(q)):
    answer += q.pop()
    
print(answer)
    