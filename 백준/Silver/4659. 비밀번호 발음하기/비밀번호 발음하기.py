import sys
input = sys.stdin.readline


def isValid(line):
    vowels = ['a' , 'e', 'i' , 'o' , 'u']
    
    hasVowel = False;
    for vowel in vowels:
        if vowel in line:
            hasVowel = True
            break
    
    if hasVowel == False:
        return False
            
    for i in range(len(line) - 2):
        a , b , c = line[i] , line[i + 1] ,line[i + 2]
        if a in vowels and b in vowels and c in vowels:
            return False
        elif  a not in vowels and b not in vowels and c not in vowels:
            return False
        
    for i in range(len(line) - 1):
        a , b = line[i] , line[i + 1]
        if a == b and a != 'e' and a != 'o':
            return False
        
        
    return True
    

while True:
    line = input().rstrip()
    if line == 'end':
        break
    
    if isValid(line):
        print(f"<{line}> is acceptable.")
    else:
        print(f"<{line}> is not acceptable.")
