import sys
from collections import Counter
input = sys.stdin.readline

N , M = map(int , input().strip().split())

word = [input().rstrip() for _ in range(N)]

# 사전순
word.sort()

# 특정 길이 이상
word = list(filter(lambda x: len(x) >= M , word))

# 길이가 길수록 앞에 배치 -> 리버스
word = sorted(word , key=lambda x: len(x) , reverse=True)

# 자주 사용한 단어 우선순위
cnt = Counter(word).most_common()

for key , value in cnt:
    print(key)