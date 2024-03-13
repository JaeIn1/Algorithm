function solution(land) {
   return Math.max(...land.reduce((acc, row) => {
       return [
           row[0] + Math.max(acc[1], acc[2], acc[3]),
           row[1] + Math.max(acc[0], acc[2], acc[3]),
           row[2] + Math.max(acc[0], acc[1], acc[3]),
           row[3] + Math.max(acc[0], acc[1], acc[2])
      ]
  }, [0, 0, 0, 0]));
}