N = int(input())
result = set()
number = []

def dfs():
    if number:
        result.add(int(''.join(map(str, number))))

    for i in range(10):
        if not number or number[-1] > i:
            number.append(i)
            dfs()
            number.pop()

dfs()
result = sorted(result)

if len(result) >= N:
    print(result[N-1])
else:
    print(-1)