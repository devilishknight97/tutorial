const os = require('os')


//info about user

const user = os.userInfo();
console.log(user)


//uotime in seconds 

console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {

    name: os.type(),
    realese: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),

}

console.log(currentOS)