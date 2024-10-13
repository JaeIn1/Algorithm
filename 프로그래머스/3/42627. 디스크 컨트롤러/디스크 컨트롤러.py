import heapq
 
def solution(jobs):
    answer = 0
    now_time = 0
    finish = 0 # 완료한 작업
    heap = []
    total_time = 0
    before_request = -1
    
    while finish < len(jobs):
        # 현재 시간 기준 작업할 수 있는 애들 가져오기
        for job in jobs:
            if before_request < job[0] <= now_time:
                heapq.heappush(heap, [job[1],job[0]]) # 위치 바꿔 넣기
        # 작업        
        if len(heap)>0: # 수행할 작업이 있다면
            now_working = heapq.heappop(heap) # 소요시간이 가장 작은 애 꺼내기
            before_request = now_time
            now_time += now_working[0] # 일 끝난 시점으로 워프
            total_time += (now_time - now_working[1]) # 이 작업이 대기하고 끝날때까지 걸린 시간
            finish += 1
            
        else: # 수행할 작업이 없으면
            now_time += 1
    answer = int(total_time / len(jobs))
    return answer