T = int(input())

for _ in range(T):
    text = input()
    K = int(input())

    d = dict()
    for idx , t in enumerate(text):
        if t not in d:
            d[t] = []
        d[t].append(idx)
    
    
    min_length = float('inf')
    max_length = 0

    flag = False
    for key , value in d.items():
        if len(value) < K:
            continue

        flag = True
        for i in range(len(value) - K + 1):
            l = value[i + K - 1] - value[i] + 1
            min_length = min(min_length , l)
            max_length = max(max_length , l)

    
    if flag:
        print(f"{min_length} {max_length}")
    else:
        print(-1)
