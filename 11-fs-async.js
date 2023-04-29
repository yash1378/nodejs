const {readFile , writeFile }= require('fs')

readFile('./first.txt','utf8',(err,result) => {
if(err){
    console.log(err)
    return
}
    // console.log(result)
const first =  result;


// console.log(first)
readFile('./second.txt' , 'utf8' , (err,result) => {
    if(err){
        console.log(err);
        return;
    }
    const second  = result;
    // console.log(result)
    writeFile('./newasync.txt','hello this made in this operation hello this made in this operation',(err,result) => {
        if(err){
            console.log(err)
            return
        }
        console.log(result);
        setTimeout(()=>{
            console.log(second),1000
        })
        //as we are not reading the file here so we are not expecting anything in return as the result .

        })
    })
 })

 setTimeout(()=>{
    console.log("ended"),1000
})


//basically what happened in sync was that only after the upper code got executed then only the lower code got executed 
// no matter how much time the upper code takes while in async it happend that as compiler sees that that the lets say read
//  code is going to take time so it immediately sends it to the callabck queue and itself jumps to the code lower to the read code