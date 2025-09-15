# 하나씩 순사적으로 왼쪽으로 이동하면서 빠져나가야할 때 -> 먼저 빼고, 추후에 넣는 방법으로 시도해봐도 될듯

def solution(bridge_length, weight, truck_weights):
    time = 0
    
    bridge = [0] * bridge_length
    current_weight = 0
    
    while current_weight > 0 or truck_weights:
        time += 1
        current_weight -= bridge.pop(0)
        
        if truck_weights:
            next_truck = truck_weights[0]
            
            if current_weight + next_truck <= weight:
                current_weight += truck_weights[0]
                bridge.append(truck_weights[0])
                truck_weights.pop(0)
            else:
                bridge.append(0)
        else:
            bridge.append(0)
            
    return time
            
    