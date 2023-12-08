import express from 'express'
import baseRouter from './src/routes/productRoute'
import cors from 'cors'
const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/products',baseRouter);



app.listen(4000,()=>{
     console.log('localhost : 4000')
})
