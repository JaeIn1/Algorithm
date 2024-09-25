def solution(s):
    answer = True
    stack = []
    
    for i in s:
        if i == '(': stack.append('(')
        elif i == ')' and len(stack) > 0: stack.pop()
        else: return False

    if len(stack) > 0: answer = False
    return answer