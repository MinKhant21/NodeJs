const helper = require('./helper')
const fs = require('fs')
console.log("start Program")
const file = fs.readFile('index.txt',(error,data)=>{
    // if (e) {
    //     throw e
    // }
    console.log(data.toString())
   
})
// const sum = () => {
//     console.log(helper.sum(1,2))
// }
console.log(sum()+'h')
console.log(helper.isLiked)
console.log("End Program")

