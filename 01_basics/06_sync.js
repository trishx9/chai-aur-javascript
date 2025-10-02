const fs = require('fs');

const data = fs.writeFileSync('file.txt' , "utf-8");
console.log(data);
const content = "hello world"
console.log('Next line');
fs.writeFileSync('file.txt' , "hello world!" ) // both write and appent should be either sync or async at a time coz sync with start and only half of the text will be written
fs.appendFileSync('File.txt' , "welcome to Node.js" ) 
    
 