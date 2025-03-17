import sys
from collections import Counter
input = sys.stdin.readline

str = input().lower().strip()
cnt = Counter(str)
max_cnt = cnt.most_common()[0][1]

max_char = [key for key , value in cnt.items() if value == max_cnt]

print(max_char[0].upper() if len(max_char) == 1 else "?")