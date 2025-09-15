import math
from collections import defaultdict

def solution(fees, records):
    answer = []
    
    base_time, base_fee, unit_time, unit_fee = fees
    d = defaultdict(lambda : [0, 0])
    
    for record in records:
        time, car_num, car_state = record.split(" ")
        h , m = map(int, time.split(":"))
        current_time = h * 60 + m
        
        
        if car_state == "IN":
            d[car_num][0] = current_time
        else:
            in_time = d[car_num][0]
            park_time = current_time - in_time
            d[car_num][1] += park_time
            d[car_num][0] = -1
            
        
    end_time = 23 * 60 + 59
    for key , value in d.items():
        
        if value[0] != -1:
            d[key][1] += end_time - value[0]
            
    result = []
    for car_num in sorted(d.keys()):
        total_time = d[car_num][1]
        
        if total_time <= base_time:
            fee = base_fee
        else:
            extra_time = total_time - base_time
            extra_units = math.ceil(extra_time / unit_time)
            fee = base_fee + (extra_units * unit_fee)
        
        result.append(fee)
    
    return result
            

