def solution(n, words):
    answer = [0, 0]
    check = set()
    
    for i in range(len(words)):
        if i > 0 and (words[i] in check or words[i - 1][-1] != words[i][0]):
            answer[0] = (i % n) + 1
            answer[1] = (i // n) + 1 
            return answer
        
        check.add(words[i])
    
    return answer
