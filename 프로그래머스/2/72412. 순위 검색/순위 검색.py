from collections import defaultdict

def binary_search(query, score):
    left, right = 0, len(query)
    
    if not right:
        return 0
    
    while left<right:
        mid = (left+right)//2
        
        if query[mid]>=score:
            right = mid
        else:
            left = mid + 1
            
    return left

def solution(infos, queries):
    answer = []
    
    applicants = defaultdict(list)
    
    for info in infos:
        info = info.split()
        
        for lang in [info[0], '-']:
            for job in [info[1], '-']:
                for career in [info[2], '-']:
                    for food in [info[3], '-']:
                        applicants[lang+job+career+food].append(int(info[4]))
                        
    for key in applicants:
        applicants[key].sort()
        
    for query in queries:
        query = query.replace("and ", "").split()
        
        score = int(query[-1])
        query = "".join(query[:-1])
        
        left = binary_search(applicants[query], score)
        answer.append(len(applicants[query])-left)
    
    
    return answer