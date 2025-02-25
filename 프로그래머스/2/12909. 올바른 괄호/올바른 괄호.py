def solution(s):
    stack = []

    
    for str in s:
        if str == "(":
            stack.append(str)
        else:
            if len(stack) == 0:
                return False
            else:
                stack.pop()
    
    if len(stack):
        return False
    else:
        return True
    
    