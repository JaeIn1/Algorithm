function solution(cards1, cards2, goal) {
    class Queue{
        items = [];
        head = 0;
        tail = 0;
        
        constructor(array){
            this.items = array;
            this.rear = array.length;
        }
        
        push(item){
            this.items.push(item);
            this.tail++;
        }
        pop(){
            return this.items[this.head++];
        }
        
        first(){
            return this.items[this.head];
        }
        empty(){
            return this.tail === this.head;
        }    
    }
    
    let answer = "Yes";
    cards1 = new Queue(cards1);
    cards2 = new Queue(cards2);
    
    goal.forEach((e) => {
        if(cards1.first() === e) cards1.pop();
        else if(cards2.first() === e) cards2.pop();
        else{
            answer = "No";
        }
    })
    
    
    return answer;
}