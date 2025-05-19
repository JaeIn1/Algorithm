def solution(s):
    n = len(s)
    answer = n
    
    
    for i in range(1 , n // 2 + 1):
        splited = []
        
        # 0부터 시작하돼 i만큼 증가시키고, 미리 분리한 문자열을 배열에 저장한다.
        # 그다음 분리된 배열 길이의 -1까지 돌리면서
        # cur , next를 비교해서 같으면 카운트 증가
        # 아니면 두가지 경우 - cnt가 1인경우 그냥 바로 더하기
        # cnt가 2이상인 경우 이미 같았던게 있는거니까 카운트 + cur을 더한다.
        # 그리고 남은 두가지 케이스 count가 1일때 마지막 문자열이 남는 경우, 2이상일때는 count + 배열의 가장 마지막 원소를 더한다.
        
        
        # 나눠서 배열에 저장
        for j in range(0, n, i):
            splited.append(s[j : j + i])
            
        count = 1
        # 압축된 문자열 저장 변수
        temp_str = ""
        for i in range(0 , len(splited) - 1):
            cur , next = splited[i] , splited[i + 1]
            if cur == next:
                count += 1
            else:
                if count == 1:
                    temp_str += cur                    
                else:
                    temp_str += f"{count}{cur}"
                count = 1
        
        # 마지막에 원소가 남았을 때
        if count == 1:
            temp_str += splited[-1]
        else:
            temp_str += f"{count}{splited[-1]}"
        
        answer = min(answer , len(temp_str))
        
        
    return answer
