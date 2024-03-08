function solution(bandage, health, attacks) {
    var answer = 0;
    let [a , b , c] = bandage;
    let curHealth = health;
    let attackTime = [];
    attacks.forEach((e) => attackTime.push(e[0]))
    let success = 0;
    let n = attacks[attacks.length -1][0];
    
    for(let i = 1; i <= n; i++){
        if(attackTime.includes(i)){
            let idx = attackTime.indexOf(i);
            let [x , y] = attacks[idx];
            success = 0;
            curHealth -= y;
            if(curHealth <= 0) return -1;
        }
        else{
            if(curHealth === health){
                success += 1;
                //continue;
            }
            else{
                curHealth += b;
                success += 1;
                if(curHealth >= health){
                    curHealth = Math.min(health , curHealth);
                }
                if(success === a){
                    curHealth += c;
                    success = 0;
                }
            }
        }
        console.log(curHealth , success)
    }
    
    return curHealth;
}