import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import baseRouter from './router'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import sequelize from './util/database'

const app = express();
const prefix = process.env.PREFIX

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(cookieParser());
app.use(morgan(`:date[clf] :method :url :status :response-time ms`));
app.use(prefix,baseRouter);

sequelize.authenticate().then(()=>{
     console.log("connected")
     sequelize.sync().then(() => {
          console.log('Book table created successfully!');
          app.listen(process.env.PORT,()=>{
               console.log(`${process.env.PORT}`)
          })
       }).catch((error) => {
          console.error('Unable to create table : ', error);
       });
    
})
.catch((err)=>{
     console.log(err)
})

