# from itertools import combinations

# def solution(n, q, ans):
#     answer = 0
    
    
#     # 완탐으로 생각을 한다면
#     arr = [i for i in range(1 , n + 1)]
#     combi = list(combinations(arr , len(q[0])))
    
#     for c in combi:
#         compare = []
#         for q_idx, k in enumerate(q):
#             cnt = 0
#             for i in range(len(k)):
#                 if k[i] in c:
#                     cnt += 1
#                 if cnt == ans[q_idx]:
#                     break
#             compare.append(cnt)
        
#         if compare == ans:
#             answer += 1
            
#     return answer


from itertools import combinations

def solution(n, q, ans):
    answer = 0
    
    # 완탐으로 생각을 한다면
    arr = [i for i in range(1, n + 1)]
    combi = list(combinations(arr, len(q[0])))
    
    for c in combi:
        compare = []
        for idx, k in enumerate(q):  # 🔧 enumerate 추가
            cnt = 0
            for i in range(len(k)):
                if k[i] in c:
                    cnt += 1
            compare.append(cnt)
        
        if compare == ans:
            answer += 1
            
    return answer