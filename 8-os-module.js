const os=require("os")
const user=os.userInfo()
console.log(user)
//method returns the system uptime in seconds
console.log(`The system Uptime is:${os.uptime()}`)

const currentOS={
    name:os.type(),
    release:os.release(),
    toalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS)
