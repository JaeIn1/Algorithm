dx = [1 , -1 , 0 , 0]
dy = [0 , 0 , -1 , 1]

def fork(storage , box):
    temp = []
    x_len = len(storage)
    y_len = len(storage[0])
    
    for i in range(1 , x_len-1):
        for j in range(1 , y_len-1):
            if storage[i][j] == box:
                for k in range(4):
                    nx , ny = i + dx[k] , j + dy[k]
                    if 0 <= nx < x_len and 0 <= ny < y_len and storage[nx][ny] == "0":
                        temp.append([i , j])
                        break
    
    for x , y in temp:
        is_outting(storage , x , y)
        
        
def crane(storage , box):
    temp = []
    x_len = len(storage)
    y_len = len(storage[0])
    
    for i in range(1 , x_len-1):
        for j in range(1 , y_len-1):
            if storage[i][j] == box:
                temp.append([i , j])
    
    for x , y in temp:
        storage[x][y] = "1"
        is_outting(storage , x , y)
        

def is_outting(storage , x , y):
    x_len = len(storage)
    y_len = len(storage[0])
    outside = False
    
    for k in range(4):
        nx , ny = x + dx[k] , y + dy[k]
        if 0 <= nx < x_len and 0 <= ny < y_len and storage[nx][ny] == "0":
            storage[x][y] = "0"
            outside = True
            break
      
    if outside:
        for k in range(4):
            nx , ny = x + dx[k] , y + dy[k]
            if 0 <= nx < x_len and 0 <= ny < y_len and storage[nx][ny] == "1":
                storage[nx][ny] = "0"
                is_outting(storage , nx , ny)
            
        
def solution(storage, requests):
    answer = 0
    # 0 = 외부랑 연결된 곳, 1 = 사방이 막힌 빈 공간
    storage = [list("0" + i + "0") for i in storage]    # 테두리를 "0"으로 채우기
    storage.insert(0, list("0" * len(storage[0])))
    storage.append(list("0" * len(storage[0])))

    for q in requests:
        if len(q) == 1:
            fork(storage, q)
        else:
            crane(storage, q[0])
    
    for i in range(1, len(storage)-1):
        for j in range(1, len(storage[0])-1):
            if storage[i][j] not in ["0", "1"]:
                answer += 1
                

    return answer


