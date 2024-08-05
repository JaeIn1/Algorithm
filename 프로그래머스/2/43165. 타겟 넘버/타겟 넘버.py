def dfs(num, numbers, target):
    if len(numbers) == 0:
        if num == target:
            return 1
        return 0

    numOfMethods = 0

    curr_num = numbers[0]
    next_numbers = numbers[1:]
    numOfMethods += dfs(num + curr_num, next_numbers, target)
    numOfMethods += dfs(num - curr_num, next_numbers, target)

    return numOfMethods


def solution(numbers, target):
    answer = dfs(0, numbers, target)
    return answer