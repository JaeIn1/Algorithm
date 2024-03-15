function solution(sequence, k) {
  let left = 0;
  let right = 0;
  let sum = sequence[0];
  const result = [];

  while (right < sequence.length) {
    if (sum < k) {
      // k보다 작으면 오른쪽 포인터 이동
      right++;
      sum += sequence[right];
    } else if (sum > k) {
      // k보다 크면 왼쪽 포인터 이동
      sum -= sequence[left];
      left++;
    } else {
      // k와 같으면 result에 push
      result.push([left, right]);
      right++; // 다른 값을 구하기 위해 포인터 이동
      sum += sequence[right];
    }
  }
    result.sort((a , b) => (a[1] - a[0]) - (b[1] - b[0]))[0];

  return result[0];
}