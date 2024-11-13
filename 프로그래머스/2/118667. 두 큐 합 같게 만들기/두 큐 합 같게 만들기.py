from collections import deque

def solution(queue1, queue2):
    queue1, queue2 = deque(queue1), deque(queue2)
    sum1, sum2 = sum(queue1), sum(queue2)
    total_sum = sum1 + sum2

    if total_sum % 2 == 1:
        return -1

    target = total_sum // 2
    count, max_count = 0, len(queue1) * 3

    while count < max_count:
        if sum1 > sum2:
            num = queue1.popleft()
            sum1 -= num
            queue2.append(num)
            sum2 += num
        elif sum2 > sum1:
            num = queue2.popleft()
            sum2 -= num
            queue1.append(num)
            sum1 += num
        else:
            return count
        count += 1

    return -1
