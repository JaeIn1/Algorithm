N, K = map(int, input().split())


dx = [0, 0, -1, 1]
dy = [1, -1, 0, 0]

def change_dir(d):
    if d == 0: 
        return 1
    elif d == 1: 
        return 0
    elif d == 2:
        return 3
    else: 
        return 2

def get_turn_cnt(horse_cnt, chess_map, horse_posi_dir):
    cur_stack_horse = [[[] for _ in range(N)] for _ in range(N)]
    for i in range(K):
        x, y, d = horse_posi_dir[i]
        cur_stack_horse[x][y].append(i)
    
    turn_cnt = 1
    while turn_cnt <= 1000:
        for horse_index in range(horse_cnt):
            # 현재 말의 위치와 방향
            x, y, d = horse_posi_dir[horse_index]
            nx, ny = x + dx[d], y + dy[d]
            
            # 파란색이거나 범위를 벗어날 때
            if not (0 <= nx < N and 0 <= ny < N) or chess_map[nx][ny] == 2:
                new_dir = change_dir(d)
                horse_posi_dir[horse_index][2] = new_dir
                
                nx, ny = x + dx[new_dir], y + dy[new_dir]
                
                if not (0 <= nx < N and 0 <= ny < N) or chess_map[nx][ny] == 2:
                    continue
            
            # 현재 말의 스택에서 위치 찾기
            horse_stack_index = -1
            for i in range(len(cur_stack_horse[x][y])):
                if cur_stack_horse[x][y][i] == horse_index:
                    horse_stack_index = i
                    break
            
            # 이동할 말들 (현재 말부터 위에 있는 모든 말들)
            moving_horses = cur_stack_horse[x][y][horse_stack_index:]
            cur_stack_horse[x][y] = cur_stack_horse[x][y][:horse_stack_index]
            
            # 빨간색이면 순서를 뒤집음
            if chess_map[nx][ny] == 1:
                moving_horses.reverse()
            
            # 이동할 말들을 새로운 위치에 추가
            cur_stack_horse[nx][ny].extend(moving_horses)
            
            # 이동한 말들의 위치 정보 업데이트
            for horse in moving_horses:
                horse_posi_dir[horse][0] = nx
                horse_posi_dir[horse][1] = ny
            
            # 4개 이상 쌓이면 게임 종료
            if len(cur_stack_horse[nx][ny]) >= 4:
                return turn_cnt
        
        turn_cnt += 1
    
    return -1


chess_map = []
for _ in range(N):
    chess_map.append(list(map(int, input().split())))

# 말의 정보 입력 (1-based를 0-based로 변환)
horse_posi_dir = []
for _ in range(K):
    x, y, d = map(int, input().split())
    horse_posi_dir.append([x-1, y-1, d-1])

answer = get_turn_cnt(K, chess_map, horse_posi_dir)
print(answer)