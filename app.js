// const _= require('lodash')

// const items = [1,[2,[3,[4,[5]]]]]

// const newitems = _.flattenDeep(items)    // flattendeep  is used to flatten recursively all the nested arrays of an array
// console.log(newitems)



// console.log("hello world hello")

// console.log("first")

// const s="second"

// setTimeout((s)=>{
//     console.log("second"),10000
// })


// However, in general, if you have multiple function calls with different timeouts, the order in 
// which they are executed is determined by the way they are scheduled and run by the system.


// setTimeout(()=>{
//     console.log("third"),1000
// })
// console.log("third")






const http = require('http');
const server = http.createServer((req,res) => {
    // if(req.url==='/'){
    //     res.end(`Homepage`)
    // }
    // if(req.url=== '/about'){
    //     res.end(`aboutpage`)
    // }
    // res.write(`first`)

    res.end(`error page`)
    // res.write(`second`)


    //VERY IMPORTANT FACT
    // if any res.end statement got executed then after that no res.end or res.write
    //  statement should gte executed as it will give error of writing after the end statement


})

server.listen(157);






// const {readFile, writeFile} = require('fs');
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async () => {
//     try {
//         const first = await readFilePromise('./first.txt','utf8')
//         const second = await readFilePromise('./second.txt','utf8')
//         await writeFilePromise('./result-mind-frenade.txt',`This is Awesome : ${first} ${second}`)
//         console.log(first,second)
//     }catch(error){
//         console.log(error)

//     }
// }


// start()






// readFile('./freecodenode/first.txt','utf8',(err,data) => {
//     if(err){
//         return;
//     }else{
//         console.log(data)
//     }
// })

// server.listen(5400,()=>{
//     console.log('Server Listening on port 5400...')
// })