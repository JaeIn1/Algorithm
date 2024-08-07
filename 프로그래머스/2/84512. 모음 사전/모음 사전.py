from itertools import product
def solution(word):
    
    s = set(["A","E","I","O","U"])
    char = list(s)

    all_combinations = []

    for i in range(1, len(char) + 1):
        for p in product(char, repeat=i):
            all_combinations.append(''.join(p))

    sort_arr = sorted(all_combinations)
    print(sort_arr)
    return sort_arr.index(word) + 1
                        