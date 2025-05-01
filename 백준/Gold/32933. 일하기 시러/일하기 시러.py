N, M, K = map(int, input().split())
fruits = [tuple(map(int, input().split())) for _ in range(K)]


dp = [0] * (M + 1)

for day in range(M + 1):
    for A, B, C in fruits:
        plant_day = day
        harvest_day = plant_day + A

        if harvest_day > M:
            continue
        
        profit = 0
        while harvest_day <= M:
            profit += C
            dp[harvest_day] = max(dp[harvest_day], dp[plant_day] + profit)
            harvest_day += B


print(max(dp) * N)