const {readFileSync,writeFileSync}=require('fs')
console.log('start')
const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')

writeFileSync('./content/pepa.txt',`Here is the result:${first}, ${second}.`,{flag:'a'})
console.log(first,'\n',second)
writeFileSync('./content/subfolder/text.txt',`Pepa ${ new Date().getFullYear()}`)
//nema flag:a ili ax, obrise i upise novu vrednost Pepa 2023.
console.log('done with task')
console.log('starting the next task')
//program ide sequencial i to ide veoma sporo ako ima vise korisnika koji koriste aplikaciju