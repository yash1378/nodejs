const {readFileSync , writeFileSync }= require('fs')

const first = readFileSync('./first.txt','utf8')
const second = readFileSync('./second.txt','utf8')
console.log("starting")

setTimeout(()=>{
    console.log(first),10000
})

// console.log(first)
// console.log(second)

writeFileSync('./new.txt','hello this made in this operation',(err,result)=>{
    console.log(result)
})
// {flag : 'a'})

console.log("done with the task")
setTimeout(()=>{
    console.log(second),1000
})


// this flag is used to append data in the existing file as writefilesync will otherwise overwrite all the data  




// const second = writeFileSync('./first.txt','this is again updated new file.txt','utf8')
// const third = readFileSync('./first.txt','utf8')


// console.log(second)
// console.log(third)
