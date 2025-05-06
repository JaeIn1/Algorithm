N = int(input())
graph = [0] * 1001 # 기둥의 개수만큼 초기화

x_list = []
y_list = []

for i in range(N):
    x ,y = map(int , input().split())
    x_list.append(x)
    y_list.append(y)
    graph[x] = y
    

max_x = max(x_list)
max_y = max(y_list)
prefix = [0] * (max_x + 2)
suffix = [0] * (max_x + 2)


max_point = []
# 앞에서부터 누적합
h = 0
for i in range(1, max_x + 3):
    if graph[i] == max_y:
        max_point.append(i)
        break
    h = max(graph[i] , h)
    prefix[i + 1] = prefix[i] + h
    

 # 뒤에서부터 누적합
h = 0
for i in range(max_x , 0 , -1):
    if graph[i] == max_y:
        max_point.append(i)
        break
    h = max(graph[i] , h)
    suffix[i] = suffix[i + 1] + h
    
answer = max(prefix) + max(suffix)
answer += (max_point[1] - max_point[0] + 1) * max_y

    
print(answer)


