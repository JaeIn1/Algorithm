from collections import deque

def checkWord(word1, word2):
    count = 0
    for i in range(len(word1)):
        if word1[i] != word2[i]:
            count += 1
        if count > 1:
            return False
    return count == 1 

def bfs(begin, target, words):
    if target not in words:
        return 0
    
    queue = deque([(begin, 0)]) 
    visited = set([begin]) 
    
    while queue:
        current_word, steps = queue.popleft()
        
        if current_word == target:
            return steps
        
        for word in words:
            if word not in visited and checkWord(current_word, word):
                queue.append((word, steps + 1))
                visited.add(word)
    
    return 0

def solution(begin, target, words):
    return bfs(begin, target, words)
