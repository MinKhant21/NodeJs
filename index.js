// Html Rendering
const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{
    fs.readFile('./pages/index.html',(error,data)=>{
        res.write(data)
        res.end()
    })
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

//File read model Aync

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


