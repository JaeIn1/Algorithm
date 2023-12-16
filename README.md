# Algorithm
This is a auto push repository for Baekjoon Online Judge created with [BaekjoonHub](https://github.com/BaekjoonHub/BaekjoonHub).

### 사용한 함수
* sort()
  * 정렬한 배열. 원 배열이 정렬됨. (복사본이 만들어지는 것이 아님!!)
  * 배열 오름차순 , 내림차순에 사용
* reduce()
  * 배열의 합계 및 최대값 , 최소값에 사용 할 수 있음
  * reduce(a,b => { return ...}) 이라면 a는 배열의 첫번째 요소가 들어감
* 배열.includes()
  * 포함하는지 체크
  * 값이 포함 안되는 부분을 출력하는 문제에서 사용 할 수 있음
 * 배열.reverse()
   * 배열의 순서를 뒤바꿈
   * 특정 부분을 역순으로 할때
     * splice와 reverse를 같이 사용한다.
* forEach(a,index)
  * 2차원배열에서 인덱스 구할때 쉽게 구할 수 있음
* Math.max(...arr)
  * 배열안에 요소중 최대값 구할때 용이
