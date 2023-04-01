const path = require('path');
console.log(path.sep)
 
console.log(path.parse(`C:/Users/HP/Desktop/freecodenode`))

const filepath = path.join('/freecodenode/','subfolder','test.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolute = path.resolve(__dirname, 'content' , 'subfolder' , 'test.txt')
console.log(absolute)