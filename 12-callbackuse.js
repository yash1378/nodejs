const {readFile , writeFile }= require('fs')
console.log("start");
readFile('./first.txt','utf8',(err,result) => {
if(err){
    console.log(err)
    return
}
    // console.log(result)
const first =  result;
readFile('./second.txt' , 'utf8' , (err,result) => {
    if(err){
        console.log(err);
        return;
    }
    const second  = result;
    writeFile('./newasync.txt','hello this made in this operationhello this made in this operation',(err,result) => {
        if(err){
            console.log(err)
            return
        }
        // console.log(result);
        console.log("done with the task")


        })
    })
 })

 console.log("starting the next task")