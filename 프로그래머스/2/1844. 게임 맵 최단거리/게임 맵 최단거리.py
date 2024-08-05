from collections import deque 

def solution(maps):
    x_h, y_h = len(maps[0]), len(maps)

    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    visited = [[False for _ in range(x_h)] for _ in range(y_h) ]

    queue = deque([(0, 0, 1)])
    visited[0][0] = True

    while queue:
        x, y, d = queue.popleft()

        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]

            if 0 <= nx and nx < x_h and 0 <= ny and ny < y_h:
                if not visited[ny][nx] and maps[ny][nx] == 1:
                    if nx == x_h - 1 and ny == y_h - 1:
                        return d + 1
                    queue.append((nx, ny ,d + 1))
                    visited[ny][nx] = True
    return -1