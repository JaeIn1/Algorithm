function solution(bridge_length, weight, truck_weights) {
  let answer = 1;
    let bridge = new Array(bridge_length).fill(0);
    let bridgr_sum = 0;
    
    
    bridge.shift();
    bridgr_sum += truck_weights[0];
    bridge.push(truck_weights.shift());
    
    while(bridgr_sum > 0){
        answer++;
        
        bridgr_sum -= bridge.shift();
        if(truck_weights.length > 0 && bridgr_sum + truck_weights[0] <= weight){
            bridgr_sum += truck_weights[0];
            bridge.push(truck_weights.shift());
        }
        else{
            bridge.push(0);
        }
    }
  
  return answer;
}