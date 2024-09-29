from collections import defaultdict

def dfs(start ,path, graph):
    while graph[start]:
        next_airport = graph[start].pop(0)
        dfs(next_airport , path , graph)
    
    path.append(start)


def solution(tickets):
    path = []
    tickets.sort(key = lambda x : x[1])
    
    graph = defaultdict(list)
    for s , e in tickets:
        graph[s].append(e)
        
    for i in graph:
        graph[i].sort()
    
    start = 'ICN'
    dfs(start , path , graph)
    
    return path[::-1]