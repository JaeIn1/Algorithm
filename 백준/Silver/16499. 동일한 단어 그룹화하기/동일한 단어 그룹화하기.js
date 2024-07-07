const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const n = Number(input[0]);
const words = new Set([...input.slice(1, 1 + n)]);
const count = new Map();

words.forEach(word => {
    const sortedWord = word.split('').sort().join('');

    if (count.has(sortedWord))
        count.set(sortedWord, count.get(sortedWord) + 1);
    else
        count.set(sortedWord, 1);
})

console.log(count.size);