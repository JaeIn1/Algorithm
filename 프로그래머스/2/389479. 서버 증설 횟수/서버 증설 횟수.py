def solution(players, m, k):
    answer = 0
    size = len(players)
    servers = [0] * size
    
    def server_expansion(need_server, start):
        for idx in range(k):
            if start + idx < size:
                servers[start + idx] += need_server
    
    for idx, player in enumerate(players):
        if player >= m:
            need_server = (player // m) - servers[idx]
            if need_server > 0:
                server_expansion(need_server, idx)
                answer += need_server
    
    return answer