def solution(arr):
    stk = []
    i = 0
    while(i < len(arr)):
        if len(stk) == 0:
            stk.append(arr[i])
        elif stk[-1] < arr[i]:
            stk.append(arr[i])
        elif stk[-1] >= arr[i]:
            stk.pop()
            continue
        i+=1
            
    return stk