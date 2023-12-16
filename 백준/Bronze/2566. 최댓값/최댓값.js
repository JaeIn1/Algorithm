const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")
let max = 0
let coord = [1, 1]

input.forEach((row, rIdx) => {
    row.split(" ").forEach((col, cIdx) => {
        const numCol = Number(col)
        if(numCol > max) {
            max = numCol
            coord = [rIdx + 1, cIdx + 1]
        }
    })
})
console.log(max + "\n" + coord.join(" "));