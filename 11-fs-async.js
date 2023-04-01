const {readFile , writeFile }= require('fs')

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
        console.log(result);

        })
    })
 })