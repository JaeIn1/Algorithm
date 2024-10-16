def solution(prices):
    n = len(prices)
    answer = [0] * n
    
    for i in range(n):
        count = 0
        for j in range(i + 1 , n):
            if prices[i] <= prices[j]: count += 1
            else:
                count += 1
                break
            
            
        answer[i] = count
        
    
    return answer