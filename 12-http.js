const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("Hello there")
    }
    else if(req.url==='/about'){
        res.end("Welcome")
    }
    else if(req.url==='/about/pepa'){
        const ip = res.socket.remoteAddress
        const port = res.socket.remotePort
        res.write(`<h1>Hello Pepa</h1>`)
        res.end(`Your IP address is ${ip} and your source port is ${port}.`)
    }
    else{
        res.end(`<h1>Oops!</h1>
        <p>Page 404</p>
        <a href="/">Home</a>`)
    }
    
})
server.listen(5000)

/* const http=require('http')
const {readFileSync}=require('fs')
const pepa=readFileSync('./content/pepa.txt','utf8')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("Hello there")
    }
    else if(req.url==='/about'){
        res.end(pepa)
    }
    else if(req.url==='/about/pepa'){
        const ip = res.socket.remoteAddress
        const port = res.socket.remotePort
        res.write(`<h1>Hello Pepa</h1>`)
        res.end(`Your IP address is ${ip} and your source port is ${port}.`)
    }
    else{
        res.end(`<h1>Oops!</h1>
        <p>Page 404</p>
        <a href="/">Home</a>`)
    }
    
})
server.listen(5000) */