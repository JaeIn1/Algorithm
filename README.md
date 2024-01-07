# Algorithm
This is a auto push repository for Baekjoon Online Judge created with [BaekjoonHub](https://github.com/BaekjoonHub/BaekjoonHub).

### 새로 알게된 내용
* 2차원 배열을 만들고 그 값을 채울때 => new Array().fill()를 사용하지 않는다.
  * 이유는 fill 메소드는 얕은 복사로 값을 채우기 때문에 같은 주소값을 가지고 모든 행에 같은 값이 들어간다.
* 배열안에 값을 서로 바꾸는 문제일 경우 temp 사용대신 forEach(([a,b])=>{[arr[a] , arr[b]] = [arr[b] , arr[a]]})로 쉽게 바꿀 수 있다.
  * 프로그래머스 level0 수열과 구간 쿼리 3
* 문자열의 특정 인덱스 부분을 수정하고 싶을때
  * slice로 수정부분을 구하고
  * splice를 사용하여 기존 문자열을 수정한다.
  * level0 문자열 여러번 뒤집기

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
* splice()
  * 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
  * array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
* findIndex()
  * findIndex() 메서드는 테스트 기능을 충족하는 요소의 인덱스를 반환하거나 테스트를 통과한 요소가 없으면 -1을 반환합니다.
