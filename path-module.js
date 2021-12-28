const path = require ('path')


console.log(path.sep)
const filePath = path.join('/content', 'subfolder' , 'textfile.txt')

console.log(filePath)

const absolute= path.resolve(__dirname, 'content', 'subfolder', 'textfile.txt')

console.log(absolute)