def solution(nums):
    result = min(len(nums) // 2 , len(set(nums)))
    return result