// Html Rendering
const http = require('http')
const fs = require('fs')
const qs = require('querystring')

http.createServer((req,res)=>{
    // console.log(req.url)
    let url = req.url
    // console.log(req.method)
    let method = req.method
    if(method == "POST"){
        let data = ""
        req.on('data',(d)=>{
            data+=d
        })
        req.on('end',()=>{
            console.log(qs.parse(data).name)
        })
    }
    if(url == '/')
    {
        fs.readFile('./pages/index.html',(error,data)=>{
            res.write(data)
            res.end()
        })
    }else if(url == '/about')
    {
        fs.readFile('./pages/about.html',(error,data)=>{
            res.write(data)
            res.end()
        })
    }else if(url == '/contact')
    {
        fs.readFile('./pages/contact.html',(error,data)=>{
            res.write(data)
            res.end()
        })
    }
  
}).listen(9000,()=>{
    console.log("localhost:9000")
})

// Http server 

// const http = require('http');
// http.createServer((res,req)=>{
//     req.end('End Node Run')
// }).listen(9000,()=>{
//     console.log('localhost : 9000')
// })

//File read module Aync

// const helper = require('./helper')
// const fs = require('fs')
// console.log("start Program")
// const file = fs.readFile('index.txt',(error,data)=>{
//     // if (e) {
//     //     throw e
//     // }
//     console.log(data.toString())
   
// })
// // const sum = () => {
// //     console.log(helper.sum(1,2))
// // }
// console.log(sum()+'h')
// console.log(helper.isLiked)
// console.log("End Program")


