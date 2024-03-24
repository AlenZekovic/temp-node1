const amount=6

if(amount<10){
    console.log("Small")
}else{
    console.log("big")
}
console.log(`Hey ${amount}`)
//to execute file node 1-intor.js  to execute.
setTimeout(()=>{
    console.log("Hello")
},1000)

function ime(){
    let ime="Alen"
    setTimeout(()=>{
        console.log(ime)
    },1000)
}
ime()

async function ime(){
    let myPromise=new Promise((resolve)=>{
        setTimeout(()=>{resolve("Alen")},3000)
    })
    let rezultat=await myPromise
    return console.log(rezultat)
}
console.log(ime())