def custom_u(u):
    temp = ""
    
    for c in u:
        if c == '(':
            temp += ')'
        else:
            temp += '('
    
    return temp


def is_correct(s):
    stack = []
    
    for c in s:
        if c == '(':
            stack.append(c)
        else:
            if len(stack) == 0:
                return False
            stack.pop()
            
    return len(stack) == 0
    
    
def seperate_u_v(p):
    open_cnt = 0
    close_cnt = 0
    
    for i in range(len(p)):
        if p[i] == '(':
            open_cnt += 1
        else:
            close_cnt += 1
            
        if open_cnt == close_cnt:
            u = p[:i+1]
            v = p[i+1:]
            return u, v
            
    
def solution(p):
    if not p:
        return ""
    
    u, v = seperate_u_v(p)
    
    # 3. 올바른 괄호인지 판단
    if is_correct(u):
        return u + solution(v)
    
    # 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면
    else:
        temp = '(' + solution(v) + ')'
        temp += custom_u(u[1:-1])
        return temp