def solution(array, commands):
    answer = []
    for i in commands:
        s , e , t = i
        newArr = list(array[s - 1:e])
        newArr.sort()
        answer.append(newArr[t - 1]);
        
    return answer