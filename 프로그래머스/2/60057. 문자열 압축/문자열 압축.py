def solution(s):
    answer = []
    l = len(s)
    if l == 1:
        return 1
    
    for i in range(1 ,l//2 + 1):
        st = ""
        temp = s[:i]
        cnt = 1
        
        for j in range(i , l , i):
            if temp == s[j:j + i]:
                cnt += 1
            else:
                if cnt > 1:
                    st += str(cnt) + temp
                else:
                    st += temp
                cnt = 1
                temp = s[j:j + i]
                
        if cnt > 1:
            st += str(cnt) + temp
        else:
            st += temp
        answer.append(len(st))
        
    return min(answer)