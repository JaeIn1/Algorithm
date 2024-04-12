let fs = require("fs");
    let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
    let N = input.shift();
    input = input.map(v => v.split(' ').map(Number));
    input.sort((a, b) => a[0] - b[0]);
	// Min Heap을 이용한 Priority Queue 구현
    class MINHEAP {
        constructor() {
            this.heap = [null];
        }

        Insert(item) {
            let cur = this.heap.length;
            if (this.heap.length > 1) {
                while (cur > 1) {
                    const PARENT = Math.floor(cur / 2);
                    if (this.heap[PARENT] > item) {
                        this.heap[cur] = this.heap[PARENT];
                        cur = PARENT;
                    }else break;
                }
            }
            this.heap[cur] = item;
        }

        Pop() {
            if (this.heap.length > 2) {
                let PopElement = this.heap[1];
                this.heap[1] = this.heap.pop();
                let Current = 1;
                let LeftChild = Current * 2;
                let RightChild = Current * 2 + 1;
                while (this.heap[LeftChild]) {
                    let CompareChild = LeftChild;
                    if (this.heap[RightChild] && this.heap[LeftChild] > this.heap[RightChild]) {
                        CompareChild = RightChild;
                    }
                    if (this.heap[CompareChild] < this.heap[Current]) {
                        [this.heap[Current], this.heap[CompareChild]] = [this.heap[CompareChild], this.heap[Current]];
                        Current = CompareChild;
                    }else break;
                    LeftChild = Current * 2;
                    RightChild = Current * 2 + 1;
                }
                return PopElement;
            }else if (this.heap.length === 2) {
                return this.heap.pop();
            } else {
                return null;
            }
        }

        GetMin() {
            return this.heap[1];
        }

        GetLength(){
            return this.heap.length - 1;
        }
    }
	
    const solution = (INPUT) => {
        const PQ = new MINHEAP();
        for (let i = 0; i < INPUT.length; i++) {
            const [START, END] = INPUT[i];
          // 만약 PQ에 값이 있다면 비교 진행
            if (PQ.GetLength()) {
                if (PQ.GetMin() <= START) {
                    PQ.Pop();
                }
                PQ.Insert(END);
              //PQ에 값이 없다면 Push
            } else {
                PQ.Insert(END);
            }
        }
        console.log(PQ.GetLength());
    };
    solution(input);