import express from 'express'
import router  from './router';
import mysql from 'mysql'
//static file
express.static('assets')
const app = express();
//router
app.use(router)
//

const c = mysql.createConnection({
    host:"",
    user:'root',
    password:"",
    database:'test'
});

c.connect(()=>{
    console.log("logged")
    c.query("SELECT * FROM users",(error,data,fields)=>{
        console.log(data)
    })
})


let port = 2000
app.listen(port,()=>{
    console.log(`Server Running : ${port}`)
})