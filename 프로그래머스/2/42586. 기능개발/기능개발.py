from collections import deque

def solution(progresses, speeds):
    
    answer = []
    progress_queue = deque(progresses)
    speeds_queue = deque(speeds)
    
    while len(progress_queue) > 0:
        for i in range(len(progress_queue)):
            progress_queue[i] += speeds_queue[i]
            if progress_queue[i] >= 100: progress_queue[i] = 100
            
        count = 0
        while progress_queue and progress_queue[0] >= 100:
            count += 1
            progress_queue.popleft()
            speeds_queue.popleft()
        
        if count > 0: answer.append(count)
    return answer