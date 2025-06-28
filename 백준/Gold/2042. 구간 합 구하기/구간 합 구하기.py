# 0. 입력받기
import sys
input = sys.stdin.readline
from math import ceil, log

N, M, K = map(int,input().split())

l = []
h = ceil(log(N,2))
segment_tree = [0] * 2**(h + 1)


# 1. 트리 만들기
def tree_init(start, end, index):
    
    if start == end:
        segment_tree[index] = l[start-1]
        return segment_tree[index]
    
    mid = (start + end) // 2
    segment_tree[index] = tree_init(start , mid , index*2) + tree_init(mid + 1 , end, index*2+1)
    return segment_tree[index]


       
# 2.값 찾기
def search(start, end, left, right, index):
    # 범위가 아닌 경우
    if start > right or end < left:
        return 0
    
    # 완전 포함할 경우
    if start >= left and end <= right:
        return segment_tree[index]
    
    # 아닐 경우 다시 탐색
    mid = (start + end) // 2
    return search(start, mid, left, right,index*2) + search(mid+1, end, left, right, index*2+1)



# 3. 트리 값 바꿔주기
def update(start, end, update_idx, diff, index):
	# update 하려는 범위가 초과될 경우
    if start > update_idx or end < update_idx:
        return
    
    segment_tree[index] += diff
	
    # 리프노드까지 바꿔주었으면 재귀함수를 끝낸다.
    if start == end:
        return

	# 내가 관여하고 있는 노드들을 찾아서 바꿔준다 -> 재귀함수로 구현
    mid = (start + end) // 2
    update(start, mid, update_idx, diff, index*2)
    update(mid+1, end, update_idx, diff, index*2+1)


for _ in range(N):
    l.append(int(input()))

tree_init(1, N, 1)

for _ in range(M+K):
    a, b, c = map(int,input().split())
    if a == 1:
        diff = c - l[b-1]
        l[b-1] = c
        update(1, N, b, diff, 1)

    elif a == 2:
        print(search(1, N, b, c, 1))