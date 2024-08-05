def solution(array):
    answer = 0
    for i in array:
        answer += [s for s in str(i)].count("7")
    return answer