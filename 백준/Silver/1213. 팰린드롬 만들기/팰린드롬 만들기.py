import sys
from collections import Counter
input = sys.stdin.readline

word = list(map(str ,input().rstrip()))

cnt_word = Counter(word)


odd = 0
mid = ""

for k , v in cnt_word.items():
    if v % 2 == 1:
        odd += 1
        mid = k
        
        if odd >= 2:
            print("I'm Sorry Hansoo")
            exit()
       
result = ""     
for k , v in sorted(cnt_word.items()):
    result += (k * (v // 2))
    
print(result + mid + result[::-1])
    