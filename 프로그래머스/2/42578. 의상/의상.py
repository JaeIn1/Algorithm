def solution(clothes):
    clothes_dict = dict()
    answer = 1
    
    for i in clothes:
        v , k = i
        if k in clothes_dict: clothes_dict[k] += 1
        else: clothes_dict[k] = 1
    
    for i in clothes_dict.values():
        answer *= i + 1

    return answer - 1
