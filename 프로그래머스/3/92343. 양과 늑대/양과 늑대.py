from collections import deque

def solution(info, edges):
    # 1. 트리 구조 만들기
    tree = [[] for _ in range(len(info))]
    for parent, child in edges:
        tree[parent].append(child)
    
    # 2. BFS로 상태 탐색
    answer = 0
    # 상태: (현재노드, 양, 늑대, 방문가능한노드들)
    queue = deque()
    queue.append((0, 1, 0, tuple(tree[0])))  # 0번에서 시작
    
    visited = set()
    
    while queue:
        current, sheep, wolf, next_nodes = queue.popleft()
        answer = max(answer, sheep)
        
        # 중복 방지
        state = (current, sheep, wolf, next_nodes)
        if state in visited:
            continue
        visited.add(state)
        
        # 3. 다음 방문 가능한 모든 노드 탐색
        for next_node in next_nodes:
            next_sheep = sheep + (1 if info[next_node] == 0 else 0)
            next_wolf = wolf + (1 if info[next_node] == 1 else 0)
            
            # 양이 더 많아야 안전!
            if next_sheep > next_wolf:
                # 새로운 방문 가능 노드 = 기존 - 방문한곳 + 그 노드의 자식들
                new_next = list(next_nodes)
                new_next.remove(next_node)
                new_next.extend(tree[next_node])
                
                queue.append((next_node, next_sheep, next_wolf, tuple(new_next)))
    
    return answer