def solution(nums):
    return min(len(list(set(nums))) , len(nums) // 2)