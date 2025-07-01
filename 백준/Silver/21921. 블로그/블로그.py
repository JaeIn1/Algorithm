N, X = map(int, input().split())
arr = list(map(int, input().split()))


cur_sum = sum(arr[:X])
max_sum = cur_sum
count = 1

for i in range(1, N - X + 1):
    cur_sum = cur_sum - arr[i - 1] + arr[i + X - 1]

    if cur_sum > max_sum:
        max_sum = cur_sum
        count = 1
    elif cur_sum == max_sum:
        count +=1


if max_sum == 0:
    print('SAD')
else:
    print(max_sum)
    print(count)