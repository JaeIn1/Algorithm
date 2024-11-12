from datetime import datetime

def solution(a, b):
    
    dic = {0:"MON" , 1:"TUE" , 2:"WED" , 3:"THU" , 4:"FRI" , 5:"SAT" , 6:"SUN"}
    date = datetime(2016,a,b)
    
    return dic[date.weekday()]