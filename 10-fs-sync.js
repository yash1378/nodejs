const {readFileSync , writeFileSync }= require('fs')

const first = readFileSync('./first.txt','utf8')
const second = readFileSync('./second.txt','utf8')

console.log(first)
console.log(second)

writeFileSync('./new.txt','hello this made in this operation',
{flag : 'a'})
// const second = writeFileSync('./first.txt','this is again updated new file.txt','utf8')
// const third = readFileSync('./first.txt','utf8')


// console.log(second)
// console.log(third)
