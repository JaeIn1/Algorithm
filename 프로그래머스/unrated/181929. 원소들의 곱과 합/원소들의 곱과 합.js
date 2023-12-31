function solution(num_list) {
    let mul = num_list.reduce((a,c)=> a*c);
    let sum = num_list.reduce((a,c)=> a+c)**2;
    
    
    return mul < sum ? 1 : 0;
}