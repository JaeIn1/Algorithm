def solution(picks, minerals):
    answer = 0
    sum = 0
    for x in picks:
        sum += x
    
    # 해당 길이까지 자르기 위한 스킬
    # 총 개수를 먼저 구한 뒤 그만큼까지 자른다.
    num_min = sum * 5
    if len(minerals) > num_min:
        minerals = minerals[:num_min]
    
    # 각각 자른만큼 개수를 세기위해 // 연산자를 사용해서
    # 만약 5개씩 자른다고 하면 //5를 이용해서 카운트한다!
    cnt_min = [[0, 0, 0]for x in range(10)] 
    for i in range(len(minerals)):
        if minerals[i] == 'diamond': 
            cnt_min[i//5][0] += 1
        elif minerals[i] == 'iron': 
            cnt_min[i//5][1] += 1
        else : 
            cnt_min[i//5][2] += 1
    
    
    # 다이아, 철, 돌 순으로 내림차순 정렬을 위한 코드
    sorted_cnt_min = sorted(cnt_min, key = lambda x: (-x[0], -x[1], -x[2]))
    
    # 있거나 1개 이상인 경우를 보기 위해 체크
    for mineral in sorted_cnt_min:
        d, i, s = mineral
        for p in range(len(picks)):
            if p == 0 and picks[p]>0: 
                picks[p]-=1
                answer += d + i + s
                break
            elif p == 1 and picks[p]>0: 
                picks[p]-=1
                answer += 5*d + i + s
                break
            elif p == 2 and picks[p]>0:
                picks[p]-=1
                answer += 25*d + 5*i + s
                break
            
    return answer